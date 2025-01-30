import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <img
        src="https://fibramax.ec/repositorio_legal/media/img/LOGORGB1.png"
        alt="Logo Fibramax"
        className="h-7 w-auto"
      />
    </Link>
  );
}
