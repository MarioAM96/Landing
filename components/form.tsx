"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import InternetHogar from "@/public/images/fibramax_internet_hogar.png";
import Latencia from "@/public/images/latencia.png";
import Fibramax from "@/public/images/fibramax.png";
import Header from "@/components/ui/header";
import Link from "next/link";
import { FaWhatsapp, FaAngleDoubleRight } from "react-icons/fa";

export default function HeroHome() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    policy: true,
  });

  const modalRef = useRef<HTMLDialogElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    const apiUrl = "https://api.tvmax.ec/api/formulariolanding";

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
        policy: true,
      });

      Swal.fire({
        icon: "success",
        title: "Formulario enviado",
        text: "Gracias, un asesor se comunicará contigo lo más pronto posible.",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al enviar el formulario.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-6 pt-10 md:pb-5 md:pt-1">
          {" "}
          <div className="flex justify-center w-full mb-8 mt-2">
            {" "}
            <Image
              src={Fibramax}
              alt="Internet Hogar"
              width={350}
              height={225}
              className="rounded-2xl"
            />
          </div>
          {/* Contenedor principal con fondo negro */}
          <div className="bg-[#1D1D1B] rounded-2xl p-0 md:p-0 flex flex-col md:flex-row">
            {/* Imagen de Internet Hogar */}
            <div className="w-full md:w-1/2 h-auto order-1 md:order-first">
              <Image
                src={InternetHogar}
                alt="Internet Hogar"
                layout="responsive"
                width={800}
                height={550}
                className="w-full h-full object-cover md:rounded-l-2xl"
              />
            </div>

            {/* Contenedor del formulario centrado */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10 order-2 md:order-last">
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg w-full max-w-md">
                <div className="text-center">
                  <h1
                    className="mb-2 border-y text-center text-[1.3rem] font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.red.300/.8),transparent)1] md:text-[2rem]"
                    data-aos="zoom-y-out"
                    data-aos-delay={150}
                    style={{ color: "#1d1d1b" }}
                  >
                    ¡DÉJANOS TUS DATOS!
                  </h1>
                  <p className="text-center text-[0.7rem] md:text-[1rem] text-gray-600 mb-4">
                    Un asesor se comunicará contigo.
                  </p>

                  <form
                    className="grid grid-cols-1 gap-y-2"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <label className="block text-left text-sm font-semibold text-gray-700 mb-1">
                        Nombre*
                      </label>
                      <div data-aos="zoom-y-out" data-aos-delay={300}>
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
                    </div>

                    <div>
                      <label className="block text-left text-sm font-semibold text-gray-700 mb-1">
                        Teléfono*
                      </label>
                      <div data-aos="zoom-y-out" data-aos-delay={300}>
                        <input
                          type="tel"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Ingrese su teléfono"
                          required
                        />
                      </div>
                    </div>

                    {/* Política de privacidad */}
                    <div
                      className="flex items-center"
                      data-aos="zoom-y-out"
                      data-aos-delay={300}
                    >
                      <input
                        type="checkbox"
                        id="policy"
                        name="policy"
                        checked={formData.policy}
                        onChange={handleChange}
                        className="h-3 w-3 rounded border-gray-300 text-red-600 focus:ring-red-500 mr-2"
                        required
                      />
                      <label htmlFor="policy" className="text-xs text-gray-700">
                        Acepto las{" "}
                        <button
                          type="button"
                          onClick={() => modalRef.current?.showModal()}
                          className="text-red-600 hover:underline"
                        >
                          Políticas del Servicio
                        </button>
                      </label>
                    </div>

                    {/* Botón de envío */}
                    <button
                      type="submit"
                      className="w-full rounded-md bg-gradient-to-r from-red-600 to-red-500 py-2 text-sm font-medium text-white shadow-lg hover:brightness-110 transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Imagen de Latencia */}
          <div className="flex justify-center w-full mt-8">
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
      {/* Nuevo elemento similar al header */}
      <div className="w-full mt-8">
        <div className="relative flex h-20 items-center justify-center bg-[#1d1d1b] text-white px-4 sm:px-6">
          <div className="flex items-center justify-center w-full">
            <ul className="flex items-center gap-5">
              <li className="font-bold text-white text-base sm:text-lg md:text-3xl whitespace-nowrap flex items-center gap-2">
                Más Información{" "}
                <FaAngleDoubleRight className="text-sm sm:text-lg md:text-2xl" />
              </li>
              <li>
                <Link
                  href="https://wa.me/593962989426?text=Hola%20quisiera%20m%C3%A1s%20informaci%C3%B3n"
                  className="btn-sm bg-[#FE280A] text-white shadow hover:bg-[#FE280A]/90 flex items-center gap-3 whitespace-nowrap px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-base sm:text-lg"
                >
                  <FaWhatsapp className="text-lg sm:text-xl md:text-2xl" />
                  WhatsApp Ventas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal de Políticas */}
      <dialog
        ref={modalRef}
        className="p-4 rounded-lg shadow-lg w-[95vw] max-w-4xl h-[85vh] sm:w-[90vw] sm:h-[80vh] lg:w-[60vw] lg:h-[70vh] overflow-hidden backdrop:bg-black/50"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Políticas del Servicio</h2>
          <button
            onClick={() => modalRef.current?.close()}
            className="text-red-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        <iframe
          src="https://fibramax.ec/wp-content/uploads/2024/07/Aviso-Privacidad-Fibramax.pdf"
          className="w-full h-full border rounded-lg"
        />
      </dialog>
    </section>
  );
}
