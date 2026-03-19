import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const columns = [
  {
    title: "To Do",
    color: "bg-muted",
    cards: [
      { title: "Site Survey — Johnson", tag: "Survey", tagColor: "bg-blue-100 text-blue-700", priority: "High" },
      { title: "Permit Application #1109", tag: "Permit", tagColor: "bg-amber-100 text-amber-700", priority: "Medium" },
    ],
  },
  {
    title: "In Progress",
    color: "bg-solar-yellow/20",
    cards: [
      { title: "Panel Install — Green Acres", tag: "Install", tagColor: "bg-solar-yellow/20 text-solar-orange", priority: "High" },
      { title: "Wiring — SunTech Home", tag: "Electrical", tagColor: "bg-green-100 text-green-700", priority: "Medium" },
      { title: "Roof Mounting — #1095", tag: "Install", tagColor: "bg-solar-yellow/20 text-solar-orange", priority: "Low" },
    ],
  },
  {
    title: "Review",
    color: "bg-solar-orange/20",
    cards: [
      { title: "Inspection — Commercial #987", tag: "QA", tagColor: "bg-solar-orange/20 text-solar-orange", priority: "High" },
    ],
  },
  {
    title: "Completed",
    color: "bg-green-100",
    cards: [
      { title: "Commission — Res #1042", tag: "Done", tagColor: "bg-green-100 text-green-700", priority: "—" },
      { title: "Handover — EcoVolt", tag: "Done", tagColor: "bg-green-100 text-green-700", priority: "—" },
    ],
  },
];

export default function ProjectManagementSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center max-w-2xl mx-auto mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold gradient-text uppercase tracking-widest">Project Management</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Visual <span className="gradient-text">Kanban Boards</span> for Every Project</h2>
          <p className="text-muted-foreground text-lg">Track installations, tasks, and milestones at a glance.</p>
        </div>

        <div className={`glass-card p-4 overflow-x-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <div className="flex gap-4 min-w-[700px]">
            {columns.map((col) => (
              <div key={col.title} className="flex-1 min-w-[160px]">
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${col.color} mb-3`}>
                  <span className="text-xs font-bold">{col.title}</span>
                  <span className="ml-auto text-[10px] bg-white/60 rounded-full px-1.5 py-0.5 font-medium">{col.cards.length}</span>
                </div>
                <div className="space-y-2">
                  {col.cards.map((card) => (
                    <div key={card.title} className="bg-white rounded-xl p-3 border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                      <div className="text-[10px] font-semibold mb-1.5">{card.title}</div>
                      <div className="flex items-center justify-between">
                        <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${card.tagColor}`}>{card.tag}</span>
                        <span className={`text-[8px] font-medium ${card.priority === "High" ? "text-red-500" : card.priority === "Medium" ? "text-amber-500" : "text-muted-foreground"}`}>{card.priority}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
