import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const cookieList = await cookies().getAll();
  return NextResponse.json({ cookieList });
}

export async function POST(req, res) {
  const requestData = await req.json();
  const name = requestData.name;
  const cookieStore = await cookies();
  const isCookieExists = cookieStore.has(name);
  let message = "Cookie not found!";
  let cookieData = [];
  if (isCookieExists) {
    cookieData.push(cookieStore.get(name));
    message = "cookie data found!";
  }
  return NextResponse.json({ isCookieExists, message, cookieData });
}
