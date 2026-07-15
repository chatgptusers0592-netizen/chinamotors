import { whatsappLink } from "./data";

export default function WhatsappButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать ChinaMotors в WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] p-4 text-white shadow-[0_12px_40px_rgba(37,211,102,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#20bd5a]"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 fill-current"
      >
        <path d="M16.04 3C8.86 3 3.02 8.82 3.02 15.98c0 2.29.6 4.52 1.73 6.48L3 29l6.72-1.76a13 13 0 0 0 6.31 1.61h.01c7.18 0 13.02-5.82 13.02-12.98C29.06 8.82 23.22 3 16.04 3Zm0 23.66h-.01a10.76 10.76 0 0 1-5.49-1.5l-.39-.23-3.99 1.05 1.07-3.88-.25-.4a10.72 10.72 0 0 1-1.65-5.72c0-5.96 4.86-10.8 10.83-10.8 5.97 0 10.82 4.84 10.82 10.8 0 5.96-4.86 10.81-10.94 10.81v-.13Zm5.93-8.08c-.32-.16-1.92-.94-2.22-1.05-.3-.11-.51-.16-.73.16-.22.32-.84 1.05-1.03 1.27-.19.22-.38.24-.7.08-.32-.16-1.37-.5-2.61-1.61-.97-.86-1.62-1.92-1.81-2.24-.19-.32-.02-.5.14-.66.14-.14.32-.38.49-.57.16-.19.22-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.86.41-.3.32-1.13 1.1-1.13 2.69s1.16 3.12 1.32 3.34c.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.92-.78 2.19-1.54.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.62-.38Z" />
      </svg>

      <span className="hidden pr-2 text-sm font-bold sm:block">
        Написать в WhatsApp
      </span>

      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/25 group-hover:hidden" />
    </a>
  );
}