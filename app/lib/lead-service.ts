import { Resend } from "resend";

export type Lead = {
  name: string;
  phone: string;
  car: string;
  vin: string;
  message: string;
  createdAt: string;
};

type LeadDestination = "console" | "email" | "bitrix" | "both";

export async function submitLead(lead: Lead) {
  const destination = (process.env.LEAD_DESTINATION ||
    "console") as LeadDestination;

  switch (destination) {
    case "email":
      await sendToEmail(lead);
      return;

    case "bitrix":
      await sendToBitrix24(lead);
      return;

    case "both":
      await Promise.all([sendToEmail(lead), sendToBitrix24(lead)]);
      return;

    default:
      console.log("Тестовая заявка ChinaMotors:", lead);
  }
}

async function sendToEmail(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.LEAD_EMAIL;

  if (!apiKey) {
    throw new Error("В .env.local не указан RESEND_API_KEY.");
  }

  if (!recipient) {
    throw new Error("В .env.local не указан LEAD_EMAIL.");
  }

  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from: "ChinaMotors <onboarding@resend.dev>",
    to: [recipient],
    subject: `Новая заявка с сайта — ${lead.car}`,
    html: `
      <!doctype html>
      <html lang="ru">
        <body style="margin:0;padding:24px;background:#f4f4f5;font-family:Arial,sans-serif;color:#18181b;">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;">
            <div style="padding:24px;background:#09090b;color:#ffffff;">
              <div style="font-size:22px;font-weight:800;">
                CHINA<span style="color:#dc2626;">MOTORS</span>
              </div>
              <div style="margin-top:8px;color:#a1a1aa;">
                Новая заявка с сайта
              </div>
            </div>

            <div style="padding:24px;">
              ${emailRow("Имя", lead.name)}
              ${emailRow("Телефон", lead.phone)}
              ${emailRow("Автомобиль", lead.car)}
              ${emailRow("VIN", lead.vin)}

              <div style="margin-top:22px;">
                <div style="font-size:13px;color:#71717a;">Что требуется</div>
                <div style="margin-top:7px;padding:14px;background:#f4f4f5;border-radius:12px;line-height:1.6;">
                  ${escapeHtml(lead.message)}
                </div>
              </div>

              <div style="margin-top:24px;padding-top:18px;border-top:1px solid #e4e4e7;font-size:12px;color:#71717a;">
                Дата заявки: ${formatDate(lead.createdAt)}
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: [
      "Новая заявка с сайта ChinaMotors",
      "",
      `Имя: ${lead.name}`,
      `Телефон: ${lead.phone}`,
      `Автомобиль: ${lead.car}`,
      `VIN: ${lead.vin}`,
      `Что требуется: ${lead.message}`,
      `Дата заявки: ${formatDate(lead.createdAt)}`,
    ].join("\n"),
  });

  if (error) {
    console.error("Ошибка Resend:", error);
    throw new Error("Не удалось отправить заявку на почту.");
  }

  console.log("Письмо отправлено через Resend:", data?.id);
}

async function sendToBitrix24(lead: Lead) {
  // Позже здесь подключим вебхук Битрикс24.
  console.log("Отправка в Битрикс24 пока не подключена:", lead);
}

function emailRow(label: string, value: string) {
  return `
    <div style="margin-bottom:16px;">
      <div style="font-size:13px;color:#71717a;">${escapeHtml(label)}</div>
      <div style="margin-top:5px;font-size:17px;font-weight:700;">
        ${escapeHtml(value)}
      </div>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ru-RU", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Moscow",
  }).format(new Date(value));
}