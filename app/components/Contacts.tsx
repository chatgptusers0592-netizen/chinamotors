import { whatsappLink } from "./data";

export default function Contacts() {
  return (
    <section id="contacts" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          Контакты
        </p>

        <h2 className="mt-4 text-3xl font-black sm:text-5xl">
          Ждём вас в ChinaMotors
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/3 p-7">
            <p className="text-sm text-zinc-500">Телефон и WhatsApp</p>

            <a
              href="tel:+79679374141"
              className="mt-3 block text-xl font-black transition hover:text-red-500"
            >
              +7 967 937-41-41
            </a>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/3 p-7">
            <p className="text-sm text-zinc-500">Адрес</p>

            <p className="mt-3 text-xl font-black leading-8">
              Республика Дагестан, Махачкала, ул. Амет-Хана Султана, 160
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/3 p-7">
            <p className="text-sm text-zinc-500">Режим работы</p>
            <p className="mt-3 text-xl font-black">Ежедневно</p>
            <p className="mt-1 text-zinc-400">10:00–19:00</p>
          </article>
        </div>

        <div className="mt-8 rounded-4xl bg-red-600 px-7 py-10 sm:px-10 lg:py-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                Нужна запчасть?
              </p>

              <h3 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">
                Отправьте VIN — поможем подобрать подходящую деталь
              </h3>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-xl bg-white px-7 py-4 font-black text-black transition hover:bg-zinc-200"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}