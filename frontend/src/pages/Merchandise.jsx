import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Heart,
  Star,
  Shirt,
  Trophy,
  Watch,
  Package,
} from "lucide-react";

const Merchandise = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Items", icon: Package },
    { id: "apparel", label: "Apparel", icon: Shirt },
    { id: "accessories", label: "Accessories", icon: Watch },
    { id: "collectibles", label: "Collectibles", icon: Trophy },
  ];

  const products = [
    {
      id: 1,
      name: "CPL 2026 Official Jersey",
      price: 2999,
      originalPrice: 3999,
      rating: 4.8,
      reviews: 1247,
      category: "apparel",
      image: "Jersey",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Player Autographed Bat",
      price: 15999,
      originalPrice: 19999,
      rating: 5.0,
      reviews: 89,
      category: "collectibles",
      image: "Bat",
      badge: "Limited Edition",
    },
    {
      id: 3,
      name: "CPL Cap Collection",
      price: 899,
      originalPrice: 1299,
      rating: 4.6,
      reviews: 567,
      category: "apparel",
      image: "Cap",
      badge: "New Arrival",
    },
    {
      id: 4,
      name: "Smart Watch Edition",
      price: 7999,
      originalPrice: 9999,
      rating: 4.9,
      reviews: 234,
      category: "accessories",
      image: "Watch",
      badge: "Premium",
    },
    {
      id: 5,
      name: "Mini Trophy Replica",
      price: 2499,
      originalPrice: 3499,
      rating: 4.7,
      reviews: 345,
      category: "collectibles",
      image: "Trophy",
      badge: "Official",
    },
    {
      id: 6,
      name: "Fan Scarf Set",
      price: 599,
      originalPrice: 899,
      rating: 4.5,
      reviews: 678,
      category: "apparel",
      image: "Scarf",
      badge: "Trending",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Official Merchandise
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Show your support for CPL 2026 with our premium collection of
            official merchandise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700">
            <div className="flex space-x-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                        : "text-slate-400 hover:text-white hover:bg-slate-700"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} className="mr-2" />
                    {category.label}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.badge === "Best Seller"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : product.badge === "Limited Edition"
                        ? "bg-red-500/20 text-red-400"
                        : product.badge === "New Arrival"
                          ? "bg-green-500/20 text-green-400"
                          : product.badge === "Premium"
                            ? "bg-purple-500/20 text-purple-400"
                            : "bg-cyan-500/20 text-cyan-400"
                  }`}
                >
                  {product.badge}
                </span>
              </div>

              {/* Wishlist Button */}
              <motion.button
                className="absolute top-4 right-4 z-10 p-2 bg-slate-700/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart className="w-5 h-5 text-slate-300 hover:text-red-400 transition-colors" />
              </motion.button>

              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <span className="text-slate-400 text-lg">{product.image}</span>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-slate-400 text-sm ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white">
                      ₹{product.price}
                    </span>
                    <span className="text-slate-400 line-through text-sm">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <span className="text-green-400 text-sm font-semibold">
                    {Math.round(
                      (1 - product.price / product.originalPrice) * 100,
                    )}
                    % OFF
                  </span>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Get notified about new merchandise drops, exclusive offers, and CPL
            updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Merchandise;
