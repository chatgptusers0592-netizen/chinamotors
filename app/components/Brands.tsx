import { brands } from "./data";

export default function Brands() {
  return (
    <section id="brands" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          Марки автомобилей
        </p>

        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-3xl text-3xl font-black sm:text-5xl">
            Работаем с популярными китайскими брендами
          </h2>

          <p className="max-w-xl leading-7 text-zinc-400">
            Не нашли свою марку? Напишите нам — проверим возможность заказа
            нужной детали.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex min-h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/3 px-4 text-center text-lg font-black transition hover:border-red-600/50 hover:bg-red-600/10"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}