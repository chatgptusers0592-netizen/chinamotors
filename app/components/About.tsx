import { whatsappLink } from "./data";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-y border-white/10 bg-[#101013] py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            О компании
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
            ChinaMotors — запчасти и обслуживание китайских автомобилей
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-zinc-400">
            Мы находимся в Махачкале и специализируемся на подборе, продаже и
            установке запчастей для китайских автомобилей.
          </p>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Помогаем определить нужную деталь по VIN-коду, предлагаем
            оригинальные комплектующие и проверенные аналоги. При необходимости
            выполняем замену деталей в нашем сервисе.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/3 p-6">
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Специализация
              </p>
              <p className="mt-3 text-xl font-black">
                Китайские автомобили
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/3 p-6">
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                Формат работы
              </p>
              <p className="mt-3 text-xl font-black">
                Запчасти и сервис
              </p>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl border border-white/20 px-7 py-4 font-bold transition hover:border-red-600 hover:bg-red-600"
          >
            Задать вопрос
          </a>
        </div>
      </div>
    </section>
  );
}