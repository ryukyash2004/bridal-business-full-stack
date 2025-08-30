import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // TODO: replace console.log with integration to email or CRM
    console.log("[/api/contact] received:", body);

    // rudimentary validation
    if (!body) return NextResponse.json({ error: "missing body" }, { status: 400 });

    // respond OK
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "invalid request" }, { status: 400 });
  }
}
