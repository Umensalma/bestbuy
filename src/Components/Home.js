import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";
const productsData = [
  { id: 1, name: "Premium Wireless Headphones", price: 2099, category: "Electronics", description: "High-quality wireless headphones with noise cancellation", imageurl: "https://i.ibb.co/ZV95Zrb/image.png"},
  { id: 3, name: "Smart Fitness Tracker", price: 3500, category: "Wearables", description: "Advanced fitness tracking with heart rate monitoring", imageurl: "https://i.ibb.co/pjdn1Kd/image.png" },
  { id: 4, name: "Gaming Mouse", price: 799, category: "Electronics", description: "Ergonomic gaming mouse with customizable buttons", imageurl: "https://i.ibb.co/rmTMfv1/image.png" },
  { id: 5, name: "Leather Wallet", price: 500, category: "Accessories", description: "Classic leather wallet with multiple compartments", imageurl: "https://i.ibb.co/sC5v028/image.png" },
  { id: 6, name: "Bluetooth Speaker", price: 1500, category: "Electronics", description: "Portable Bluetooth speaker with deep bass", imageurl: "https://i.ibb.co/rdJxvbG/image.png" },
  { id: 7, name: "Stylish Sunglasses", price: 300, category: "Accessories", description: "UV-protection stylish sunglasses", imageurl: "https://i.ibb.co/SDjhhP1/image.png" },
  { id: 8, name: "Noise Cancelling Earbuds", price:1499, category: "Electronics", description: "Compact earbuds with noise-cancellation technology", imageurl: "https://i.ibb.co/R66B5Gd/image.png" },
  { id: 9, name: "Fitness Yoga Mat", price: 199, category: "Fitness", description: "High-density yoga mat for fitness exercises", imageurl: "https://i.ibb.co/NxFcZbH/image.png" },
  { id: 10, name: "Laptop Stand", price: 149, category: "Accessories", description: "Ergonomic laptop stand for desk use", imageurl: "https://i.ibb.co/VgX356d/image.png" },
  { id: 11, name: "Smartphone Pro", price: 149000, category: "Phones", description: "Flagship smartphone with advanced camera features", imageurl: "https://i.ibb.co/rFZW9my/image.pngg" },
  { id: 12, name: "Organic Hand Soap", price: 49, category: "Soaps", description: "Natural and moisturizing hand soap", imageurl: "https://i.ibb.co/Pr3QCVP/image.png" },
  { id: 13, name: "Chocolate Chip Cookies", price: 20, category: "Foods", description: "Freshly baked cookies with chocolate chips", imageurl: "https://i.ibb.co/gTMpcLh/image.png" },
  { id: 14, name: "Ballpoint Pen Set", price: 99, category: "Pens", description: "Pack of 5 smooth-writing pens", imageurl: "https://i.ibb.co/gFsB8h9/image.png" },
  { id: 15, name: "Leather Backpack", price: 800, category: "Bags", description: "Durable and spacious leather backpack", imageurl: "https://i.ibb.co/2Pt1mtK/image.png" },
  { id: 16, name: "Bestseller Novel", price: 200, category: "Books", description: "Top-rated fiction novel", imageurl: "https://i.ibb.co/vLM4CnY/image.png" },
  { id: 17, name: "Wooden Building Blocks", price: 300, category: "Toys", description: "Colorful wooden blocks for kids", imageurl: "https://i.ibb.co/L8fxpWB/image.png" },
  { id: 18, name: "Wireless Charging Pad", price: 500, category: "Electronics", description: "Fast wireless charger for smartphones", imageurl: "https://i.ibb.co/71rp0Sr/image.png" },
  { id: 19, name: "Running Shoes", price: 1900, category: "Fitness", description: "Lightweight and comfortable running shoes", imageurl: "https://i.ibb.co/kccQBNn/image.png" },
  { id: 20, name: "Reusable Water Bottle", price: 100, category: "Fitness", description: "Eco-friendly water bottle with straw lid", imageurl: "https://i.ibb.co/tzSTQ3p/image.png" },
  { id: 21, name: "Tablet", price: 32999, category: "Electronics", description: "High-resolution tablet with stylus support", imageurl: "https://i.ibb.co/80RLdmq/image.png" },
  { id: 22, name: "Luxury Body Wash", price: 25, category: "Soaps", description: "Moisturizing body wash with a fresh scent", imageurl: "https://i.ibb.co/5n2y8Sm/image.png" },
  { id: 23, name: "Granola Bars", price: 20, category: "Foods", description: "Healthy and tasty snack bars", imageurl: "https://i.ibb.co/JmsGsX9/image.png" },
  { id: 24, name: "Gel Ink Pen", price: 19, category: "Pens", description: "Smooth-flowing gel ink pen", imageurl: "https://i.ibb.co/WKqF8b3/image.png" },
  { id: 25, name: "Canvas Tote Bag", price: 600, category: "Bags", description: "Stylish and eco-friendly canvas bag", imageurl: "https://i.ibb.co/YB3j0G3/image.png" },
  { id: 26, name: "Cookbook", price: 299, category: "Books", description: "Easy recipes for beginners", imageurl: "https://i.ibb.co/sykZZB1/image.png" },
  { id: 27, name: "RC Car", price: 799, category: "Toys", description: "Remote-controlled car for kids", imageurl: "https://i.ibb.co/9rjg0nD/image.png" },
  { id: 28, name: "Noise-Cancelling Headphones", price: 2500, category: "Electronics", description: "Over-ear headphones with active noise cancellation", imageurl: "https://i.ibb.co/sFVq326/image.png" },
  { id: 29, name: "Yoga Pants", price: 566, category: "Fitness", description: "Comfortable and stretchable yoga pants", imageurl: "https://i.ibb.co/3SMthMt/image.png" },
  { id: 30, name: "Fitness Dumbbells", price: 1000, category: "Fitness", description: "Adjustable dumbbell set for strength training", imageurl: "https://i.ibb.co/CWSCGGm/image.png" },
  { id: 31, name: "Multipurpose Pencil Pouch", price: 90, category: "Pouches", description: "Durable and spacious pouch for stationery items", imageurl: "https://i.ibb.co/jMp7fzm/image.png" },
  { id: 32, name: "Kids' Action Figure", price: 1200, category: "Toys", description: "Exciting superhero action figure for kids", imageurl: "https://i.ibb.co/jg2cc6n/image.png" },
  { id: 33, name: "Stainless Steel Cooking Bowl", price: 450, category: "Cooking Bowls", description: "Durable and heat-resistant stainless steel bowl", imageurl: "https://i.ibb.co/L0V12ht/image.png" },
  { id: 34, name: "Handstick Umbrella", price: 650, category: "Handsticks", description: "Elegant and sturdy handstick umbrella", imageurl: "https://i.ibb.co/k9XH40t/image.png" },
  { id: 35, name: "Luxury Glossary Notebook", price: 700, category: "Glossaries", description: "Hardcover notebook with premium-quality pages", imageurl: "https://i.ibb.co/fpf4PZV/image.png" },
  { id: 36, name: "Silicone Cooking Bowl Set", price: 500, category: "Cooking Bowls", description: "Set of 3 non-slip silicone bowls for mixing and serving", imageurl: "https://i.ibb.co/P146d25/image.png" },
  { id: 37, name: "Colorful Kids’ Toy Car", price: 550, category: "Toys", description: "Bright and durable toy car for toddlers", imageurl: "https://i.ibb.co/DkhFZ47/image.png" },
  { id: 38, name: "Transparent Zipper Pouch", price: 97, category: "Pouches", description: "Clear pouch ideal for makeup or toiletries", imageurl: "https://i.ibb.co/ydFWjf9/image.png" },
  { id: 39, name: "Wooden Handstick Cane", price: 550, category: "Handsticks", description: "Traditional handcrafted wooden cane with a polished finish", imageurl: "https://i.ibb.co/Vt24cNk/image.png" },
  { id: 40, name: "Professional Glossary Binder", price: 790, category: "Glossaries", description: "Binder with dividers for organizing notes and documents", imageurl: "https://i.ibb.co/TvpZv2m/image.png" },
  { id: 41, name: "Decorative Ceramic Bowl", price: 890, category: "Cooking Bowls", description: "Stylish ceramic bowl for serving and decoration", imageurl: "https://i.ibb.co/b2tnkFv/image.png" },
  { id: 42, name: "Plush Stuffed Toy", price: 350, category: "Toys", description: "Soft and cuddly stuffed animal for kids", imageurl: "https://i.ibb.co/3sLWbcw/image.png" },
  { id: 43, name: "Travel Organizer Pouch", price: 450, category: "Pouches", description: "Compact and lightweight pouch for travel essentials", imageurl: "https://i.ibb.co/k9y3dy8/image.png" },
  { id: 44, name: "Adjustable Handstick Trekking Pole", price: 650, category: "Handsticks", description: "Lightweight and adjustable trekking pole for outdoor activities", imageurl: "https://i.ibb.co/3d1cdy9/image.png" },
  { id: 45, name: "Kids’ Learning Glossary", price: 450, category: "Glossaries", description: "Colorful glossary book for children’s learning", imageurl: "https://i.ibb.co/4R6pcmT/image.png" },
  { id: 46, name: "Microwave-Safe Cooking Bowl", price: 799, category: "Cooking Bowls", description: "BPA-free and microwave-safe plastic bowl", imageurl: "https://i.ibb.co/mHD7GYs/image.png" },
  { id: 47, name: "Remote-Controlled Drone Toy", price: 4599, category: "Toys", description: "High-performance drone with remote control", imageurl: "https://i.ibb.co/BBzB5Tw/image.png" },
  { id: 48, name: "Leather Pen Pouch", price: 85, category: "Pouches", description: "Premium leather pouch for pens and pencils", imageurl: "https://i.ibb.co/W6CPtYR/image.png" },
  { id: 49, name: "Fashionable Handstick Umbrella", price: 500, category: "Handsticks", description: "Compact and fashionable umbrella with ergonomic handle", imageurl: "https://i.ibb.co/LgjSg8p/image.png" },
  { id: 50, name: "Pocket Glossary Dictionary", price: 650, category: "Glossaries", description: "Portable glossary dictionary for quick references", imageurl: "https://i.ibb.co/0Jh3kym/image.png" },

];


const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const filteredProducts = productsData.filter((product) => {
    return (
      (category === "All" || product.category === category) &&
      
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleAddToCart = (productName) => {
    toast.info(`We're working on the payment module for ${productName}...`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="home">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src="favicon.ico"
          alt="Eshop Logo"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        <h1>Best Buy</h1>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Wearables">Wearables</option>
          <option value="Fitness">Fitness</option>
          <option value="Phones">Phones</option>
          <option value="Soaps">Soaps</option>
          <option value="Foods">Foods</option>
          <option value="Pens">Pens</option>
          <option value="Bags">Bags</option>
          <option value="Books">Books</option>
          <option value="Toys">Toys</option>
          <option value="Pouches">Pouches</option>
          <option value="Handsticks">Handsticks</option>
          <option value="Glossaries">Glossaries</option>
          <option value="Cooking Bowls">Cooking Bowls</option>
        </select>

      
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageurl}
              alt={product.name}
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span>₹{product.price.toFixed(2)}</span>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product.name)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
