import { services } from "./data";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-y border-white/10 bg-[#101013] py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          Наши услуги
        </p>

        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-3xl text-3xl font-black sm:text-5xl">
            Что получает клиент ChinaMotors
          </h2>

          <p className="max-w-xl leading-7 text-zinc-400">
            Понятный подбор, подходящие варианты и установка без лишних поисков.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-3xl border border-white/10 bg-white/3 p-7 transition duration-300 hover:-translate-y-1 hover:border-red-600/50"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="text-sm font-black text-red-500">
                  {service.number}
                </span>

                <span className="text-2xl text-zinc-700 transition group-hover:text-red-500">
                  ↗
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-black">{service.title}</h3>

              <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}