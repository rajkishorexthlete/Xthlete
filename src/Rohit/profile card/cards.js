import {
  IoPersonOutline,
  IoStatsChartOutline,
  IoRibbonOutline,
} from "react-icons/io5";
const xProfileCards = [
  {
    icon: IoPersonOutline,
    title: 'Complete Your x.Profile',
    body:
      'One simple step to apply for sponsorships and participate in official Xthlete tournaments. Your journey starts here.',
    cta: 'Start your Sports Identity!',
    href: '/profile',
    bgColor: "#FEEFDD",
    iconColor: "#F97316",
  },
  {
    icon: IoStatsChartOutline,
    title: 'Build your x.Rank',
    body:
      'Build your x.Rank by competing in official Xthlete tournaments — the higher you rank, the closer you are to cracking that brand deal.',
    cta: 'x.Rank is your edge!',
    href: '/xthletes',
    bgColor: "#ECFDF5",
    iconColor: "#10B981",
  },
  {
    icon: IoRibbonOutline,
    title: 'Looking for Sponsorship?',
    body:
      "Every match you book through Xthlete is recorded in your x.Profile. We're tracking your journey — building a verified sports profile that brands can trust and discover.",
    cta: "Let's crack your 1st brand deal.",
    href: '/sponsorship',
    bgColor: "#EEF2FF",
    iconColor: "#6366F1",
  },
  {
    icon: IoPersonOutline, 
    title: 'Stay Updated with x.News',
    body:
      'Catch the latest updates, tournament highlights, and player spotlights — all in one place. Stay informed and inspired with the Xthlete community.',
    cta: 'Your daily dose of sports insights!',
    href: '/news',
    bgColor: "#F0F9FF", 
    iconColor: "#3B82F6",
  },
];


export default xProfileCards