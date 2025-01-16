import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Forma parte de FIBRAMAX <br className="max-lg:hidden" />
            </h1>
            <div className="mx-auto max-w-3xl">
              <form className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div data-aos="zoom-y-out" data-aos-delay={300}>
                  <label className="block text-left text-gray-700">
                    Nombre y Apellido*
                  </label>
                  <input
                    type="text"
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
                    className="w-full rounded border-gray-300 p-2"
                  />
                </div>
                <div data-aos="zoom-y-out" data-aos-delay={300}>
                  <label className="block text-left text-gray-700">
                    Cédula
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-gray-300 p-2"
                  />
                </div>
                <div data-aos="zoom-y-out" data-aos-delay={300}>
                  <label className="block text-left text-gray-700">
                    Ciudad
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-gray-300 p-2"
                  />
                </div>
                <div className="col-span-1 sm:col-span-2" data-aos="zoom-y-out" data-aos-delay={300}>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
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
                      className="mr-2"
                      required
                    />
                    <label htmlFor="policy" className="text-gray-700">
                      Acepto las Políticas del Servicio
                    </label>
                  </div>
                </div>
                <div className="col-span-1 sm:col-span-2" data-aos="zoom-y-out" data-aos-delay={300}>
                  <button
                    type="submit"
                    className="btn group w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
                  >
                    <span className="relative inline-flex items-center justify-center w-full">
                      Enviar{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </button>
                </div>
              </form>
              <p
                className="mt-8 mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
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
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative flex justify-center space-x-4 aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
            <Image
                src="https://fibramax.ec/wp-content/uploads/2024/09/2.jpg"
                alt="Fibramax Image 2"
                width={400}  // Cambiado a la mitad
                height={225} // Cambiado a la mitad
                className="rounded-2xl"
              />
              <Image
                src="https://fibramax.ec/wp-content/uploads/2024/09/3.jpg"
                alt="Fibramax Image 1"
                width={400}  // Cambiado a la mitad
                height={225} // Cambiado a la mitad
                className="rounded-2xl"
              />
              <Image
                src="https://fibramax.ec/wp-content/uploads/2024/09/4.jpg"
                alt="Fibramax Image 3"
                width={400}  // Cambiado a la mitad
                height={225} // Cambiado a la mitad
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}