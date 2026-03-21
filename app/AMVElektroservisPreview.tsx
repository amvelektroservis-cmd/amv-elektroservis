'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages: string[] = [
  1.jpg,
  2.jpg,
  3.jpg,
  4.jpg,
  5.jpg,
  6.jpg,
  "https://5.imimg.com/data5/SELLER/Default/2026/2/583195739/ZR/ZN/QX/1605358/delta-electronics-ac-servo-motors-drives-asda-series-a2-b2-b3-ecma-motors.jpg",
  "https://filecenter.deltaww.com/products/Images/2401/202401031636004954001.jpg?w=700",
  "https://ik.imagekit.io/4gajff5ct/IAS%20automation/collage%20delta-18.png?updatedAt=1729616807347"
];

export default function AMVElektroservisPreview() {
  const [activeSection, setActiveSection] = useState("O nás");

  const sections: Record<string, React.ReactNode> = {
    "O nás": (
      <p>
        Profesionálny servis CNC zariadení, automatizácia starších strojov,
        servopohonov a priemyselné elektro riešenia.
        Servisujeme riadiace systémy FANUC, SIEMENS a HEIDENHAIN.
        Pre automatizáciu používame systém DELTA.
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

    "Cenník": (
      <div className="space-y-4">
        <div>
          <p className="text-2xl font-semibold text-cyan-400">40 € / hodina</p>
          <p className="text-gray-400 text-sm">
            Servisné práce a technické zásahy (jeden servisný technik)
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold text-cyan-300">Diagnostika</p>
          <p className="text-gray-400 text-sm">
            Individuálne nacenenie podľa rozsahu a náročnosti zariadenia
          </p>
        </div>
        <div className="pt-2 border-t border-gray-800">
          <p className="text-gray-300">
            Individuálne cenové ponuky podľa rozsahu projektu.
          </p>
        </div>
      </div>
    ),

    "Galéria": (
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-[80vh] overflow-y-auto snap-y snap-mandatory scroll-smooth bg-black [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex flex-col">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="h-[80vh] w-full snap-start flex items-center justify-center bg-black"
            >
              <img
                src={src}
                alt={`Galéria ${index + 1}`}
                className="max-h-[75vh] w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    ),

    "Kontakt": (
      <div className="space-y-6 text-lg">
        <div>
          <p className="text-cyan-400 font-semibold">Email</p>
          <p className="text-gray-300">amv.elektroservis@gmail.com</p>
        </div>

        <div>
          <p className="text-cyan-400 font-semibold">Telefón</p>
          <div className="space-y-2 text-gray-300">
            <p>+421 948 016 065</p>
            <p>+421 944 731 907</p>
            <p>+421 944 386 374</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800 text-gray-400 text-base">
          Ak sa nám momentálne nedovoláte alebo sme obsadení, určite Vám
          zavoláme späť. Môžeme byť práve v teréne alebo na servisnom zásahu.
          Ďakujeme za pochopenie.
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl pointer-events-none" />

      {/* HERO */}
      <section className="relative h-[55vh] flex items-start justify-center text-center px-6 pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold tracking-widest text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.9)] mb-8"
          >
            AMV ELEKTROSERVIS
          </motion.h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            CNC servis • Automatizácia • Priemyselné elektro riešenia
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="relative flex justify-center gap-6 py-6 border-b border-gray-800 bg-black/80 backdrop-blur sticky top-0 z-20">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 border-b-2 ${
              activeSection === section
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-gray-500 hover:text-white"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Animated Section */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeSection}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="relative py-12 px-6 max-w-4xl mx-auto text-center flex-1"
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">
            {activeSection}
          </h2>
          <div className="text-lg text-gray-300">
            {sections[activeSection]}
          </div>
        </motion.section>
      </AnimatePresence>

      <footer className="relative text-center p-4 border-t border-gray-800 bg-black text-gray-600">
        © 2026 AMV-elektroservis
      </footer>
    </div>
  );
}