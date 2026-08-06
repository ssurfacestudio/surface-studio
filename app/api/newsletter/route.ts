import { NextRequest, NextResponse } from "next/server";

// Placeholder handler. Wire this up to an email service provider
// (Mailchimp, Klaviyo, Resend, Buttondown, etc.) using
// process.env.NEWSLETTER_ENDPOINT, or forward to your CRM.
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    const endpoint = process.env.NEWSLETTER_ENDPOINT;
    if (endpoint) {
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } else {
      console.log("[newsletter] New subscriber:", email);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
