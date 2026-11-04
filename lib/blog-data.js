// Mock blog data for GlobalPath Study (no database yet).
// You can keep this file separate, or paste `blogPosts` into /lib/mock-data.js.

export const blogCategories = [
  "Scholarships",
  "Visa Guides",
  "Student Life",
  "Country Guides",
  "IELTS & Exams",
  "Application Tips",
];

const authors = {
  nusrat: { name: "Nusrat Jahan", role: "Senior Counselor", initials: "NJ" },
  tanvir: { name: "Tanvir Ahmed", role: "Visa Specialist", initials: "TA" },
  farhana: { name: "Farhana Rahman", role: "Admissions Advisor", initials: "FR" },
};

export const blogPosts = [
  {
    slug: "how-to-win-a-chevening-scholarship",
    title: "How to Win a Chevening Scholarship: A Practical Guide",
    excerpt:
      "Chevening looks for leaders, not just high grades. Here is how to shape your essays and interview so your story stands out.",
    category: "Scholarships",
    author: authors.nusrat,
    date: "2026-10-28",
    readTime: "7 min read",
    featured: true,
    colors: ["#125BC9", "#0B1F44"],
    content: [
      {
        heading: "Understand what the panel wants",
        body: [
          "Chevening is a UK government scholarship for future leaders. Reviewers read your essays looking for evidence of leadership, influence, networking and a clear plan for after your degree.",
          "A strong GPA helps, but it will not carry a weak application. Concrete examples of what you have changed, led or improved matter far more.",
        ],
      },
      {
        heading: "Build each essay around one real story",
        body: [
          "Pick one specific moment per essay. Describe the situation, what you did, and what changed because of it. Numbers help: people reached, money raised, time saved.",
        ],
        list: [
          "Leadership: a time you guided others without being asked to.",
          "Networking: a connection you built that led to a result.",
          "Study plan: why these three UK courses, and why the UK.",
          "Career plan: where you will be in 2, 5 and 10 years.",
        ],
      },
      {
        heading: "Prepare for the interview early",
        body: [
          "Practice answering out loud. Record yourself and listen for rambling. Keep every answer tied back to the essays you submitted, because the panel will have read them closely.",
        ],
      },
    ],
  },
  {
    slug: "uk-student-visa-checklist",
    title: "UK Student Visa Checklist: Documents You Need Before You Apply",
    excerpt:
      "Missing one document can delay your visa by weeks. Use this checklist to gather everything before you start the application.",
    category: "Visa Guides",
    author: authors.tanvir,
    date: "2026-10-22",
    readTime: "5 min read",
    colors: ["#0B1F44", "#125BC9"],
    content: [
      {
        heading: "Start with your CAS",
        body: [
          "Your university issues a Confirmation of Acceptance for Studies (CAS) after you accept an unconditional offer and meet its conditions. You cannot apply for the visa without it.",
        ],
      },
      {
        heading: "Core documents",
        body: ["Requirements change, so always confirm against the official UK government website before you submit."],
        list: [
          "Valid passport",
          "CAS reference number",
          "Proof of funds held for the required period",
          "Academic certificates used for your offer",
          "English language evidence, if your university asks for it",
          "Tuberculosis test certificate, if required for your country",
        ],
      },
      {
        heading: "Common mistakes to avoid",
        body: [
          "Funds that dip below the required amount during the holding period, bank statements in a different name, and name spellings that do not match the passport are the three problems we see most often.",
        ],
      },
    ],
  },
  {
    slug: "living-costs-in-germany-for-students",
    title: "Living Costs in Germany: What Students Really Spend",
    excerpt:
      "Tuition can be low or free, but rent, insurance and daily costs add up. Here is a realistic monthly breakdown.",
    category: "Country Guides",
    author: authors.farhana,
    date: "2026-10-18",
    readTime: "6 min read",
    colors: ["#F5B301", "#0B1F44"],
    content: [
      {
        heading: "Rent is your biggest cost",
        body: [
          "Student dormitories are the cheapest option but have waiting lists, so apply as soon as you have an admission letter. Shared flats in big cities like Munich or Frankfurt cost noticeably more than in smaller university towns.",
        ],
      },
      {
        heading: "Typical monthly spending",
        body: ["These are rough ranges. Your city and lifestyle will change them."],
        list: [
          "Rent: the largest share of your budget",
          "Health insurance: mandatory for all students",
          "Food and groceries: cooking at home keeps this low",
          "Transport: many universities include a semester ticket",
          "Phone, internet and study materials",
        ],
      },
      {
        heading: "Proof of funds",
        body: [
          "Most visa applicants must show funds, often through a blocked account. The required amount is updated from time to time, so check the current figure on the official German mission website.",
        ],
      },
    ],
  },
  {
    slug: "writing-a-strong-statement-of-purpose",
    title: "Writing a Strong Statement of Purpose (SOP) That Gets Read",
    excerpt:
      "Admissions officers read hundreds of SOPs. Learn how to open with substance, show fit, and avoid the usual clichés.",
    category: "Application Tips",
    author: authors.nusrat,
    date: "2026-10-12",
    readTime: "6 min read",
    colors: ["#125BC9", "#EAF2FF"],
    content: [
      {
        heading: "Skip the childhood dream",
        body: [
          "Open with the moment your interest became serious: a project, a problem you could not solve, a class that changed your direction. Start there instead of with general statements about passion.",
        ],
      },
      {
        heading: "Show fit with the program",
        body: [
          "Name specific courses, labs or professors, and explain how they connect to your goals. A generic SOP could be sent to any university. A good one could only be sent to this one.",
        ],
      },
      {
        heading: "Edit ruthlessly",
        body: [
          "Cut every sentence that does not add evidence. Read it aloud, then ask a friend to summarize it in two lines. If their summary is not what you intended, rewrite.",
        ],
      },
    ],
  },
  {
    slug: "ielts-preparation-in-30-days",
    title: "IELTS Preparation: A Realistic 30-Day Study Plan",
    excerpt:
      "Short on time? Focus your month on the skills that move your band score the most, with a weekly structure you can follow.",
    category: "IELTS & Exams",
    author: authors.farhana,
    date: "2026-10-08",
    readTime: "5 min read",
    colors: ["#0B1F44", "#F5B301"],
    content: [
      {
        heading: "Take a diagnostic test first",
        body: [
          "Sit a full practice test in week one under real time limits. Your result shows which section needs the most work, so you do not spend a month on skills you already have.",
        ],
      },
      {
        heading: "A simple weekly structure",
        body: [],
        list: [
          "Week 1: diagnostic test, then fix timing problems",
          "Week 2: Reading and Listening technique",
          "Week 3: Writing Task 1 and 2 with feedback",
          "Week 4: Speaking practice and two full mock tests",
        ],
      },
      {
        heading: "Writing and Speaking need feedback",
        body: [
          "You can self-mark Reading and Listening, but not Writing and Speaking. Find a teacher or study partner who can give honest feedback, or your mistakes will repeat.",
        ],
      },
    ],
  },
  {
    slug: "first-month-as-an-international-student",
    title: "Your First Month Abroad: What Nobody Tells You",
    excerpt:
      "Opening a bank account, finding food you like, and beating homesickness. A survival guide for your first four weeks.",
    category: "Student Life",
    author: authors.farhana,
    date: "2026-10-03",
    readTime: "4 min read",
    colors: ["#125BC9", "#F5B301"],
    content: [
      {
        heading: "Sort the essentials in week one",
        body: [
          "Register with your university, set up a local SIM card, open a bank account and find your nearest grocery store. Doing these early removes most of the stress.",
        ],
      },
      {
        heading: "Build a routine",
        body: [
          "Homesickness is normal and usually peaks in the second or third week. A regular schedule, time outside and a weekly call home help more than waiting for the feeling to pass.",
        ],
      },
      {
        heading: "Join something",
        body: [
          "Student societies are the fastest way to meet people. Pick one connected to a hobby, not just your degree.",
        ],
      },
    ],
  },
  {
    slug: "fully-funded-scholarships-for-bangladeshi-students",
    title: "Fully Funded Scholarships Bangladeshi Students Should Know",
    excerpt:
      "A starting list of well-known scholarship programs, what they cover, and how to prepare your documents early.",
    category: "Scholarships",
    author: authors.nusrat,
    date: "2026-09-27",
    readTime: "8 min read",
    colors: ["#0B1F44", "#125BC9"],
    content: [
      {
        heading: "Where to look",
        body: [
          "Many governments, universities and foundations fund international students. Well-known programs include Chevening (UK), DAAD (Germany), Fulbright (USA), Australia Awards and the Commonwealth scholarships.",
        ],
      },
      {
        heading: "Prepare before the deadline",
        body: ["Most programs ask for the same core documents, so start gathering them months ahead."],
        list: [
          "Transcripts and certificates",
          "Two or three strong recommendation letters",
          "Updated CV",
          "Language test results",
          "A draft personal statement",
        ],
      },
      {
        heading: "Always check official pages",
        body: [
          "Eligibility rules, deadlines and funding change every year. Use this list as a starting point, then confirm everything on each program's official website.",
        ],
      },
    ],
  },
  {
    slug: "studying-in-canada-pgwp-basics",
    title: "Studying in Canada: Work Rights and Life After Graduation",
    excerpt:
      "Understand what you can do alongside your studies and how post-study work options may fit into your plan.",
    category: "Country Guides",
    author: authors.tanvir,
    date: "2026-09-20",
    readTime: "6 min read",
    colors: ["#F5B301", "#125BC9"],
    content: [
      {
        heading: "Working while you study",
        body: [
          "Eligible international students can usually work part-time during term and full-time during scheduled breaks. The exact number of allowed hours is set by the government and has changed before, so verify the current rule.",
        ],
      },
      {
        heading: "Post-study work options",
        body: [
          "Graduates of eligible programs at designated institutions may qualify for a post-graduation work permit. Eligibility depends on your program, institution and the rules at the time you graduate.",
        ],
      },
      {
        heading: "Plan with a counselor",
        body: [
          "Immigration rules shift often. Talk to a counselor before choosing a program if staying and working after graduation is part of your plan.",
        ],
      },
    ],
  },
];

export function getPost(slug) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post, count = 3) {
  const same = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const others = blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...same, ...others].slice(0, count);
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function coverStyle(colors) {
  return { backgroundImage: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` };
}