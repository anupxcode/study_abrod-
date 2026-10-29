export const siteConfig = {
  name: 'GlobalPath Study',
  tagline: 'Your global education journey, guided with confidence.',
  email: 'hello@globalpath.study',
  phone: '+1 (415) 555-0182',
}

export const stats = [
  { value: 4200, suffix: '+', label: 'Students guided' },
  { value: 180, suffix: '+', label: 'Partner universities' },
  { value: 24, suffix: '', label: 'Countries & destinations' },
  { value: 96, suffix: '%', label: 'Visa success rate' },
]

export const studyLevels = [
  { title: "Bachelor's", count: '1,240+ programs', description: 'Build your foundation at a world-class university.', icon: 'GraduationCap' },
  { title: "Master's", count: '2,860+ programs', description: 'Specialize, accelerate, and shape your future.', icon: 'BookOpen' },
  { title: 'PhD', count: '680+ programs', description: 'Turn your research ambition into global impact.', icon: 'FlaskConical' },
]

const baseDestinations = [
  { name: 'United Kingdom', slug: 'uk', flag: '🇬🇧', code: 'UK', tuition: '$18k–$42k', scholarship: 'Up to 50% scholarship', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=85' },
  { name: 'United States', slug: 'usa', flag: '🇺🇸', code: 'USA', tuition: '$22k–$58k', scholarship: 'Merit-based awards', image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=900&q=85' },
  { name: 'Canada', slug: 'canada', flag: '🇨🇦', code: 'CA', tuition: '$16k–$38k', scholarship: 'Affordable study options', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=900&q=85' },
  { name: 'Australia', slug: 'australia', flag: '🇦🇺', code: 'AUS', tuition: '$20k–$45k', scholarship: 'Post-study work rights', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=900&q=85' },
  { name: 'Germany', slug: 'germany', flag: '🇩🇪', code: 'DE', tuition: '$0–$18k', scholarship: 'Low or no tuition fees', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=85' },
  { name: 'Netherlands', slug: 'netherlands', flag: '🇳🇱', code: 'NL', tuition: '$10k–$28k', scholarship: 'English-taught degrees', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=900&q=85' },
  { name: 'Malaysia', slug: 'malaysia', flag: '🇲🇾', code: 'MY', tuition: '$6k–$18k', scholarship: 'Value-focused education', image: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=900&q=85' },
  { name: 'Japan', slug: 'japan', flag: '🇯🇵', code: 'JP', tuition: '$9k–$26k', scholarship: 'Research scholarships', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=85' },
]

// Extra fields used by /destinations (filters + card facts)
const destinationDetails = {
  uk: { tagline: 'Historic universities and one-year master’s degrees.', living: '£1,000 – £1,400 / month', visa: '2-year Graduate Route', levels: ['Bachelor', 'Master', 'PhD'], subjects: ['Business', 'Engineering', 'Law', 'Computer Science'], popular: 'Business' },
  usa: { tagline: 'Flexible degrees and world-leading research.', living: '$1,200 – $2,000 / month', visa: '1–3 years OPT', levels: ['Bachelor', 'Master', 'PhD'], subjects: ['Computer Science', 'Engineering', 'Business', 'Medicine'], popular: 'Computer Science' },
  canada: { tagline: 'Affordable study with clear paths to work and residency.', living: 'CAD 1,000 – 1,500 / month', visa: 'Up to 3-year PGWP', levels: ['Bachelor', 'Master', 'PhD'], subjects: ['Engineering', 'Computer Science', 'Health', 'Business'], popular: 'Engineering' },
  australia: { tagline: 'Top-ranked universities and a strong student community.', living: 'AUD 1,500 – 2,200 / month', visa: '2–4 years Temporary Graduate', levels: ['Bachelor', 'Master', 'PhD'], subjects: ['Health', 'Engineering', 'Business', 'Computer Science'], popular: 'Health' },
  germany: { tagline: 'Low or no tuition at public universities.', living: '€850 – €1,200 / month', visa: '18-month job-search permit', levels: ['Bachelor', 'Master', 'PhD'], subjects: ['Engineering', 'Computer Science', 'Science', 'Business'], popular: 'Engineering' },
  netherlands: { tagline: 'Hundreds of English-taught programs in the heart of Europe.', living: '€900 – €1,300 / month', visa: '1-year orientation visa', levels: ['Bachelor', 'Master', 'PhD'], subjects: ['Business', 'Engineering', 'Science', 'Law'], popular: 'Business' },
  malaysia: { tagline: 'Quality degrees at a fraction of Western costs.', living: 'RM 1,500 – 2,500 / month', visa: 'Up to 12-month graduate pass', levels: ['Bachelor', 'Master', 'PhD'], subjects: ['Business', 'Engineering', 'Computer Science', 'Health'], popular: 'Computer Science' },
  japan: { tagline: 'Cutting-edge technology and generous research funding.', living: '¥80,000 – 130,000 / month', visa: '1-year job-hunting visa', levels: ['Bachelor', 'Master', 'PhD'], subjects: ['Engineering', 'Computer Science', 'Science', 'Medicine'], popular: 'Engineering' },
}

export const destinations = baseDestinations.map((d) => ({ ...d, ...destinationDetails[d.slug] }))

// Filter options for /destinations
export const levels = ['Bachelor', 'Master', 'PhD']
export const subjects = ['Business', 'Computer Science', 'Engineering', 'Health', 'Law', 'Medicine', 'Science']

export const services = [
  { title: 'Free counseling', description: 'One-to-one guidance to turn your aspirations into a clear study plan.', icon: 'MessageCircle' },
  { title: 'IELTS / TOEFL prep', description: 'Practice with focused strategies, expert feedback, and confidence-building sessions.', icon: 'Languages' },
  { title: 'SOP & CV writing', description: 'Tell your story with application documents that sound distinctly like you.', icon: 'FilePenLine' },
  { title: 'Scholarship search', description: 'Find funding opportunities matched to your profile and ambitions.', icon: 'BadgeDollarSign' },
  { title: 'Visa filing', description: 'Prepare a precise, complete application with guidance at every step.', icon: 'ShieldCheck' },
  { title: 'Accommodation help', description: 'Arrive feeling at home with safe, student-friendly housing options.', icon: 'House' },
  { title: 'Pre-departure briefing', description: 'Know what to pack, expect, and do before your flight takes off.', icon: 'PlaneTakeoff' },
  { title: 'Post-arrival support', description: 'A familiar team to turn to as you settle into your new chapter.', icon: 'HeartHandshake' },
]

export const processSteps = [
  { number: '01', title: 'Free counseling', description: 'We listen first, then map your goals, strengths, and study preferences.' },
  { number: '02', title: 'Profile evaluation', description: 'Understand your academic profile and identify your strongest pathways.' },
  { number: '03', title: 'Course & university selection', description: 'Compare destinations and programs that align with your future.' },
  { number: '04', title: 'Application & documents', description: 'Build a compelling application, from SOP to final submission.' },
  { number: '05', title: 'Offer letter & visa', description: 'Navigate decisions, finances, and visa documentation with confidence.' },
  { number: '06', title: 'Travel & settling in', description: 'Prepare for the move and start your new life supported by GlobalPath.' },
]

export const testimonials = [
  { name: 'Aarav Mehta', country: 'India → University of Manchester', quote: 'GlobalPath made a complicated process feel calm and achievable. I always knew what the next step was.', image: 'https://i.pravatar.cc/160?img=12' },
  { name: 'Maya Rodriguez', country: 'Mexico → University of Toronto', quote: 'Their honest advice helped me choose the right course, not just the most famous university.', image: 'https://i.pravatar.cc/160?img=47' },
  { name: 'Noah Williams', country: 'Ghana → TU Munich', quote: 'From my first call to my visa approval, the team treated my dream like it was their own.', image: 'https://i.pravatar.cc/160?img=11' },
]

export const posts = [
  { title: 'The 2025 guide to studying in the UK', category: 'Destinations', date: 'Jun 14, 2025', readTime: '6 min read', excerpt: 'From choosing a city to understanding post-study work options, here is your practical starting point.', image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=900&q=85' },
  { title: 'How to write a standout statement of purpose', category: 'Applications', date: 'Jun 05, 2025', readTime: '5 min read', excerpt: 'A clear structure and an honest point of view can make your application memorable for the right reasons.', image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=85' },
  { title: 'Scholarships worth knowing before you apply', category: 'Funding', date: 'May 28, 2025', readTime: '8 min read', excerpt: 'A shortlist of funding routes and the small details that make a big difference to your chances.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85' },
]

export const faqs = [
  { question: 'How early should I start my study abroad journey?', answer: 'We recommend starting 9–12 months before your intended intake. This gives you time for test preparation, thoughtful university selection, documents, and visa planning without rushing.' },
  { question: 'Do you help students with scholarships?', answer: 'Yes. We match your academic profile and destination preferences with relevant university, government, and external scholarship opportunities.' },
  { question: 'Can I apply to more than one country?', answer: 'Absolutely. We can help you create a balanced shortlist across destinations so you have strong options while keeping your applications focused.' },
  { question: 'Is the first counseling session really free?', answer: 'Yes. Your first 30-minute counseling session is complimentary, with no obligation to continue. It is simply a chance to understand your goals and answer your questions.' },
]