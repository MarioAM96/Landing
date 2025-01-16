import Link from "next/link";
import Logo from "./logo";

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
                  href="/"
                  className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
                >
                  Llámanos
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
                >
                  Whatsapp
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty space to balance the layout */}
          <div className="flex flex-none" style={{ width: '100px' }} />
        </div>
      </div>
    </header>
  );
}