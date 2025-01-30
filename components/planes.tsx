'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Logo from "./ui/logo";
import FamilyPlay from "@/public/images/family_play.png";
import FamilyPlus from "@/public/images/family_plus.png";
import FamilyTurbo from "@/public/images/family_turbo.png";

export default function BusinessCategories() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const images = [
    { src: FamilyPlay, alt: "Family Play" },
    { src: FamilyPlus, alt: "Family Plus" },
    { src: FamilyTurbo, alt: "Family Turbo" }
  ];

  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImage((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h1 className="text-4xl font-bold text-center mb-6" style={{ color: '#FE280A' }}>
          Planes de máxima velocidad
        </h1>

        <div className="pb-8 md:pb-12">
          <div className="relative flex min-h-[450px] items-center justify-center">
            {/* Líneas decorativas */}
            <div className="absolute inset-0 -z-10">
              {/* Horizontal lines */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-[200px] top-1/2 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-[100px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-gradient-to-r before:via-red-500"></div>
              <div className="absolute inset-x-0 top-1/2 h-px translate-y-[100px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-gradient-to-r before:via-red-500"></div>
              {/* Diagonal lines */}
              <div className="absolute inset-x-[250px] top-1/2 h-px rotate-[15deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-[250px] top-1/2 h-px -rotate-[15deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              {/* Vertical lines */}
              <div className="absolute inset-y-[25%] left-1/2 w-px -translate-x-[216px] bg-gradient-to-b from-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-y-[25%] left-1/2 w-px translate-x-[216px] bg-gradient-to-t from-gray-200 to-transparent mix-blend-multiply"></div>
            </div>

            {/* Desktop view */}
            <div className="relative hidden md:flex flex-col items-center gap-8">
              <article className="flex h-full w-full items-center justify-center gap-6">
                {images.map((image, index) => (
                  <div key={index}>
                    <div className="flex h-72 w-72 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03]">
                      <Image
                        className="relative"
                        src={image.src}
                        width={280}
                        height={280}
                        alt={image.alt}
                      />
                    </div>
                  </div>
                ))}
              </article>
            </div>

            {/* Mobile view */}
            <div className="md:hidden w-full flex flex-col items-center justify-center py-8">
              <div className="relative flex items-center justify-center w-full">
                <button
                  onClick={prevImage}
                  className="absolute left-4 z-10 p-2.5 bg-white rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-5 h-5 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <div className="w-[400px] h-[400px] flex items-center justify-center">
                  <div
                    className={`
                      w-full h-full flex items-center justify-center
                      transition-all duration-500 ease-in-out
                      ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                    `}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03]">
                      <Image
                        className="relative object-contain p-4"
                        src={images[currentImage].src}
                        fill
                        sizes="(max-width: 768px) 400px, 280px"
                        priority
                        alt={images[currentImage].alt}
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={nextImage}
                  className="absolute right-4 z-10 p-2.5 bg-white rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
                  aria-label="Next image"
                >
                  <svg
                    className="w-5 h-5 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Indicadores de página */}
              <div className="flex gap-3 mt-6">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`
                      w-3 h-3 rounded-full transition-all duration-300
                      ${currentImage === index ? 'bg-gray-800 scale-125' : 'bg-gray-400'}
                    `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}