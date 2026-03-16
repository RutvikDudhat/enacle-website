// Product detail data — one entry per product slug

export type ProductFeature = {
  title: string;
  desc: string;
  badge?: string;
};

export type ProductSection = {
  eyebrow: string;
  heading: string;
  sub: string;
  features: ProductFeature[];
  visual: "dashboard" | "kanban" | "chat" | "pipeline" | "chart" | "form" | "calendar" | "list" | "grid";
  visualBg: string; // tailwind gradient classes
  flip?: boolean;
};

export type ProductTemplate = {
  name: string;
  desc: string;
  color: string;
};

export type ProductData = {
  slug: string;
  name: string;
  sub: string; // "Enacle"
  tagline: string;
  heroHeading: string;
  heroParagraph: string;
  accentColor: string;         // hex
  accentGradient: string;      // tailwind from-X to-Y
  category: string;
  stats: { value: string; label: string }[];
  valueProps: { icon: string; title: string; desc: string }[];
  sections: ProductSection[];
  connectsTo: { name: string; color: string }[];
  templates: ProductTemplate[];
  cta: { heading: string; sub: string };
};

export const PRODUCTS_DATA: ProductData[] = [
  /* ─── ERP / Solar ──────────────────────────────────────────────────── */
  {
    slug: "solar",
    name: "Solar ERP",
    sub: "Enacle",
    tagline: "The ERP that runs as fast as you do",
    heroHeading: "A Business Management\nPlatform that\nsaves time",
    heroParagraph:
      "Automate purchase orders, inventory, accounting, and payroll — all in one place, while staying connected to every tool your team uses.",
    accentColor: "#2563eb",
    accentGradient: "from-blue-600 to-indigo-600",
    category: "ERP",
    stats: [
      { value: "4 hrs",  label: "saved per week on manual data entry" },
      { value: "30%",    label: "reduction in operational overhead" },
      { value: "10k+",   label: "businesses on Enacle Solar ERP" },
    ],
    valueProps: [
      { icon: "⚡", title: "You deserve better than this", desc: "Stop juggling 6 different tools to run your operations. Solar gives you a single source of truth for every business process." },
      { icon: "🎯", title: "You deserve the best",        desc: "The Solar app auto-syncs orders, stock, and accounts so you always have accurate numbers in real time." },
    ],
    sections: [
      {
        eyebrow: "TAB • BOARD • LIST • GANTT",
        heading: "Tasks that make it easier\nto get work done.",
        sub: "Focus on doing the work we all love, not the task creation, organisation, and dropdown options for you.",
        features: [
          { title: "Schedule tasks automatically",  desc: "Create any focus tasks from thousands of ready-to-use, customizable templates. Make task creation feel less daunting." },
          { title: "Turn ideas into tasks",         desc: "Prioritise tasks, transform ideas into tasks, and define sub-tasks easily within the task creation panel." },
          { title: "Track progress at a glance",    desc: "Use status, priority, time estimates, and custom field types to add context that matters for every task." },
        ],
        visual: "kanban",
        visualBg: "from-blue-500 to-indigo-600",
        flip: false,
      },
      {
        eyebrow: "INTEGRATIONS • API • WEBHOOKS",
        heading: "Tasks that connect to\nthe rest of your work",
        sub: "Sync tasks to Flow with Layout Menu, Categories, list & more.",
        features: [
          { title: "Personal Priorities on Tasks",  desc: "Mark what matters most to you personally so that priorities finally match the person closest to the project." },
          { title: "Automate repetitive tasks",     desc: "Programme status updates, self-assigns, and date changes so the routine work happens without your attention." },
          { title: "Do more with Task Types",       desc: "Go beyond tracking milestones, bugs and tickets. Set up task types to capture the kind of work your team does." },
          { title: "Custom Fields by Task Type",    desc: "Add data that's unique to your team's workflow. Fields for every task type so nothing is missed." },
          { title: "Progress tracking & dashboards",desc: "See exactly how far your team has come and predict when work will be done with live burndown charts." },
          { title: "Teams and Tasks together",      desc: "A bird's-eye view of your team's work by task, type, and status so everyone knows exactly what's happening." },
        ],
        visual: "dashboard",
        visualBg: "from-indigo-500 to-violet-600",
        flip: true,
      },
    ],
    connectsTo: [
      { name: "Slack",        color: "#4A154B" },
      { name: "GitHub",       color: "#24292e" },
      { name: "Google Drive", color: "#4285F4" },
      { name: "Zapier",       color: "#FF4A00" },
      { name: "Salesforce",   color: "#00A1E0" },
      { name: "Jira",         color: "#0052CC" },
      { name: "Notion",       color: "#000000" },
      { name: "HubSpot",      color: "#FF7A59" },
    ],
    templates: [
      { name: "Okta",              desc: "Start your project tracking quickly with our pre-built Okta template.",                    color: "#007DC1" },
      { name: "Strategic roadmap", desc: "Create a product roadmap in minutes with our strategic planning template.",                color: "#2563eb" },
      { name: "Template",          desc: "Customizable templates built for any type of project management workflow.",                color: "#7c3aed" },
    ],
    cta: {
      heading: "Tasks that connect\nto everything you do",
      sub: "Enacle Solar will make sure you can talk to your teammates — whether you work from home or in office.",
    },
  },

  /* ─── CRM ───────────────────────────────────────────────────────────── */
  {
    slug: "crm",
    name: "CRM",
    sub: "Enacle",
    tagline: "Close deals faster with AI",
    heroHeading: "A Sales CRM that\nactually helps\nyou sell",
    heroParagraph:
      "AI-scored leads, pipeline automation, and deal intelligence — all in one workspace that lives where your team already works.",
    accentColor: "#dc2626",
    accentGradient: "from-red-500 to-rose-600",
    category: "Sales",
    stats: [
      { value: "2×",    label: "faster deal velocity on average" },
      { value: "40%",   label: "increase in pipeline visibility" },
      { value: "5k+",   label: "sales teams on Enacle CRM" },
    ],
    valueProps: [
      { icon: "🚀", title: "Your pipeline, always up to date", desc: "AI auto-enriches contacts, scores leads, and moves deals forward so reps spend time selling, not updating CRM." },
      { icon: "📊", title: "Full context on every deal",       desc: "Emails, calls, notes, and tasks tied to every contact — one place your whole team can see what's happening." },
    ],
    sections: [
      {
        eyebrow: "PIPELINE • KANBAN • LIST",
        heading: "Manage every deal\nin one view",
        sub: "Drag-and-drop pipeline, AI deal scoring, and automated follow-ups built right in.",
        features: [
          { title: "AI lead scoring",        desc: "Automatically score leads based on behaviour, firmographics, and historical deal data." },
          { title: "Visual pipeline",        desc: "Drag deals across stages. Set probability, value, and expected close date with one click." },
          { title: "Activity timeline",      desc: "Every email, call, and note lives on the contact record so your team always has context." },
        ],
        visual: "pipeline",
        visualBg: "from-red-500 to-rose-600",
        flip: false,
      },
      {
        eyebrow: "AUTOMATIONS • EMAIL • TASKS",
        heading: "Let AI do the\nrepetitive work",
        sub: "Set up sequences, auto-tasks, and deal alerts so nothing slips through the cracks.",
        features: [
          { title: "Email sequences",        desc: "Build multi-step email cadences that pause when a prospect replies — no more manual follow-ups." },
          { title: "Auto-task creation",     desc: "Create tasks from deal stage changes so your process is always followed." },
          { title: "Win/loss analysis",      desc: "AI surfaces patterns in won and lost deals to help you replicate what works." },
          { title: "Custom fields",          desc: "Add any data field to contacts or deals. Your CRM should fit your process, not the other way around." },
        ],
        visual: "chart",
        visualBg: "from-rose-500 to-pink-600",
        flip: true,
      },
    ],
    connectsTo: [
      { name: "Gmail",        color: "#EA4335" },
      { name: "Outlook",      color: "#0078D4" },
      { name: "LinkedIn",     color: "#0A66C2" },
      { name: "Zapier",       color: "#FF4A00" },
      { name: "Slack",        color: "#4A154B" },
      { name: "HubSpot",      color: "#FF7A59" },
    ],
    templates: [
      { name: "B2B Sales pipeline",  desc: "A battle-tested B2B sales process ready to customise.", color: "#dc2626" },
      { name: "Account management",  desc: "Track renewals, upsells, and health for every account.", color: "#ea580c" },
      { name: "Inbound leads",       desc: "Capture, route, and convert inbound leads automatically.", color: "#7c3aed" },
    ],
    cta: {
      heading: "Close more deals\nwith less effort",
      sub: "Enacle CRM gives every rep the AI tools they need to hit quota — without the admin.",
    },
  },

  /* ─── Projects ──────────────────────────────────────────────────────── */
  {
    slug: "projects",
    name: "Projects",
    sub: "Enacle",
    tagline: "Plan, track & ship — faster",
    heroHeading: "A Project Management\nPlatform built\nfor speed",
    heroParagraph:
      "Kanban, Gantt, sprints, and AI auto-scheduling — all in one workspace so your team ships faster without the chaos.",
    accentColor: "#7c3aed",
    accentGradient: "from-violet-600 to-purple-700",
    category: "Project Management",
    stats: [
      { value: "3×",   label: "faster project kick-off" },
      { value: "50%",  label: "fewer missed deadlines" },
      { value: "20k+", label: "teams ship with Enacle Projects" },
    ],
    valueProps: [
      { icon: "🗂️", title: "Every view your team needs", desc: "Switch between Kanban, Gantt, list, and calendar with one click. Everyone works the way they think." },
      { icon: "🤖", title: "AI that does the heavy lifting", desc: "Auto-generate project plans, assign tasks by capacity, and surface risks before they become blockers." },
    ],
    sections: [
      {
        eyebrow: "KANBAN • GANTT • LIST • CALENDAR",
        heading: "One project, every\nview your team loves",
        sub: "Switch views without losing context. Your data lives in one place no matter how you look at it.",
        features: [
          { title: "AI project planner",      desc: "Describe your project in plain English and let AI generate a full task breakdown with estimates." },
          { title: "Gantt dependencies",      desc: "Link tasks with finish-to-start or start-to-start dependencies. The timeline adjusts automatically." },
          { title: "Workload view",           desc: "See who's overloaded and who has capacity before you assign the next task." },
        ],
        visual: "kanban",
        visualBg: "from-violet-600 to-purple-700",
        flip: false,
      },
      {
        eyebrow: "SPRINTS • BACKLOG • VELOCITY",
        heading: "Ship product faster\nwith built-in agile",
        sub: "Full Scrum and Kanban toolkit with velocity charts, retrospectives, and GitHub integration.",
        features: [
          { title: "Sprint planning board",   desc: "Drag stories from backlog into sprints and let AI suggest the optimal sprint load based on velocity." },
          { title: "GitHub / GitLab sync",    desc: "Link commits and PRs to tasks. Close tasks automatically when code is merged." },
          { title: "Retrospective templates", desc: "Run structured retros with built-in voted items and action tracking." },
          { title: "Velocity charts",         desc: "Track team velocity over time to make accurate predictions for stakeholders." },
        ],
        visual: "dashboard",
        visualBg: "from-purple-600 to-indigo-700",
        flip: true,
      },
    ],
    connectsTo: [
      { name: "GitHub",       color: "#24292e" },
      { name: "GitLab",       color: "#FC6D26" },
      { name: "Slack",        color: "#4A154B" },
      { name: "Figma",        color: "#F24E1E" },
      { name: "Notion",       color: "#000000" },
      { name: "Google Drive", color: "#4285F4" },
    ],
    templates: [
      { name: "Product roadmap",    desc: "Strategic roadmap template aligned to quarters and OKRs.", color: "#7c3aed" },
      { name: "Sprint template",    desc: "Two-week sprint with backlog, in-progress, and review columns.", color: "#6366f1" },
      { name: "Launch checklist",   desc: "Never miss a launch step with this battle-tested checklist.", color: "#0891b2" },
    ],
    cta: {
      heading: "Ship better products\nfaster",
      sub: "Enacle Projects gives your team everything from planning to retrospectives in one place.",
    },
  },
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return PRODUCTS_DATA.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS_DATA.map((p) => p.slug);
}
