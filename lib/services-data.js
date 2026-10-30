import {
  Compass,
  FileText,
  Award,
  MessagesSquare,
  Stamp,
  Plane,
} from "lucide-react";

export const stages = [
  { id: "all", label: "All services" },
  { id: "choosing", label: "Choosing a course" },
  { id: "applying", label: "Applying" },
  { id: "offer", label: "Got an offer" },
];

export const services = [
  {
    id: "course-selection",
    icon: Compass,
    title: "Course and university shortlist",
    summary:
      "We compare programs against your grades, budget and career goal, so your shortlist is built on facts rather than guesses.",
    includes: [
      "Profile review with a counselor",
      "Program and entry-requirement comparison",
      "Tuition and living cost estimate",
    ],
    stages: ["choosing"],
  },
  {
    id: "test-prep",
    icon: MessagesSquare,
    title: "English test guidance",
    summary:
      "Find out which test your universities accept and how much score you need, then plan your preparation around it.",
    includes: [
      "IELTS, TOEFL and Duolingo comparison",
      "Target score for each shortlisted program",
      "Study plan and mock test schedule",
    ],
    stages: ["choosing", "applying"],
  },
  {
    id: "application",
    icon: FileText,
    title: "Application support",
    summary:
      "We review your documents, sharpen your statement of purpose and check every form before it is submitted.",
    includes: [
      "Document checklist per university",
      "Statement of purpose and CV review",
      "Recommendation letter guidance",
      "Final check before you submit",
    ],
    stages: ["applying"],
  },
  {
    id: "scholarships",
    icon: Award,
    title: "Scholarship search",
    summary:
      "We match you with scholarships and funding you are eligible for, and tell you which deadlines come first.",
    includes: [
      "University and government scholarship matches",
      "Eligibility and deadline tracker",
      "Help with scholarship essays",
    ],
    stages: ["choosing", "applying"],
  },
  {
    id: "visa",
    icon: Stamp,
    title: "Visa assistance",
    summary:
      "Once you hold an offer, we walk you through the visa file so nothing is missing on interview day.",
    includes: [
      "Visa document checklist",
      "Financial proof guidance",
      "Mock visa interview",
    ],
    stages: ["offer"],
  },
  {
    id: "pre-departure",
    icon: Plane,
    title: "Pre-departure support",
    summary:
      "Housing, flights, insurance and what to pack. We help you land prepared and settle in faster.",
    includes: [
      "Accommodation search guidance",
      "Travel and health insurance basics",
      "Arrival checklist and orientation tips",
    ],
    stages: ["offer"],
  },
];

export const steps = [
  {
    title: "Free counseling",
    text: "Tell us your grades, budget and goals. We tell you which countries and courses are realistic.",
  },
  {
    title: "Build your shortlist",
    text: "Compare programs side by side and settle on the universities you will apply to.",
  },
  {
    title: "Apply",
    text: "Prepare documents, write your statement and submit applications before the deadlines.",
  },
  {
    title: "Offer and visa",
    text: "Accept your offer, arrange funds and prepare for the visa interview.",
  },
  {
    title: "Fly and settle in",
    text: "Sort out housing and travel, then arrive with a checklist in hand.",
  },
];

export const faqs = [
  {
    q: "Which countries do you cover?",
    a: "We currently guide students to the UK, USA, Canada, Australia and Germany. Open the Destinations page to see what each country offers.",
  },
  {
    q: "Do I have to use every service?",
    a: "No. You can use one service or the whole journey. Many students start with the shortlist and add more later.",
  },
  {
    q: "Can you guarantee admission or a visa?",
    a: "No one can. Universities and embassies make those decisions. We make your application complete, accurate and as strong as it can be.",
  },
  {
    q: "How do I get started?",
    a: "Book a counseling session. We will review your profile and tell you which services will help you most.",
  },
];