from flask import render_template, request, redirect, url_for, flash, session
from app import app, db
from app.models import Customer, Appointment
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

# Home route
@app.route('/')
def home():
    return render_template('signin.html')

# Signup
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        name = request.form['name']
        phone = request.form['phone']
        email = request.form['email']
        password = generate_password_hash(request.form['password'])

        # Check if user already exists
        if Customer.query.filter((Customer.username == username) | (Customer.email == email)).first():
            flash('User already exists! Try logging in.', 'warning')
            return redirect(url_for('signup'))

        new_user = Customer(username=username, name=name, phone=phone, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()

        flash('Signup successful! Please login.', 'success')
        return redirect(url_for('signin'))

    return render_template('signup.html')

# Login
@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        user = Customer.query.filter_by(email=email).first()
        if user and check_password_hash(user.password, password):
            session['user_id'] = user.customer_id
            flash('signin successful!', 'success')
            return redirect(url_for('dashboard'))
        else:
            flash('Invalid credentials, please try again.', 'danger')

    return render_template('signin.html')

# Dashboard
@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        return redirect(url_for('signin'))
    user = Customer.query.get(session['user_id'])
    appointments = Appointment.query.filter_by(customer_id=user.customer_id).all()
    return render_template('dashboard.html', user=user, appointments=appointments)

# Logout
@app.route('/logout')
def logout():
    session.pop('user_id', None)
    flash('Logged out successfully.', 'info')
    return redirect(url_for('login'))
