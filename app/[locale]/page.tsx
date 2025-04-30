import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import "animate.css";
import { SpotlightEffect } from "./_components/spotlight-effect";
import { ExperienceSection } from "./_components/experience-section";
import { NavButtons } from "./_components/nav-buttons";

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const { locale } = params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations("Home");

  return (
    <main className="min-h-screen relative bg-gradient-to-br from-rose-50/50 via-white to-purple-50/50 dark:from-rose-950/5 dark:via-neutral-950 dark:to-purple-950/5">
      <SpotlightEffect />
      <div className="relative max-w-screen-xl mx-auto flex flex-col md:flex-row animate__animated animate__fadeIn">
        {/* Left Side */}
        <div className="pt-20 md:pt-0 md:sticky md:top-24 md:w-1/3 h-fit flex flex-col items-start px-8 min-h-[400px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight animate__animated animate__tada animate__delay-2s">
            {t("name")}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-4">{t("role")}</h2>
          <p className="text-base md:text-lg mb-12 max-w-xs">{t("tagline")}</p>
          <nav className="w-full mt-8">
            <NavButtons
              labels={{
                about: t("about"),
                experience: t("experience"),
                projects: t("projects"),
              }}
            />
          </nav>
        </div>
        {/* Right Side */}
        <div className="md:w-2/3 flex flex-col justify-center px-8 py-24 min-h-[400px]">
          {/* About section */}
          <div
            id="about"
            className="max-w-2xl text-base md:text-lg leading-relaxed scroll-mt-24"
          >
            <p className="mb-4">{t("aboutMe1")}</p>
            <p className="mb-4">{t("aboutMe2")}</p>
          </div>
          {/* Experience section */}
          <div id="experience" className="mt-16 scroll-mt-24">
            <ExperienceSection />
          </div>
        </div>
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
