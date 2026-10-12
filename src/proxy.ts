import { type NextRequest, NextResponse } from "next/server";
import { defaultLocale, hasLocale, LOCALE_COOKIE, locales } from "@/i18n/config";

function detectLocale(request: NextRequest) {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (saved && hasLocale(saved)) return saved;

  // "cs-CZ,cs;q=0.9,en;q=0.8" -> ["cs", "cs", "en"], already ordered by preference
  const preferred =
    request.headers
      .get("accept-language")
      ?.split(",")
      .map((part) => part.trim().slice(0, 2).toLowerCase()) ?? [];

  return preferred.find(hasLocale) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocalePrefix) return;

  request.nextUrl.pathname = `/${detectLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next.js internals and any file with an extension (icons, images, …)
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};
