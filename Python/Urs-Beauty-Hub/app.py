from flask import Flask
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
import json
import urllib.parse
import traceback

app = Flask(__name__)
app.secret_key = "supersecretkey123"

db = SQLAlchemy()  # db not yet bound

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Anusiva%400554@127.0.0.1/beautyhub'
    db.init_app(app)   # <-- bind db to this app
    return app

# ------------------------
# In-memory "database" (demo)
# ------------------------
USERS = {}      # username -> {password, email, phone}
ORDERS = []     # list of order dicts

# ------------------------
# Helpers
# ------------------------
def safe_int(v, default=0):
    try:
        return int(v)
    except Exception:
        return default

# ------------------------
# Home, Services, Contact
# ------------------------
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/about')
def about():
    return render_template('about.html')

# ------------------------
# Authentication
# ------------------------
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form.get('username', '').strip()
        email = request.form.get('email', '').strip()
        phone = request.form.get('phone', '').strip()
        password = request.form.get('password', '').strip()
        if not username or not password:
            flash("Username and password required", "danger")
            return redirect(url_for('signup'))
        if username in USERS:
            flash("Username already exists", "danger")
            return redirect(url_for('signup'))
        USERS[username] = {'password': password, 'email': email, 'phone': phone}
        flash("Signup successful. Please login.", "success")
        return redirect(url_for('signin'))
    return render_template('signup.html')

@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        username = request.form.get('username', '').strip()
        password = request.form.get('password', '').strip()
        user = USERS.get(username)
        if user and user['password'] == password:
            session['username'] = username
            session.setdefault('cart_items', [])
            flash(f"Welcome {username}", "success")
            return redirect(url_for('cart'))
        else:
            flash("Invalid credentials", "danger")
            return redirect(url_for('signin'))
    return render_template('signin.html')

@app.route('/logout')
def logout():
    session.clear()
    flash("You have been signed out.", "info")
    return redirect(url_for('home'))

# ------------------------
# Cart Page (GET shows, POST creates order)
# ------------------------
@app.route('/cart', methods=['GET', 'POST'])
def cart():
    try:
        if 'username' not in session:
            flash("Please sign in first to view your cart.", "warning")
            return redirect(url_for('signin'))

        session.setdefault('cart_items', [])

        if request.method == 'POST':
            # Receive cart_data and customer fields
            cart_data = request.form.get('cart_data', '[]')
            customer_name = request.form.get('customerName', '').strip()
            customer_phone = request.form.get('customerPhone', '').strip()
            customer_address = request.form.get('customerAddress', '').strip()
            geo_link = request.form.get('geoLink', '').strip()

            try:
                cart_items = json.loads(cart_data) if cart_data else []
                if not isinstance(cart_items, list):
                    cart_items = []
            except Exception:
                cart_items = []

            if not cart_items:
                flash("Your cart is empty!", "warning")
                return redirect(url_for('cart'))

            total = sum(safe_int(item.get('price', 0)) for item in cart_items)

            # Create order
            order = {
                'id': len(ORDERS) + 1,
                'username': session['username'],
                'items': cart_items,
                'total': total,
                'timestamp': datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                'customer': {
                    'name': customer_name,
                    'phone': customer_phone,
                    'address': customer_address,
                    'geo': geo_link
                },
                'status': 'Service Pending',
                'completed_at': None,
                'reviews': []
            }
            ORDERS.append(order)

            # ✅ Build WhatsApp message with “Complete Order” link
            order_url = f"http://127.0.0.1:6500/update_status/{order['id']}"  # change to your domain in production
            message = (
                f"🛍 *New Service Order #{order['id']}*\n"
                f"👤 Customer: {customer_name}\n"
                f"📞 Phone: {customer_phone}\n"
                f"🏠 Address: {customer_address}\n"
                f"🌍 Location: {geo_link}\n\n"
            )
            for item in cart_items:
                message += f"• {item.get('serviceName', 'Unknown Service')} - ₹{item.get('price', 0)}\n"
            message += (
                f"\n💰 Total: ₹{total}\n"
                f"🕒 Order Placed: {order['timestamp']}\n\n"
                f"✅ When service is done, click here to mark complete:\n"
                f"{order_url}"
            )

            whatsapp_url = f"https://api.whatsapp.com/send?phone=+919702358551&text={urllib.parse.quote(message)}"

            # Clear cart
            session['cart_items'] = []

            flash("Order placed successfully!", "success")
            return redirect(whatsapp_url)

        cart_items = session.get('cart_items', [])
        return render_template('cart.html', cart_items=cart_items)

    except Exception as e:
        print("❌ ERROR in /cart:", e)
        traceback.print_exc()
        flash("An internal error occurred while processing your cart. Please try again.", "danger")
        return redirect(url_for('home'))

# ------------------------
# ✅ Order Completion Endpoint
# ------------------------
@app.route('/update_status/<int:order_id>', methods=['GET'])
def update_status(order_id):
    """
    This route is opened from WhatsApp by the service agent.
    It marks the order as 'Service Completed' and adds completion timestamp.
    """
    try:
        for order in ORDERS:
            if order['id'] == order_id:
                order['status'] = 'Service Completed'
                order['completed_at'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                return f"✅ Order #{order_id} marked as Service Completed at {order['completed_at']}"
        return f"❌ Order #{order_id} not found."
    except Exception as e:
        return f"⚠️ Error updating order status: {str(e)}"

# ------------------------
# My Orders Page
# ------------------------
@app.route('/my_orders', methods=['GET', 'POST'])
def my_orders():
    try:
        if 'username' not in session:
            flash("Please sign in first.", "warning")
            return redirect(url_for('signin'))

        if request.method == 'POST':
            order_id = safe_int(request.form.get('order_id', 0))
            action = request.form.get('action', '')
            for order in ORDERS:
                if order['id'] == order_id and order['username'] == session['username']:
                    if action == 'complete':
                        order['status'] = 'Service Completed'
                        order['completed_at'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                        flash(f"Order #{order_id} marked as completed.", "success")
                    elif action == 'review':
                        rating = safe_int(request.form.get('rating', 0))
                        review = request.form.get('review', '').strip()
                        order.setdefault('reviews', []).append({'rating': rating, 'review': review})
                        flash(f"Review added for Order #{order_id}.", "success")
            return redirect(url_for('my_orders'))

        user_orders = [o for o in ORDERS if o.get('username') == session['username']]
        return render_template('my_orders.html', orders=user_orders)

    except Exception as e:
        print("❌ ERROR in /my_orders:", e)
        traceback.print_exc()
        flash("An internal error occurred while loading your orders. Please try again.", "danger")
        return redirect(url_for('home'))

# ------------------------
# Marketplace (completed orders)
# ------------------------
@app.route('/marketplace')
def marketplace():
    completed_orders = [o for o in ORDERS if o.get('status') == 'Service Completed']
    return render_template('marketplace.html', orders=completed_orders)

# ------------------------
# Context Processor for Cart Count
# ------------------------
@app.context_processor
def inject_cart_count():
    try:
        return dict(cart_count=0)
    except Exception:
        return dict(cart_count=0)

# ------------------------
# Run App
# ------------------------
if __name__ == "__main__":
    app.run(debug=True, port=6500)
