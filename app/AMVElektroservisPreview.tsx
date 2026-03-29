'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages: string[] = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
];

export default function AMVElektroservisPreview() {
  const [activeSection, setActiveSection] = useState("O nás");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight" && selectedImage !== null)
        setSelectedImage((selectedImage + 1) % galleryImages.length);
      if (e.key === "ArrowLeft" && selectedImage !== null)
        setSelectedImage(
          (selectedImage - 1 + galleryImages.length) % galleryImages.length
        );
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage]);

  // 🔹 Nové technické pozadie pre header
  const headerBg =
    "url('/images/tech-background.jpg')"; // ← sem ulož tvoj obrázok do /public/images/

  const sections: Record<string, React.ReactNode> = {
    "O nás": (
      <p>
        Profesionálny servis CNC zariadení Hyundai WIA, automatizácia starších
        strojov, servopohonov a priemyselné elektro riešenia. Servisujeme riadiace
        systémy FANUC, SIEMENS a HEIDENHAIN. Pre automatizáciu používame systém DELTA.
      </p>
    ),

    "Služby": (
      <ul className="space-y-2">
        <li>• Diagnostika a opravy CNC</li>
        <li>• Automatizácia výrobných liniek</li>
        <li>• Servoriadenia a elektropohony</li>
        <li>• Preventívna údržba</li>
      </ul>
    ),

    "Galéria": (
      <div className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={src}
                alt={`Galéria ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-8 text-gray-300 text-3xl hover:text-cyan-400"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(
                    (selectedImage! - 1 + galleryImages.length) %
                      galleryImages.length
                  );
                }}
                className="absolute left-6 text-white text-5xl font-bold hover:text-cyan-400 select-none"
              >
                ‹
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={galleryImages[selectedImage!]}
                  src={galleryImages[selectedImage!]}
                  alt="Zväčšený obrázok"
                  className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg select-none"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(
                    (selectedImage! + 1) % galleryImages.length
                  );
                }}
                className="absolute right-6 text-white text-5xl font-bold hover:text-cyan-400 select-none"
              >
                ›
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ),

    "Kontakt": (
      <div className="space-y-6 text-lg">
        <p className="text-cyan-400 font-semibold">Email</p>
        <p className="text-gray-300">amv.elektroservis@gmail.com</p>
      </div>
    ),
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl pointer-events-none" />

      {/* 🔹 Upravena sekcia s technickým pozadím */}
      <section
        className="relative h-[55vh] flex items-start justify-center text-center px-6 pt-20 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: headerBg }}
      >
        <div className="absolute inset-0 bg-black/70" /> {/* tmavý overlay */}
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold tracking-widest text-cyan-400 mb-8">
            AMV ELEKTROSERVIS
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            CNC servis • Automatizácia • Priemyselné elektro riešenia
          </p>
        </div>
      </section>

      {/* navigácia, obsah, footer ostáva */}
      <div className="relative flex justify-center gap-6 py-6 border-b border-gray-800 bg-black/80 backdrop-blur sticky top-0 z-20">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 border-b-2 ${
              activeSection === section
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-gray-500 hover:text-white'
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.section
          key={activeSection}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="relative py-12 px-6 max-w-4xl mx-auto text-center flex-1"
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">{activeSection}</h2>
          <div className="text-lg text-gray-300">{sections[activeSection]}</div>
        </motion.section>
      </AnimatePresence>

      <footer className="text-center p-4 border-t border-gray-800 text-gray-600">
        © 2026 AMV‑elektroservis
      </footer>
    </div>
  );
}
