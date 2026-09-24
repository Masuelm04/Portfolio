import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char] ?? char
  );

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: "RESEND_API_KEY no está configurada.",
        },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      return NextResponse.json(
        {
          success: false,
          message: "CONTACT_TO_EMAIL no está configurado.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Validaciones
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Todos los campos son obligatorios.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "El correo electrónico no es válido.",
        },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "El nombre es demasiado largo.",
        },
        { status: 400 }
      );
    }

    if (subject.length > 150) {
      return NextResponse.json(
        {
          success: false,
          message: "El asunto es demasiado largo.",
        },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "El mensaje es demasiado largo.",
        },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
          <h2 style="color: #0f172a;">
            Nuevo mensaje desde tu portfolio
          </h2>

          <hr />

          <p>
            <strong>Nombre:</strong><br />
            ${safeName}
          </p>

          <p>
            <strong>Correo:</strong><br />
            ${safeEmail}
          </p>

          <p>
            <strong>Asunto:</strong><br />
            ${safeSubject}
          </p>

          <p>
            <strong>Mensaje:</strong><br />
            ${safeMessage}
          </p>

          <hr />

          <p style="font-size: 12px; color: #6b7280;">
            Este mensaje fue enviado desde el formulario de contacto de tu portfolio.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "No fue posible enviar el mensaje.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Ocurrió un error inesperado.",
      },
      { status: 500 }
    );
  }
}