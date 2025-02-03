"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import InternetHogar from "@/public/images/fibramax_internet_hogar.png";
import Latencia from "@/public/images/latencia.png";
import Fibramax from "@/public/images/fibramax.png";

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
        <div className="pb-6 pt-32 md:pb-5 md:pt-20">
          <div className="flex justify-center w-full mb-8 mt-6">
            <Image
              src={Fibramax}
              alt="Internet Hogar"
              width={600}
              height={225}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div
              className="flex-1 mt-3"
              data-aos="zoom-y-out"
              data-aos-delay={600}
            >
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
                  className="mb-2 border-y text-center text-[1.57rem] font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.red.300/.8),transparent)1] md:text-[2.63rem]"
                  data-aos="zoom-y-out"
                  data-aos-delay={150}
                  style={{ color: "#FE280A" }}
                >
                  ¡DÉJANOS TUS DATOS!
                </h1>
                <p className="text-center text-[0.785rem] md:text-[1.315rem] text-gray-600">
                  Un asesor se comunicará contigo.
                </p>

                <div className="mx-auto max-w-3xl">
                  <form
                    className="mt-8 grid grid-cols-1 gap-y-6"
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
                        Teléfono*
                      </label>
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
                    <div
                      className="col-span-1"
                      data-aos="zoom-y-out"
                      data-aos-delay={300}
                    >
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
                          <button
                            type="button"
                            onClick={() => modalRef.current?.showModal()}
                            className="text-red-600 hover:underline"
                          >
                            Políticas del Servicio
                          </button>
                        </label>

                        {/* Modal */}
                        <dialog
                          ref={modalRef}
                          className="p-4 rounded-lg shadow-lg w-[95vw] max-w-4xl h-[85vh] sm:w-[90vw] sm:h-[80vh] lg:w-[60vw] lg:h-[70vh] overflow-hidden backdrop:bg-black/50"
                        >
                          <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">
                              Políticas del Servicio
                            </h2>
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
                      </div>
                    </div>
                    <div
                      className="col-span-1"
                      data-aos="zoom-y-out"
                      data-aos-delay={300}
                    >
                      <button
                        type="submit"
                        className="btn group w-full rounded-md bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-base font-medium text-white shadow-lg transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="relative inline-flex items-center justify-center w-full">
                            <svg
                              className="animate-spin h-5 w-5 mr-3 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8H4z"
                              ></path>
                            </svg>
                            Enviando...
                          </span>
                        ) : (
                          <span className="relative inline-flex items-center justify-center w-full">
                            Enviar{" "}
                            <span className="ml-2 text-xl transition-transform group-hover:translate-x-1">
                              &#8594;
                            </span>
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
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
