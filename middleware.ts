import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
  // Use all configured locales
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  // Always prefix all locales
  localePrefix: "always",
  // Enable built-in locale detection
  localeDetection: true,
});

// Match all paths except api, static files, etc
export const config = {
  matcher: ["/", "/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
