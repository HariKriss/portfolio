import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message content cannot be empty." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || "hariprasath26.dev@gmail.com";
    const gmailAppPassword = (process.env.GMAIL_APP_PASSWORD || "").replace(/\s+/g, "");
    const recipientEmail = process.env.CONTACT_TO_EMAIL || gmailUser;

    if (!gmailAppPassword) {
      console.error("GMAIL_APP_PASSWORD is not set in environment variables.");
      return NextResponse.json(
        {
          error:
            "Email service is not fully configured yet. GMAIL_APP_PASSWORD is missing in .env.local.",
        },
        { status: 500 }
      );
    }

    // Configure Nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const mailSubject = subject?.trim()
      ? `Portfolio Contact: ${subject.trim()}`
      : `New Portfolio Message from ${name.trim()}`;

    // Clean formatting for message
    const formattedMessage = message
      .trim()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br/>");

    // HTML Email Template
    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #0c0d0e;
            color: #e5e5e5;
            margin: 0;
            padding: 32px 16px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #141518;
            border: 1px solid #282a2e;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          }
          .header {
            background: linear-gradient(135deg, #1f2317 0%, #2b3017 100%);
            padding: 24px 28px;
            border-bottom: 1px solid #3c4224;
          }
          .header-title {
            color: #e2e58c;
            margin: 0;
            font-size: 20px;
            font-weight: 700;
            letter-spacing: -0.3px;
          }
          .header-subtitle {
            color: #a1a67a;
            margin: 6px 0 0;
            font-size: 13px;
          }
          .content {
            padding: 28px;
          }
          .meta-box {
            background: #1a1c20;
            border-radius: 12px;
            padding: 16px 20px;
            margin-bottom: 24px;
            border: 1px solid #2a2d34;
          }
          .meta-row {
            margin-bottom: 10px;
            font-size: 14px;
          }
          .meta-row:last-child {
            margin-bottom: 0;
          }
          .meta-label {
            color: #888e99;
            font-weight: 600;
            display: inline-block;
            width: 80px;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.5px;
          }
          .meta-value {
            color: #ffffff;
            font-weight: 500;
          }
          .meta-value a {
            color: #c8cb6d;
            text-decoration: none;
          }
          .message-title {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            color: #888e99;
            font-weight: 700;
            margin-bottom: 10px;
          }
          .message-card {
            background: #18191e;
            border-left: 3px solid #c8cb6d;
            padding: 18px 20px;
            border-radius: 8px;
            font-size: 15px;
            line-height: 1.6;
            color: #e6e8eb;
          }
          .action-area {
            margin-top: 28px;
            text-align: center;
          }
          .reply-button {
            display: inline-block;
            background: #c8cb6d;
            color: #12140d;
            font-weight: 700;
            font-size: 14px;
            padding: 12px 28px;
            border-radius: 10px;
            text-decoration: none;
          }
          .footer {
            padding: 18px 28px;
            border-top: 1px solid #23252a;
            font-size: 12px;
            color: #6c727d;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 class="header-title">✨ New Portfolio Message</h2>
            <p class="header-subtitle">Someone reached out via your portfolio contact form</p>
          </div>
          <div class="content">
            <div class="meta-box">
              <div class="meta-row">
                <span class="meta-label">From:</span>
                <span class="meta-value">${name.trim()}</span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Email:</span>
                <span class="meta-value"><a href="mailto:${email.trim()}">${email.trim()}</a></span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Subject:</span>
                <span class="meta-value">${subject?.trim() || "General Inquiry"}</span>
              </div>
            </div>

            <div class="message-title">Message Body</div>
            <div class="message-card">
              ${formattedMessage}
            </div>

            <div class="action-area">
              <a href="mailto:${email.trim()}?subject=Re: ${encodeURIComponent(subject?.trim() || 'Your portfolio inquiry')}" class="reply-button">
                Reply to ${name.trim()}
              </a>
            </div>
          </div>
          <div class="footer">
            Sent via Hari Prasath's Portfolio Website • Receiver: ${recipientEmail}
          </div>
        </div>
      </body>
    </html>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: email.trim(),
      subject: mailSubject,
      text: `New Portfolio Message\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject?.trim() || "General Inquiry"}\n\nMessage:\n${message.trim()}`,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email.";
    return NextResponse.json(
      {
        error:
          "Failed to send email. Please verify your Gmail App Password configuration.",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
