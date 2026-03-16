"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Marquee } from "@/components/ui/marquee";

/* ─── Tech data — 4 rows ──────────────────────────────────────────── */
type TechItem = { slug: string; name: string; iconColor: string; accent: string };

/* prettier-ignore */
const ROW1: TechItem[] = [
  { slug: "react",       name: "React",        iconColor: "22d3ee", accent: "#22d3ee" },
  { slug: "nextdotjs",   name: "Next.js",       iconColor: "000000", accent: "#111827" },
  { slug: "typescript",  name: "TypeScript",    iconColor: "3178C6", accent: "#3178C6" },
  { slug: "javascript",  name: "JavaScript",    iconColor: "b45309", accent: "#EAB308" },
  { slug: "tailwindcss", name: "Tailwind CSS",  iconColor: "06B6D4", accent: "#06B6D4" },
  { slug: "vuedotjs",    name: "Vue.js",        iconColor: "4FC08D", accent: "#4FC08D" },
  { slug: "angular",     name: "Angular",       iconColor: "DD0031", accent: "#DD0031" },
  { slug: "svelte",      name: "Svelte",        iconColor: "FF3E00", accent: "#FF3E00" },
  { slug: "figma",       name: "Figma",         iconColor: "F24E1E", accent: "#F24E1E" },
];

/* prettier-ignore */
const ROW2: TechItem[] = [
  { slug: "nodedotjs",   name: "Node.js",       iconColor: "339933", accent: "#339933" },
  { slug: "python",      name: "Python",        iconColor: "3776AB", accent: "#3776AB" },
  { slug: "django",      name: "Django",        iconColor: "092E20", accent: "#092E20" },
  { slug: "fastapi",     name: "FastAPI",       iconColor: "009688", accent: "#009688" },
  { slug: "nestjs",      name: "NestJS",        iconColor: "E0234E", accent: "#E0234E" },
  { slug: "graphql",     name: "GraphQL",       iconColor: "E10098", accent: "#E10098" },
  { slug: "go",          name: "Go",            iconColor: "00ADD8", accent: "#00ADD8" },
  { slug: "rust",        name: "Rust",          iconColor: "000000", accent: "#374151" },
  { slug: "php",         name: "PHP",           iconColor: "777BB4", accent: "#777BB4" },
];

/* prettier-ignore */
const ROW3: TechItem[] = [
  { slug: "openai",          name: "OpenAI",       iconColor: "10a37f", accent: "#10a37f" },
  { slug: "tensorflow",      name: "TensorFlow",   iconColor: "FF6F00", accent: "#FF6F00" },
  { slug: "pytorch",         name: "PyTorch",      iconColor: "EE4C2C", accent: "#EE4C2C" },
  { slug: "langchain",       name: "LangChain",    iconColor: "1C3D59", accent: "#1C3D59" },
  { slug: "huggingface",     name: "Hugging Face", iconColor: "FF9A00", accent: "#FF9A00" },
  { slug: "apacheairflow",   name: "Airflow",      iconColor: "017CEE", accent: "#017CEE" },
  { slug: "amazonaws",       name: "AWS",          iconColor: "FF9900", accent: "#FF9900" },
  { slug: "microsoftazure",  name: "Azure",        iconColor: "0078D4", accent: "#0078D4" },
  { slug: "googlecloud",     name: "Google Cloud", iconColor: "4285F4", accent: "#4285F4" },
];

/* ─── Tech Card ───────────────────────────────────────────────────── */
function TechCard({ item }: { item: TechItem }) {
  return (
    <div className="group relative flex w-[calc(100vw/11)] min-w-[80px] shrink-0 flex-col items-center justify-center gap-2.5 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-7 overflow-hidden cursor-pointer transition-colors duration-200">
      {/* Hover accent tint */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-[0.06]"
        style={{ background: item.accent }}
      />
      {/* Icon */}
      <div
        className="relative flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
        style={{ background: item.accent + "18" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://cdn.simpleicons.org/${item.slug}/${item.iconColor}`}
          alt={item.name}
          className="h-6 w-6 object-contain"
          loading="lazy"
        />
      </div>
      {/* Name */}
      <span className="relative text-center text-[11px] font-semibold leading-tight text-gray-500 dark:text-slate-400 transition-colors duration-200 group-hover:text-gray-800 dark:group-hover:text-white">
        {item.name}
      </span>
    </div>
  );
}

/* ─── Main Section ───────────────────────────────────────────────── */
export function OurTechnologies() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-slate-950 py-20">
      {/* Dot texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #64748b 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Orange glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-60 w-[600px] -translate-x-1/2 rounded-full bg-[#EF9449]/[0.06] blur-3xl"
      />

      <div className="relative z-10">

        {/* ── Header ── */}
        <div className="mx-auto max-w-[100rem] px-6 sm:px-10 lg:px-16 xl:px-20">
          <BlurFade delay={0.04} inView>
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-[#EF9449]" />
              <AnimatedShinyText
                shimmerWidth={100}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF9449]"
              >
                Tech Stack
              </AnimatedShinyText>
              <div className="h-px w-8 bg-[#EF9449]" />
            </div>
          </BlurFade>

          <BlurFade delay={0.08} inView>
            <h2 className="mx-auto mb-3 max-w-2xl text-center text-4xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Our{" "}
              <span className="relative inline-block">
                <span style={{ color: "#EF9449" }}>Technologies</span>
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                  <path d="M0 5 Q50 1 100 5 Q150 9 200 5" stroke="#EF9449" strokeWidth="1.8" fill="none" opacity="0.5" />
                </svg>
              </span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.12} inView>
            <p className="mx-auto mb-12 max-w-lg text-center text-sm leading-relaxed text-gray-500 dark:text-slate-400">
              Battle-tested tools and modern frameworks — from pixel-perfect frontends
              to intelligent AI pipelines and resilient cloud infrastructure.
            </p>
          </BlurFade>
        </div>

        {/* ── Marquee rows ── */}
        <BlurFade delay={0.16} inView>
          <div className="relative max-w-[100rem] mx-auto border-gray-200 dark:border-slate-800">
            {/* Left / right fade masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />

            <Marquee pauseOnHover className="!p-0 [--duration:28s] [--gap:0rem]">
              {ROW1.map((item) => <TechCard key={item.slug} item={item} />)}
            </Marquee>

            <Marquee reverse pauseOnHover className="!p-0 [--duration:28s] [--gap:0rem]">
              {ROW2.map((item) => <TechCard key={item.slug} item={item} />)}
            </Marquee>

            <Marquee pauseOnHover className="!p-0 [--duration:28s] [--gap:0rem]">
              {ROW3.map((item) => <TechCard key={item.slug} item={item} />)}
            </Marquee>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
