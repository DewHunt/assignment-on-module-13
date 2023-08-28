import { NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api")) {
    const requestHeaders = new Headers(req.headers);
    const authorization = requestHeaders.get("Authorization");
    let token = `Bearer ${authorization}`;
    requestHeaders.set("User-Id", "123");
    requestHeaders.set("User-Name", "Dew Hunt");
    requestHeaders.set("Authorization", token);
    return NextResponse.next({ request: { headers: requestHeaders } });

    // if (authorization === "123-dew-hunt") {
    //   requestHeaders.set("User-Id", "123");
    //   requestHeaders.set("User-Name", "Dew Hunt");
    //   requestHeaders.set("Authorization", token);
    //   return NextResponse.next({ request: { headers: requestHeaders } });
    // } else {
    //   return NextResponse.json(
    //     { message: "Unauthorized access" },
    //     { status: 401 }
    //   );
    // }
  }
}
