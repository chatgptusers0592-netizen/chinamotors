import { whatsappLink } from "./data";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute right-[-180px] top-10 h-112.5 w-112.5 rounded-full bg-red-600/20 blur-[130px]" />
      <div className="absolute bottom-0 left-[-220px] h-96 w-96 rounded-full bg-red-950/30 blur-[120px]" />

      <div className="relative mx-auto grid min-h-180 max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
        <div>
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.28em] text-red-500">
            Центр обслуживания китайских автомобилей
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Запчасти и сервис для{" "}
            <span className="text-red-600">китайских автомобилей</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            Подбираем и продаём запчасти, проверяем совместимость и выполняем
            замену деталей в Махачкале.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#request"
              className="rounded-xl bg-red-600 px-7 py-4 text-center font-bold transition hover:bg-red-500"
            >
              Подобрать запчасть
            </a>

            <a
              href="#services"
              className="rounded-xl border border-white/20 px-7 py-4 text-center font-bold transition hover:border-white/40 hover:bg-white/5"
            >
              Посмотреть услуги
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl gap-4 text-sm text-zinc-400 sm:grid-cols-3">
            <p>✓ Подбор по VIN</p>
            <p>✓ Оригиналы и аналоги</p>
            <p>✓ Установка в сервисе</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-red-600/15 blur-3xl" />

          <div className="relative rounded-4xl border border-white/10 bg-linear-to-br from-zinc-800/80 to-black p-7 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              </span>

            </div>

            <div className="mt-12 flex min-h-80 items-center justify-center rounded-3xl border border-white/5 bg-black/40 px-5">
              <div className="text-center">
                <div className="mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border border-red-600/40 bg-red-600/10">
  <Image
    src="/images/logo/logo-circle.png"
    alt="China Motors"
    width={170}
    height={170}
    priority
    className="h-full w-full object-cover"
  />
</div>

                <p className="mt-7 text-3xl font-black tracking-wide">
                  CHINA MOTORS
                </p>

                <p className="mt-3 text-sm text-zinc-500">
                  Запчасти • Сервис • Обслуживание
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Город
                </p>
                <p className="mt-2 font-bold">Махачкала</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Работаем
                </p>
                <p className="mt-2 font-bold">10:00–19:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}