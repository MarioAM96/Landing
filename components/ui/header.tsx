import Link from "next/link";
import Logo from "./logo";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex items-center flex-none">
            <Logo />
          </div>

          {/* Centered sign-in links */}
          <div className="flex items-center justify-center flex-grow">
            <ul className="flex items-center gap-3">
              <li>
                <Link
                  href="tel:+5930962840400"
                  className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
                >
                  Llámanos
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/593962989426?text=Hola%20quisiera%20m%C3%A1s%20informaci%C3%B3n"
                  className="btn-sm bg-red-600 text-gray-200 shadow hover:bg-gray-900 flex items-center gap-2"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp Ventas
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty space to balance the layout */}
          <div className="flex flex-none" style={{ width: "100px" }} />
        </div>
      </div>
    </header>
  );
}
