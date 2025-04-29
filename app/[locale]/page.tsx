import React from "react";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("Home");
  return (
    <main className="min-h-screen">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row">
        {/* Left Side */}
        <section className="md:w-1/2 flex flex-col justify-center items-start px-8 py-16 md:py-0 md:px-16 min-h-[400px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            {t("name")}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-4">{t("role")}</h2>
          <p className="text-base md:text-lg mb-12 max-w-xs">{t("tagline")}</p>
          <nav className="w-full mt-8">
            <ul className="flex flex-col gap-2 text-sm font-semibold tracking-widest">
              <li>
                <span className="inline-block border-b-2 pb-1">
                  {t("about")}
                </span>
              </li>
              <li>
                <span className="inline-block border-b pb-1">
                  {t("experience")}
                </span>
              </li>
              <li>
                <span className="inline-block border-b pb-1">
                  {t("projects")}
                </span>
              </li>
            </ul>
          </nav>
        </section>
        {/* Right Side */}
        <section className="md:w-1/2 flex flex-col justify-center px-8 py-16 md:py-0 md:px-16 min-h-[400px]">
          <div className="max-w-2xl text-base md:text-lg leading-relaxed">
            <p className="mb-4">{t("placeholder1")}</p>
            <p className="mb-4">{t("placeholder2")}</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
  };
}
