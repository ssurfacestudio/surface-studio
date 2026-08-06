import { NextRequest, NextResponse } from "next/server";

// Placeholder handler. Wire this up to your inbox (Resend/SendGrid) or CRM
// using process.env.CONTACT_FORM_ENDPOINT — the request body already
// contains whatever fields the calling form sent (name, email, product…).
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const endpoint = process.env.CONTACT_FORM_ENDPOINT;
    if (endpoint) {
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } else {
      console.log("[quote] New enquiry:", body);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
