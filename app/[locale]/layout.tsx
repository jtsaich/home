import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  Geist,
  Geist_Mono,
  Noto_Sans_SC,
  Noto_Sans_TC,
} from "next/font/google";
import { routing } from "@/i18n/routing";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const { locale } = params;
  const { children } = props;

  // Validate that the incoming locale is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  // Determine font classes based on locale
  const fontClasses =
    locale === "en"
      ? `${geistSans.className} ${geistMono.className}`
      : locale === "zh-TW"
      ? `${notoSansTC.className} ${geistMono.className}`
      : `${notoSansSC.className} ${geistMono.className}`;

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className={`${fontClasses} antialiased`}>{children}</div>
    </NextIntlClientProvider>
  );
}
