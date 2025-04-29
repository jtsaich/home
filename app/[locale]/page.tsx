import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import "animate.css";
import { SpotlightEffect } from "./_components/spotlight-effect";

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const { locale } = params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("Home");

  return (
    <main className="min-h-screen relative">
      <SpotlightEffect />
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row">
        {/* Left Side */}
        <section className="md:w-1/2 flex flex-col justify-center items-start px-8 py-16 md:py-0 md:px-16 min-h-[400px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight animate__animated animate__tada animate__delay-2s">
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
            <p className="mb-4">{t("aboutMe1")}</p>
            <p className="mb-4">{t("aboutMe2")}</p>
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
