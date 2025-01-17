"use client";

import { useState } from "react";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

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

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
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

      // Limpiar el formulario
      setFormData({
        nombre: "",
        telefono: "",
        cedula: "",
        ciudad: "",
        terms: false,
        policy: false,
      });

      // Mostrar mensaje de confirmación
      setConfirmationMessage("Gracias, un asesor se comunicará contigo lo más pronto posible.");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setConfirmationMessage("Hubo un error al enviar el formulario.");
    }
  };

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.red.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Forma parte de FIBRAMAX <br className="max-lg:hidden" />
            </h1>
            <div className="mx-auto max-w-3xl">
              <form
                className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
                onSubmit={handleSubmit}
              >
                <div data-aos="zoom-y-out" data-aos-delay={300}>
                  <label className="block text-left text-gray-700">
                    Nombre y Apellido*
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full rounded border-gray-300 p-2"
                    required
                  />
                </div>
                <div data-aos="zoom-y-out" data-aos-delay={300}>
                  <label className="block text-left text-gray-700">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full rounded border-gray-300 p-2"
                  />
                </div>
                <div data-aos="zoom-y-out" data-aos-delay={300}>
                  <label className="block text-left text-gray-700">
                    Cédula
                  </label>
                  <input
                    type="text"
                    name="cedula"
                    value={formData.cedula}
                    onChange={handleChange}
                    className="w-full rounded border-gray-300 p-2"
                  />
                </div>
                <div data-aos="zoom-y-out" data-aos-delay={300}>
                  <label className="block text-left text-gray-700">
                    Ciudad
                  </label>
                  <input
                    type="text"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleChange}
                    className="w-full rounded border-gray-300 p-2"
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
                      className="mr-2"
                      required
                    />
                    <label htmlFor="terms" className="text-gray-700">
                      Acepto los Términos y Condiciones
                    </label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id="policy"
                      name="policy"
                      checked={formData.policy}
                      onChange={handleChange}
                      className="mr-2"
                      required
                    />
                    <label htmlFor="policy" className="text-gray-700">
                      Acepto las Políticas del Servicio
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
                    className="btn group w-full bg-gradient-to-t from-red-600 to-red-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
                  >
                    <span className="relative inline-flex items-center justify-center w-full">
                      Enviar{" "}
                      <span className="ml-1 tracking-normal text-red-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
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
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.red.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-red-600 to-red-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Planes de Internet{" "}
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative overflow-x-auto md:overflow-visible">
              <div className="flex flex-nowrap justify-start md:justify-center space-x-4 snap-x snap-mandatory">
                <div className="snap-start shrink-0 w-3/4 sm:w-1/3 md:w-auto">
                  <Image
                    src="https://fibramax.ec/wp-content/uploads/2024/09/2.jpg"
                    alt="Fibramax Image 2"
                    width={400}
                    height={225}
                    className="rounded-2xl"
                  />
                </div>
                <div className="snap-start shrink-0 w-3/4 sm:w-1/3 md:w-auto">
                  <Image
                    src="https://fibramax.ec/wp-content/uploads/2024/09/3.jpg"
                    alt="Fibramax Image 1"
                    width={400}
                    height={225}
                    className="rounded-2xl"
                  />
                </div>
                <div className="snap-start shrink-0 w-3/4 sm:w-1/3 md:w-auto">
                  <Image
                    src="https://fibramax.ec/wp-content/uploads/2024/09/4.jpg"
                    alt="Fibramax Image 3"
                    width={400}
                    height={225}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}