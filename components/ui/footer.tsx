import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">&copy; Fibramax</div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            {/* <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Our method
                </Link>
              </li>
            </ul> */}
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            {/* <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Diversity & Inclusion
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Financial statements
                </Link>
              </li>
            </ul> */}
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            {/* <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Report a vulnerability
                </Link>
              </li>
            </ul> */}
          </div>

          {/* 5th block */}
          {/* <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Redes Sociales</h3>
            <ul className="flex gap-3">
              <li>
                <Link
                  className="flex items-center justify-center text-black transition hover:text-gray-700"
                  href="https://twitter.com/FibramaxEcuador"
                  aria-label="X"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.3 2h3.9l-6.8 7.7L21 22h-7.7l-4.9-6.9L4.5 22H.6l7.4-8.4L2 2h7.8l4.3 6.3L15.3 2Zm-1 17.8h2l-9-13h-2l9 13Z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-black transition hover:text-gray-700"
                  href="https://www.facebook.com/fibramax.ecuador"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7H7.5V12h3v-2.3c0-3 1.5-4.3 4.1-4.3 1.2 0 2.5.2 2.5.2v2.8h-1.4c-1.4 0-1.8.9-1.8 1.8V12h3l-.5 2.9h-2.5v7C18.3 21.1 22 17 22 12Z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-black transition hover:text-gray-700"
                  href="https://www.instagram.com/fibramax_ecuador/"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 2h10c2.8 0 5 2.2 5 5v10c0 2.8-2.2 5-5 5H7c-2.8 0-5-2.2-5-5V7c0-2.8 2.2-5 5-5Zm5 5.3c-2.6 0-4.7 2-4.7 4.7s2 4.7 4.7 4.7 4.7-2 4.7-4.7-2.1-4.7-4.7-4.7Zm0 7.7c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3ZM17.8 6c-.4 0-.8.4-.8.8s.3.8.8.8c.4 0 .8-.4.8-.8s-.4-.8-.8-.8Z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-black transition hover:text-gray-700"
                  href="https://vm.tiktok.com/ZSXTH1sR/"
                  aria-label="TikTok"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 18.5a3.5 3.5 0 0 0 3.5-3.5v-6.3c1 .7 2.3 1.1 3.7 1.1v-2a4.8 4.8 0 0 1-3.7-1.8h-.3v10a1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 1 2.1-1.3V12a3.5 3.5 0 0 0-5.1 3.2c0 1.9 1.6 3.3 3.3 3.3Z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      {/* <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Fibramax'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Fibramax'] after:[text-shadow:0_1px_0_white]"></div>
        
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div> */}
    </footer>
  );
}
