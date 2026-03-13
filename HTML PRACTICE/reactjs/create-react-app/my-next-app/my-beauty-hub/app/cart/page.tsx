"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface CartItem {
  id?: number | string;
  name: string;
  price: number;
  image?: string;
}

interface FormData {
  name: string;
  phone: string;
  address: string;
  pincode: string;
  location: string;
}

interface Order {
  id: string;
  items: CartItem[];
  totalPrice: number;
  paymentMethod: string;
  orderTime: string;
  userInfo: FormData;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    location: "",
  });

  const router = useRouter();

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const parsedCart = JSON.parse(cartData);
      setCartItems(parsedCart);
      setTotalPrice(
        parsedCart.reduce((sum: number, item: CartItem) => sum + item.price, 0)
      );
    }

    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        phone: user.phone || "",
        address: user.address || "",
        pincode: user.pincode || "",
        location: user.location || "",
      }));
    }
  }, []);

  const removeItem = (key: number | string) => {
    const updatedCart = cartItems.filter(
      (item, index) => item.id !== key && index !== key
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setTotalPrice(updatedCart.reduce((sum, item) => sum + item.price, 0));
  };

  const handlePayAfterService = () => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/auth"); // redirect to sign-in if not signed in
      return;
    }

    const timestamp = new Date().toISOString();

    // Create new order
    const newOrder: Order = {
      id: Date.now().toString(),
      items: cartItems,
      totalPrice,
      paymentMethod: "Pay After Service",
      orderTime: timestamp,
      userInfo: formData,
    };

    // Save order in localStorage
    const existingOrders = localStorage.getItem("orders");
    const orders = existingOrders ? JSON.parse(existingOrders) : [];
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Send WhatsApp message
    const serviceDetails = cartItems
      .map((item) => `🔹 ${item.name} - ₹${item.price.toFixed(2)}`)
      .join("\n");

    const whatsappMessage = `
🛒 *New Order Received!*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
🏠 Address: ${formData.address}, ${formData.pincode}
📍 Location: ${formData.location}
📅 Order Time: ${new Date(timestamp).toLocaleString()}

📋 *Services Ordered:*
${serviceDetails}

💰 Total Amount: ₹${totalPrice.toFixed(2)}
💳 Payment Method: Pay After Service
`;

    const shopNumber = "+919702358551";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${shopNumber}&text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");

    // Clear cart after order
    localStorage.removeItem("cart");
    setCartItems([]);
    setTotalPrice(0);

    // Redirect to My Orders page
    router.push("/my-orders");
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto mt-24 p-6 text-center">
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-24 p-6">
      <h2 className="text-3xl font-bold mb-6">My Cart</h2>

      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div
            key={item.id || index}
            className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg p-4"
          >
            <div className="w-28 h-28 flex-shrink-0">
              <Image
                src={item.image || "/default-service.jpg"}
                alt={item.name}
                width={112}
                height={112}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            <div className="ml-0 sm:ml-6 mt-2 sm:mt-0 flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600 mt-1">₹ {item.price.toFixed(2)}</p>
            </div>

            <button
              onClick={() => removeItem(item.id || index)}
              className="mt-2 sm:mt-0 sm:ml-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg">
        <span className="text-xl font-bold text-green-700">
          Total: ₹ {totalPrice.toFixed(2)}
        </span>
        <button
          onClick={handlePayAfterService}
          className="mt-4 sm:mt-0 px-6 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
        >
          Pay After Service
        </button>
      </div>
    </div>
  );
};

export default CartPage;
