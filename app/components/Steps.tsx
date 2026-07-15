import { steps } from "./data";

export default function Steps() {
  return (
    <section
      id="steps"
      className="scroll-mt-20 border-b border-white/10 bg-[#101013] py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          Как мы работаем
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-black sm:text-5xl">
          Четыре понятных шага до результата
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step}
              className="rounded-3xl border border-white/10 bg-white/3 p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 font-black">
                {index + 1}
              </span>

              <p className="mt-8 text-lg font-bold leading-7">{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}