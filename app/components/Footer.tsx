export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>© 2026 ChinaMotors</p>

        <p>Махачкала • Запчасти и сервис китайских автомобилей</p>
      
      <a
  href="https://www.instagram.com/china_motors__"
  target="_blank"
  rel="noopener noreferrer"
  className="text-zinc-400 transition hover:text-white"
>
  Instagram
</a>
      </div>
    </footer>
  );
}