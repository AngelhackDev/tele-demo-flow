export interface Feature {
  id: string;
  number: number;
  title: string;
  description: string;
  href: string;
  color: string;
  icon: string;
}

export const features: Feature[] = [
  {
    id: "faq-auto-reply",
    number: 1,
    title: "FAQ Auto-Reply",
    description:
      "AI-powered automatic responses to frequently asked questions using uploaded data sources",
    href: "/demo/faq-auto-reply",
    color: "bg-blue-500",
    icon: "💬",
  },
  {
    id: "moderation",
    number: 2,
    title: "Moderation",
    description:
      "Automated content moderation with spam detection, keyword filtering, and escalation",
    href: "/demo/moderation",
    color: "bg-red-500",
    icon: "🛡️",
  },
  {
    id: "scheduled-post",
    number: 3,
    title: "Scheduled Post",
    description:
      "Schedule and publish content to Telegram groups/channels at specific times",
    href: "/demo/scheduled-post",
    color: "bg-green-500",
    icon: "📅",
  },
  {
    id: "gamification",
    number: 4,
    title: "Gamification",
    description:
      "Quizzes, rewards, and engagement mechanics to boost audience participation",
    href: "/demo/gamification",
    color: "bg-purple-500",
    icon: "🎮",
  },
  {
    id: "badges",
    number: 5,
    title: "Badges",
    description:
      "Achievement badges awarded to users based on participation and engagement milestones",
    href: "/demo/badges",
    color: "bg-yellow-500",
    icon: "🏅",
  },
  {
    id: "analytics",
    number: 6,
    title: "Analytics",
    description:
      "Track engagement metrics, user activity, and bot performance across groups",
    href: "/demo/analytics",
    color: "bg-cyan-500",
    icon: "📊",
  },
  {
    id: "dynamic-menu",
    number: 7,
    title: "Dynamic Menu",
    description:
      "Configurable bot command menus that adapt based on context and user permissions",
    href: "/demo/dynamic-menu",
    color: "bg-orange-500",
    icon: "📋",
  },
  {
    id: "audit-log",
    number: 8,
    title: "Audit Log",
    description:
      "Track and review all admin actions, bot events, and system changes for accountability",
    href: "/demo/audit-log",
    color: "bg-slate-500",
    icon: "📝",
  },
];
