import { whatsappLink } from "./data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08080a]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a href="#" className="text-xl font-black tracking-wider">
          CHINA<span className="text-red-600">MOTORS</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-zinc-300 lg:flex">
          <a href="#services" className="transition hover:text-red-500">
            Услуги
          </a>

          <a href="#advantages" className="transition hover:text-red-500">
            Преимущества
          </a>

          <a href="#steps" className="transition hover:text-red-500">
            Как мы работаем
          </a>

          <a href="#brands" className="transition hover:text-red-500">
            Марки
          </a>

          <a href="#about" className="transition hover:text-red-500">
  О компании
</a>

          <a href="#contacts" className="transition hover:text-red-500">
            Контакты
          </a>
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-bold transition hover:bg-red-500"
        >
          Связаться
        </a>
      </div>
    </header>
  );
}