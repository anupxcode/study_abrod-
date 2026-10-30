// ADD these exports to your existing /lib/mock-data.js (do not replace the file).

export const processSteps = [
  {
    id: 1,
    icon: "MessageCircle",
    title: "Free counseling",
    duration: "1 day",
    description:
      "Tell us your goals, budget and academic background. We explain your realistic options.",
    youDo: ["Share your results and goals", "Tell us your budget"],
    weDo: ["Review your profile", "Outline a personal study plan"],
  },
  {
    id: 2,
    icon: "Globe",
    title: "Choose country and course",
    duration: "1 to 2 weeks",
    description:
      "Compare countries, study levels and subjects by cost, career outcomes and visa rules.",
    youDo: ["Pick your top 2 or 3 countries", "Decide level and subject"],
    weDo: ["Compare tuition and living costs", "Explain work and PR options"],
  },
  {
    id: 3,
    icon: "GraduationCap",
    title: "Shortlist universities",
    duration: "1 week",
    description:
      "We match you with programs where your profile has a strong chance of admission.",
    youDo: ["Review the shortlist", "Confirm your final choices"],
    weDo: ["Check entry requirements", "Rank by fit and budget"],
  },
  {
    id: 4,
    icon: "FileText",
    title: "Prepare documents and tests",
    duration: "2 to 8 weeks",
    description:
      "Gather transcripts, write your SOP, collect recommendation letters and take IELTS or TOEFL.",
    youDo: ["Collect certificates", "Book and take your English test"],
    weDo: ["Review your SOP and CV", "Check every document"],
  },
  {
    id: 5,
    icon: "Send",
    title: "Apply and get your offer",
    duration: "2 to 6 weeks",
    description:
      "We submit your applications, track each one and help you respond to the universities.",
    youDo: ["Approve your applications", "Reply to university emails"],
    weDo: ["Submit and track applications", "Help you accept the best offer"],
  },
  {
    id: 6,
    icon: "Wallet",
    title: "Funding and scholarships",
    duration: "Runs alongside",
    description:
      "Plan tuition, apply for scholarships and prepare the proof of funds your visa needs.",
    youDo: ["Prepare bank documents", "Submit scholarship forms"],
    weDo: ["Find scholarships you qualify for", "Guide your financial proof"],
  },
  {
    id: 7,
    icon: "Stamp",
    title: "Visa application",
    duration: "2 to 8 weeks",
    description:
      "File your visa, attend biometrics and practice for the interview with our team.",
    youDo: ["Attend biometrics", "Join mock interviews"],
    weDo: ["Check your visa file", "Prepare you for the interview"],
  },
  {
    id: 8,
    icon: "Plane",
    title: "Pre-departure and arrival",
    duration: "1 to 2 weeks",
    description:
      "Book flights and housing, learn what to pack and know who to call when you land.",
    youDo: ["Book your flight", "Confirm accommodation"],
    weDo: ["Run a pre-departure briefing", "Share arrival contacts"],
  },
];

export const processDocuments = {
  undergraduate: [
    "Passport (valid for at least 12 months)",
    "SSC and HSC certificates and transcripts",
    "English test score (IELTS, TOEFL or Duolingo)",
    "Personal statement or SOP",
    "One or two recommendation letters",
    "Bank statement or sponsor documents",
  ],
  masters: [
    "Passport (valid for at least 12 months)",
    "Bachelor degree certificate and transcripts",
    "English test score (IELTS or TOEFL)",
    "Statement of purpose",
    "Two recommendation letters",
    "Updated CV",
    "Bank statement or scholarship letter",
  ],
  phd: [
    "Passport (valid for at least 12 months)",
    "Masters and bachelor transcripts",
    "Research proposal",
    "Two or three academic references",
    "Publications list (if any)",
    "English test score",
    "Funding proof or supervisor confirmation",
  ],
};

// Timeline bar: values are months on a 0 to 10 scale.
export const processPhases = [
  { label: "Counseling and shortlist", start: 0, end: 1.5, note: "About 1 to 2 weeks" },
  { label: "Documents and tests", start: 1, end: 4, note: "About 2 to 8 weeks" },
  { label: "Applications and offer", start: 3, end: 6, note: "About 2 to 6 weeks" },
  { label: "Funding and scholarships", start: 3, end: 7, note: "Runs alongside applications" },
  { label: "Visa", start: 6, end: 8.5, note: "About 2 to 8 weeks" },
  { label: "Departure", start: 8.5, end: 10, note: "About 1 to 2 weeks" },
];

export const processFaqs = [
  {
    q: "Is the first counseling session really free?",
    a: "Yes. The first session is free and has no obligation. We review your profile and explain your options.",
  },
  {
    q: "How long does the whole process take?",
    a: "Most students need 6 to 10 months from the first session to landing. English tests and visa processing change the timeline the most.",
  },
  {
    q: "Can I apply to more than one university?",
    a: "Yes. We usually recommend 4 to 6 applications across safe, target and ambitious choices.",
  },
  {
    q: "Are scholarships available?",
    a: "Many universities and governments offer them. We check which ones match your profile and help you apply on time.",
  },
  {
    q: "What if my visa is refused?",
    a: "We review the refusal reason with you, fix the gaps in your file and guide you on reapplying or choosing another destination.",
  },
  {
    q: "Can I work while I study?",
    a: "Most destinations allow part-time work during studies, with weekly hour limits. The rules differ by country, so we explain them during counseling.",
  },
];