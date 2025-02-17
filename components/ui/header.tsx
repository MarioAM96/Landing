import Link from "next/link";
import { FaWhatsapp, FaAngleDoubleRight } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 z-30 w-full">
      <div className="w-full">
        <div className="relative flex h-14 items-center justify-between gap-3 bg-[#1d1d1b] text-white px-4 sm:px-6">
          {/* Centered sign-in links */}
          <div className="flex items-center justify-center flex-grow">
            <ul className="flex items-center gap-3">
              <li className="font-bold text-white text-sm md:text-base whitespace-nowrap flex items-center gap-1">
                Más Información <FaAngleDoubleRight size={14} />
              </li>
              <li>
                <Link
                  href="https://wa.me/593962989426?text=Hola%20quisiera%20m%C3%A1s%20informaci%C3%B3n"
                  className="btn-sm bg-[#FE280A] text-white shadow hover:bg-[#FE280A]/90 flex items-center gap-2 whitespace-nowrap"
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