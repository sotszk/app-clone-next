import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // matcher にマッチするパスは `/` にリダイレクトする
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/home/:path*"],
};
