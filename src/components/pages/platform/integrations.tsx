"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { MagicCard } from "@/components/ui/magic-card";

const INTEGRATIONS = [
  "Slack", "GitHub", "GitLab", "Salesforce", "HubSpot", "Stripe",
  "Notion", "Jira", "Figma", "Linear", "Zendesk", "Intercom",
  "Google Drive", "Dropbox", "Zoom", "Microsoft Teams", "Asana", "Monday.com",
  "Airtable", "Zapier", "Make", "Twilio", "Segment", "Mixpanel",
];

const ROW_A = INTEGRATIONS.slice(0, 12);
const ROW_B = INTEGRATIONS.slice(12);

export function PlatformIntegrations() {
  return (
    <section className="py-28 bg-slate-50 dark:bg-[#060b18] overflow-hidden">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <BlurFade>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] dark:text-white mb-4">
              Connect everything you already use
            </h2>
          </BlurFade>
          <BlurFade delay={0.08}>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">200+ native integrations. One-click setup. No middleware required.</p>
          </BlurFade>
        </div>
        <div className="space-y-4 mb-14">
          <Marquee pauseOnHover className="[--duration:30s] [--gap:1rem]" repeat={3}>
            {ROW_A.map((name) => (
              <div key={name} className="shrink-0 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-[#7B68EE]/50 hover:text-[#7B68EE] transition-colors shadow-sm">
                {name}
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:30s] [--gap:1rem]" repeat={3}>
            {ROW_B.map((name) => (
              <div key={name} className="shrink-0 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-[#7B68EE]/50 hover:text-[#7B68EE] transition-colors shadow-sm">
                {name}
              </div>
            ))}
          </Marquee>
        </div>
        <BlurFade delay={0.2}>
          <MagicCard className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-8 text-center shadow-sm" gradientColor="#ede9fe" gradientOpacity={0.5}>
            <p className="text-[#0f172a] dark:text-white font-bold text-lg mb-2">Don&apos;t see your tool?</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Use our open REST API or Webhook system to connect anything in minutes.</p>
            <a href="/docs/api" className="text-sm font-semibold underline underline-offset-4" style={{ color: "#7B68EE" }}>Explore the API docs →</a>
          </MagicCard>
        </BlurFade>
      </div>
    </section>
  );
}
