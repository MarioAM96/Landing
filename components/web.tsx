import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-r from-red-800 to-red-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-red-600 blur-3xl opacity-70" />
          </div>
          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none opacity-50"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-red-200 [border-image:linear-gradient(to_right,transparent,theme(colors.red.700/.7),transparent)1] md:mb-12 md:text-4xl">
            ¿Necesitas más informacion?
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="btn group mb-4 w-full bg-gradient-to-t from-red-700 to-red-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-lg hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="https://fibramax.ec/"
              >
                <span className="relative inline-flex items-center">
                Visita Nuestro Sitio Web{" "}
                  <span className="ml-1 tracking-normal text-red-300 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
            {/* New phone buttons */}
            {/* <div className="mt-6 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                className="btn w-full rounded-lg bg-gradient-to-t from-red-600 to-red-500 px-6 py-3 text-white shadow-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-b sm:w-auto"
                href="https://wa.me/593962989426?text=Hola%20quisiera%20m%C3%A1s%20informaci%C3%B3n"
              >
                096 29 89 426
              </a>
              <a
                className="btn w-full rounded-lg bg-gradient-to-t from-red-600 to-red-500 px-6 py-3 text-white shadow-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-b sm:w-auto"
                href="tel:+5930962840400"
              >
                096 28 40 400
              </a>
              <a
                className="btn w-full rounded-lg bg-gradient-to-t from-red-600 to-red-500 px-6 py-3 text-white shadow-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-b sm:w-auto"
                href="tel:+59326021500"
              >
                (02) 602 15 00
              </a>
            </div> */}
          </div>
        </div>
      </div>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/593962989426?text=Hola%20quisiera%20m%C3%A1s%20informaci%C3%B3n"
        className="fixed bottom-32 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.115 1.514 5.857L0 24l6.143-1.514A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.58-.504-5.072-1.38l-.36-.21-3.64.9.97-3.63-.23-.37A9.944 9.944 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.82-1.91-.91-.26-.09-.45-.14-.64.14-.19.28-.74.91-.91 1.1-.17.19-.34.21-.63.07-.29-.14-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.64-1.54-.88-2.12-.23-.56-.47-.49-.64-.5-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1.01-1 2.46 0 1.45 1.04 2.85 1.18 3.05.14.19 2.04 3.11 4.95 4.36.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.26-.18-.55-.32z" />
        </svg>
      </a>
    </section>
  );
}
