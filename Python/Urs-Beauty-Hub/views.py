from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from .forms import SignupForm, SigninForm
from .models import Order, OrderItem
from django.conf import settings

# Signup
def signup_view(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('cart')
    else:
        form = SignupForm()
    return render(request, 'signup.html', {'form': form})

# Signin
def signin_view(request):
    if request.method == 'POST':
        form = SigninForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('cart')
    else:
        form = SigninForm()
    return render(request, 'signin.html', {'form': form})

# Logout
def logout_view(request):
    logout(request)
    return redirect('signin')

# Cart view
@login_required
def cart_view(request):
    if request.method == 'POST':
        # Cart comes as JSON from frontend or session
        import json
        import urllib.parse

         # Get cart data safely
        cart_data = json.loads(request.POST.get('cart_data', '[]'))
        if not cart_data:
            return render(request, 'cart.html', {'error': 'Cart is empty'})
        
        # Calculate total and create order
        total = sum(int(item.get('price', 0)) for item in cart_data)
        order = Order.objects.create(user=request.user, total=total)

        # Create order items
        for item in cart_data:
            OrderItem.objects.create(
                order=order,
                service_name=item.get('serviceName', 'Unknown'),
                price=int(item.get('price', 0))
            )

        # WhatsApp Admin Notification
        admin_number = '+919702358551'
        message = f"New Order #{order.id} by {request.user.username}\n"
        for item in cart_data:
            message += f"• {item.get('serviceName','')} - ₹{item.get('price',0)}\n"
        message += f"Total: ₹{total}"
        whatsapp_admin_url = f"https://api.whatsapp.com/send?phone={admin_number}&text={urllib.parse.quote(message)}"

        # WhatsApp Customer Notification
        customer_number = request.POST.get('customerPhone', '')
        if customer_number:
           whatsapp_customer_url = f"https://api.whatsapp.com/send?phone={customer_number}&text={urllib.parse.quote('Your order has been placed! ' + message)}"
        else:
           whatsapp_customer_url = None
        return render(request, 'order_success.html', {
            'order': order,
            'whatsapp_admin_url': whatsapp_admin_url,
            'whatsapp_customer_url': whatsapp_customer_url
        })

    # GET request → show cart
    return render(request, 'cart.html')

@login_required
def cart_view(request):
    return render(request, 'cart_test.html')

# My Orders page
@login_required
def my_orders_view(request):
    orders = Order.objects.filter(user=request.user).order_by('-created_at')
    return render(request, 'my_orders.html', {'orders': orders})
