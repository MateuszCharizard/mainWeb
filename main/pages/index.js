'use client';
import { Button } from '@/components/button'; 
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

// Base64-encoded images (use your own or replace them with actual URLs)
const iphone15ProImage = "/pro.png";
const iphone15Image = "https://i.snipp.gg/924822581117337691/iphone15.jpg"; // Example image for iPhone 15
const iphone15PlusImage = "https://i.snipp.gg/924822581117337691/iphone15plus.jpg"; // Example image for iPhone 15 Plus
const iphone15ProMaxImage = "/promax.png"; // Example image for iPhone 15 Pro Max
const a17ProChipImage = '/holdphone.png'; 
const cameraSystemImage = '/phonecamera.png'; 

export default function App() {
  const { scrollYProgress } = useScroll();
  
  // Parallax scrolling effect for background and images
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // State for selected model and storage
  const [model, setModel] = useState("iPhone 15 Pro");
  const [storage, setStorage] = useState("128GB");

  // Base prices for each model and storage option
  const basePrices = {
    "iPhone 15": { "128GB": 799, "256GB": 899, "512GB": 999, "1TB": 1099 },
    "iPhone 15 Plus": { "128GB": 899, "256GB": 999, "512GB": 1099, "1TB": 1199 },
    "iPhone 15 Pro": { "128GB": 999, "256GB": 1099, "512GB": 1199, "1TB": 1299 },
    "iPhone 15 Pro Max": { "128GB": 1099, "256GB": 1199, "512GB": 1299, "1TB": 1399 },
  };

  const price = basePrices[model][storage];

  // Function to get the correct image based on the model
  const getModelImage = () => {
    switch(model) {
      case "iPhone 15":
        return iphone15Image;
      case "iPhone 15 Plus":
        return iphone15PlusImage;
      case "iPhone 15 Pro":
        return iphone15ProImage;
      case "iPhone 15 Pro Max":
        return iphone15ProMaxImage;
      default:
        return iphone15ProImage; // Default fallback
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Hero Section with Parallax Background */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen py-20 px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          {model}
        </motion.h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl">
          {model === "iPhone 15 Pro" ? "Titanium. So strong. So light. So Pro." : "A new era of iPhone."}
        </p>
        <Button className="mt-6 bg-white text-black px-6 py-2 text-lg rounded-full hover:bg-gray-300">
          Learn More
        </Button>

        {/* Parallax effect for hero background */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 -z-10"
        >
          <Image 
            src={getModelImage()} 
            alt="iPhone" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-30"
          />
        </motion.div>
      </section>

      {/* Product Highlights Section */}
      <section className="py-40 px-6 flex flex-col gap-24 max-w-5xl mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="rounded-xl overflow-hidden"
        >
          <Image 
            src={getModelImage()} 
            alt="iPhone"
            width={300} 
            height={200} // Reduced size for clarity
            className="rounded-xl w-full h-auto mx-auto"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="rounded-xl overflow-hidden"
        >
          <Image 
            src={a17ProChipImage} 
            alt="A17 Pro Chip" 
            width={300} 
            height={200}
            className="rounded-xl w-full h-auto mx-auto"
          />
          <h2 className="text-3xl font-bold mt-6 text-center">A17 Pro Chip</h2>
          <p className="text-lg mt-2 text-center">Game-changing performance.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
          className="rounded-xl overflow-hidden"
        >
          <Image 
            src={cameraSystemImage} 
            alt="Camera System" 
            width={300} 
            height={200}
            className="rounded-xl w-full h-auto mx-auto"
          />
          <h2 className="text-3xl font-bold mt-6 text-center">Pro Camera System</h2>
          <p className="text-lg mt-2 text-center">Capture breathtaking details.</p>
        </motion.div>
      </section>

      {/* Full-Page Buy Now Section */}
      <section className="py-40 bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Choose Your iPhone</h2>
          
          {/* Dropdowns for Model and Storage */}
          <div className="space-x-4 mb-8 flex justify-center">
            <select 
              value={model} 
              onChange={(e) => setModel(e.target.value)} 
              className="bg-black text-white py-2 px-4 rounded-lg"
            >
              <option value="iPhone 15">iPhone 15</option>
              <option value="iPhone 15 Plus">iPhone 15 Plus</option>
              <option value="iPhone 15 Pro">iPhone 15 Pro</option>
              <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
            </select>

            <select 
              value={storage} 
              onChange={(e) => setStorage(e.target.value)} 
              className="bg-black text-white py-2 px-4 rounded-lg"
            >
              <option value="128GB">128GB</option>
              <option value="256GB">256GB</option>
              <option value="512GB">512GB</option>
              <option value="1TB">1TB</option>
            </select>
          </div>

          {/* Displaying Model Image in Buy Now Section */}
          <div className="mb-8">
            <Image 
              src={getModelImage()} 
              alt="Selected iPhone" 
              width={300} 
              height={200} 
              className="rounded-xl mx-auto"
            />
          </div>

          {/* Displaying Price */}
          <div className="text-3xl font-bold mb-6">
            <span className="text-lg">Price: </span>${price}
          </div>

          {/* Buy Now Button */}
          <Button className="bg-white text-black px-6 py-2 text-lg rounded-full hover:bg-gray-300">
            Buy Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-400">
        <p>&copy; 2024 Apple Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
