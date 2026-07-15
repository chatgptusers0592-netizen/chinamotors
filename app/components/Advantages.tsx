import { advantages, whatsappLink } from "./data";

export default function Advantages() {
  return (
    <section
      id="advantages"
      className="scroll-mt-20 border-b border-white/10 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            Почему ChinaMotors
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
            Берём вопрос с запчастями на себя
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Вам не нужно самостоятельно разбираться в артикулах и
            совместимости. Отправьте данные автомобиля — мы подготовим
            подходящие варианты.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-red-600 px-7 py-4 font-bold transition hover:bg-red-500"
          >
            Получить консультацию
          </a>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {advantages.map((advantage) => (
            <article
              key={advantage.number}
              className="grid gap-4 py-7 sm:grid-cols-[70px_1fr]"
            >
              <span className="text-sm font-black text-red-500">
                {advantage.number}
              </span>

              <div>
                <h3 className="text-2xl font-black">{advantage.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">
                  {advantage.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}