"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import InternetHogar from "@/public/images/fibramax_internet_hogar.png";
import Latencia from "@/public/images/latencia.png";
import Fibramax from "@/public/images/fibramax.png";

export default function HeroHome() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    cedula: "",
    ciudad: "",
    terms: false,
    policy: false,
  });

  const [confirmationMessage, setConfirmationMessage] = useState("");

  const images = [
    "https://fibramax.ec/wp-content/uploads/2024/09/2.jpg",
    "https://fibramax.ec/wp-content/uploads/2024/09/3.jpg",
    "https://fibramax.ec/wp-content/uploads/2024/09/4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500); // Duration of fade-out
    }, 4000); // Total duration including fade-in and fade-out

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      (function(s, z, c, h, a, t) {
        s.webchat = s.webchat || function() {
          (s.webchat.q = s.webchat.q || []).push(arguments);
        };
        t = z.createElement(c),
        a = z.getElementsByTagName(c)[0];
        t.async = 1;
        t.src = 'https://fibramax.sz.chat/webchat/v2/webchat.js';
        a.parentNode.insertBefore(t, a);
        s.webchat('cid', '66fc3eb660e3ac05b60f229a');
        s.webchat('host', h);
      })(window, document, 'script', 'https://fibramax.sz.chat');

      window.addEventListener("message", function(event) {
        if (event.origin !== 'https://fibramax.sz.chat') return;
      }, false);
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e: {
    target: { name: any; value: any; type: any; checked: any };
  }) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const apiUrl = "http://127.0.0.1:8000/api/formulariolanding";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const data = await response.json();
      console.log("Respuesta de la API:", data);

      setFormData({
        nombre: "",
        telefono: "",
        cedula: "",
        ciudad: "",
        terms: false,
        policy: false,
      });

      setConfirmationMessage(
        "Gracias, un asesor se comunicará contigo lo más pronto posible."
      );
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setConfirmationMessage("Hubo un error al enviar el formulario.");
    }
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-6 pt-32 md:pb-5 md:pt-20">
          <div className="flex justify-center w-full mb-8"> {/* Added mb-8 for spacing */}
            <Image
              src={Fibramax}
              alt="Internet Hogar"
              width={600}
              height={225}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex-1" data-aos="zoom-y-out" data-aos-delay={600}>
              <div className="relative">
                <Image
                  src={InternetHogar}
                  alt="Internet Hogar"
                  width={800}
                  height={550}
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="pb-12 text-center md:pb-16">
                <h1
                  className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.red.300/.8),transparent)1] md:text-6xl"
                  data-aos="zoom-y-out"
                  data-aos-delay={150}
                >
                  ¡DÉJANOS TUS DATOS! <br className="max-lg:hidden" />
                </h1>
                <div className="mx-auto max-w-3xl">
                  <form
                    className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                    onSubmit={handleSubmit}
                  >
                    <div data-aos="zoom-y-out" data-aos-delay={300}>
                      <label className="block text-left text-sm font-semibold text-gray-700">
                        Nombre y Apellido*
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Ingrese su nombre completo"
                        required
                      />
                    </div>
                    <div data-aos="zoom-y-out" data-aos-delay={300}>
                      <label className="block text-left text-sm font-semibold text-gray-700">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Ingrese su teléfono"
                      />
                    </div>
                    <div data-aos="zoom-y-out" data-aos-delay={300}>
                      <label className="block text-left text-sm font-semibold text-gray-700">
                        Cédula
                      </label>
                      <input
                        type="text"
                        name="cedula"
                        value={formData.cedula}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Ingrese su cédula"
                      />
                    </div>
                    <div data-aos="zoom-y-out" data-aos-delay={300}>
                      <label className="block text-left text-sm font-semibold text-gray-700">
                        Ciudad
                      </label>
                      <input
                        type="text"
                        name="ciudad"
                        value={formData.ciudad}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Ingrese su ciudad"
                      />
                    </div>
                    <div
                      className="col-span-1 sm:col-span-2"
                      data-aos="zoom-y-out"
                      data-aos-delay={300}
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="terms"
                          name="terms"
                          checked={formData.terms}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                          required
                        />
                        <label
                          htmlFor="terms"
                          className="ml-2 text-sm text-gray-700"
                        >
                          Acepto los{" "}
                          <a href="#" className="text-red-600 hover:underline">
                            Términos y Condiciones
                          </a>
                        </label>
                      </div>
                      <div className="flex items-center mt-2">
                        <input
                          type="checkbox"
                          id="policy"
                          name="policy"
                          checked={formData.policy}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                          required
                        />
                        <label
                          htmlFor="policy"
                          className="ml-2 text-sm text-gray-700"
                        >
                          Acepto las{" "}
                          <a href="#" className="text-red-600 hover:underline">
                            Políticas del Servicio
                          </a>
                        </label>
                      </div>
                    </div>
                    <div
                      className="col-span-1 sm:col-span-2"
                      data-aos="zoom-y-out"
                      data-aos-delay={300}
                    >
                      <button
                        type="submit"
                        className="btn group w-1/2 rounded-md bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-base font-medium text-white shadow-lg transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        <span className="relative inline-flex items-center justify-center w-full">
                          Enviar{" "}
                          <span className="ml-2 text-xl transition-transform group-hover:translate-x-1">
                            &#8594;
                          </span>
                        </span>
                      </button>
                    </div>
                  </form>
                  <div
                    className="mt-8 mb-8 text-lg text-gray-700"
                    data-aos="zoom-y-out"
                    data-aos-delay={300}
                  >
                    {confirmationMessage && <p>{confirmationMessage}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
          <Image
            src={Latencia}
            alt="Internet Hogar"
            width={800}
            height={550}
            className="rounded-2xl"
          />
        </div>
        </div>
      </div>
    </section>
  );
}