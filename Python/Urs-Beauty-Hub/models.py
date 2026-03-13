from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

# -------------------------
# Configure Flask + SQLAlchemy
# -------------------------
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Anusiva%400554@127.0.0.1/beautyhub'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# -------------------------
# Models
# -------------------------

class Customer(db.Model):
    __tablename__ = 'customer'
    customer_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    name = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(15))
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class CustomerAddress(db.Model):
    __tablename__ = 'customer_address'
    address_id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.customer_id'), nullable=False)
    recipient_name = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(15), nullable=False)
    address_line = db.Column(db.Text, nullable=False)
    geo_map_link = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    customer = db.relationship('Customer', backref='addresses')

class Orders(db.Model):
    __tablename__ = 'orders'
    order_id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.customer_id'), nullable=False)
    service_name = db.Column(db.String(100), nullable=False)
    service_count = db.Column(db.Integer, default=1)
    amount = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    customer = db.relationship('Customer', backref='orders')

class Appointment(db.Model):
    __tablename__ = 'appointment'
    appointment_id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.customer_id'), nullable=False)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.order_id'))
    service_name = db.Column(db.String(100), nullable=False)
    appointment_date = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.Enum('Pending', 'Completed', 'Cancelled'), default='Pending')
    slot = db.Column(db.String(20))  # e.g., "09:00-10:00"
    weekday = db.Column(db.String(10))  # e.g., "Monday"
    customer = db.relationship('Customer', backref='appointments')
    order = db.relationship('Orders', backref='appointments')

# -------------------------
# Create all tables
# -------------------------
with app.app_context():
    db.create_all()
    print("All tables created successfully in 'beautyhub'.")
