"use client";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export function DevelopmentProcess() {
  return (
    <section className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden">
      {/* Dot-grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #64748b 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Orange center glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EF9449]/[0.06] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[100rem] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center mb-14">
          <BlurFade delay={0.04} inView>
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-[#EF9449]" />
              <AnimatedShinyText
                shimmerWidth={100}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF9449]"
              >
                How We Work
              </AnimatedShinyText>
              <div className="h-px w-8 bg-[#EF9449]" />
            </div>
          </BlurFade>

          <BlurFade delay={0.08} inView>
            <h2 className="mx-auto mb-3 max-w-2xl text-center text-4xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              A streamlined{" "}
              <span className="relative inline-block">
                <span style={{ color: "#EF9449" }}>development process</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q50 1 100 5 Q150 9 200 5"
                    stroke="#EF9449"
                    strokeWidth="1.8"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.12} inView>
            <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-gray-500 dark:text-slate-400">
              From initial discovery to production deployment, our proven workflow keeps every
              project on track, on time, and built to last.
            </p>
          </BlurFade>
        </div>

        {/* Image */}
        <BlurFade delay={0.18} inView>
          <div className="relative mx-auto max-w-5xl  overflow-hidden">
            {/* Orange top accent */}
            <Image
              src="/processdevelopement.png"
              alt="Development process overview"
              width={800}
              height={675}
              className="w-full h-auto object-cover rounded-2xl border border-gray-200 dark:border-gray-700/60"
              priority={false}
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
