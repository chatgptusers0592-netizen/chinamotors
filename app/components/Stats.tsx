export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-[#101013] py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 lg:px-10">
        <div>
          <p className="text-4xl font-black text-red-600">VIN</p>
          <p className="mt-3 text-lg font-bold">Точный подбор деталей</p>
        </div>

        <div>
          <p className="text-4xl font-black text-red-600">10:00–19:00</p>
          <p className="mt-3 text-lg font-bold">Работаем ежедневно</p>
        </div>

        <div>
          <p className="text-4xl font-black text-red-600">WhatsApp</p>
          <p className="mt-3 text-lg font-bold">Удобная связь с клиентами</p>
        </div>
      </div>
    </section>
  );
}