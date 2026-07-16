import { submitLead } from "../../lib/lead-service";

type RequestBody = {
  name?: string;
  phone?: string;
  car?: string;
  vin?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RequestBody;

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const car = body.car?.trim();
    const vin = body.vin?.trim();
    const message = body.message?.trim();

    if (!name || !phone || !car || !message) {
      return Response.json(
        {
          success: false,
          message: "Заполните все обязательные поля.",
        },
        { status: 400 },
      );
    }

    if (phone.replace(/\D/g, "").length < 10) {
      return Response.json(
        {
          success: false,
          message: "Проверьте правильность номера телефона.",
        },
        { status: 400 },
      );
    }

    if (vin && vin.length !== 17) {
      return Response.json(
        {
          success: false,
          message: "VIN должен содержать 17 символов.",
        },
        { status: 400 },
      );
    }

    await submitLead({
      name,
      phone,
      car,
      vin: vin || "Не указан",
      message,
      createdAt: new Date().toISOString(),
    });

    return Response.json({
      success: true,
      message: "Заявка успешно принята.",
    });
  } catch (error) {
    console.error("Ошибка обработки заявки:", error);

    return Response.json(
      {
        success: false,
        message: "Не удалось отправить заявку. Попробуйте ещё раз.",
      },
      { status: 500 },
    );
  }
}