import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";
  let email: string | undefined;

  if (contentType.includes("application/json")) {
    const body = await request.json();
    email = body?.email;
  } else {
    const formData = await request.formData();
    email = formData.get("email")?.toString();
  }

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // Placeholder: wire this up to your CRM, email provider, or database.
  console.log(`New contact request from ${email}`);

  return NextResponse.json({ received: true });
}
