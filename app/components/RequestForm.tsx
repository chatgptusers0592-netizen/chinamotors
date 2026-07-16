"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const initialForm = {
  name: "",
  phone: "",
  car: "",
  vin: "",
  message: "",
};

export default function RequestForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(
    field: keyof typeof initialForm,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Не удалось отправить заявку.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Произошла ошибка. Попробуйте ещё раз.",
      );
    }
  }

  return (
    <section
      id="request"
      className="scroll-mt-20 border-y border-white/10 bg-[#101013] py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            Заявка на подбор
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
            Оставьте заявку прямо на сайте
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Укажите данные автомобиля и нужную запчасть. Мы проверим заявку и
            свяжемся с вами по указанному номеру.
          </p>

          <div className="mt-8 space-y-4 text-zinc-400">
            <p>✓ VIN можно указать позднее</p>
            <p>✓ Подойдёт название детали или описание проблемы</p>
            <p>✓ Отправка заявки не открывает WhatsApp</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-4xl border border-white/10 bg-[#08080a] p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-zinc-300">
                Имя *
              </span>

              <input
                type="text"
                required
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Как к вам обращаться"
                className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-600"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-zinc-300">
                Телефон *
              </span>

              <input
                type="tel"
                required
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="+7 999 000-00-00"
                className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-600"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-bold text-zinc-300">
              Марка и модель автомобиля *
            </span>

            <input
              type="text"
              required
              value={form.car}
              onChange={(event) => updateField("car", event.target.value)}
              placeholder="Например: Geely Monjaro"
              className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-600"
            />
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-bold text-zinc-300">
              VIN
            </span>

            <input
              type="text"
              value={form.vin}
              onChange={(event) =>
                updateField("vin", event.target.value.toUpperCase())
              }
              placeholder="Необязательно"
              maxLength={17}
              className="w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3.5 uppercase text-white outline-none transition placeholder:normal-case placeholder:text-zinc-600 focus:border-red-600"
            />
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-bold text-zinc-300">
              Что требуется? *
            </span>

            <textarea
              required
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Напишите название запчасти или опишите проблему"
              rows={5}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/3 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-600"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-xl bg-red-600 px-7 py-4 font-black text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Отправляем..." : "Отправить заявку"}
          </button>

          {status === "success" && (
            <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm font-bold text-green-400">
              Заявка принята. Мы свяжемся с вами в ближайшее время.
            </div>
          )}

          {status === "error" && (
            <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm font-bold text-red-400">
              {errorMessage}
            </div>
          )}

          <p className="mt-4 text-xs leading-5 text-zinc-600">
            Нажимая кнопку, вы соглашаетесь на обработку данных, необходимых
            для связи по заявке.
          </p>
        </form>
      </div>
    </section>
  );
}