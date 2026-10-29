import Link from 'next/link'
import { Globe2, Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/mock-data'

export function Footer() {
  return (
    <footer className="bg-[#0B1F44] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-10 lg:py-20">
        <div>
          <Link href="/" className="flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-xl bg-[#F5B301] text-sm font-bold text-[#0B1F44]">GP</span><span className="font-heading text-lg font-bold">GlobalPath <span className="text-[#F5B301]">Study</span></span></Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-blue-100/65">Personalized guidance for ambitious students ready to take their next step in the world.</p>
          <div className="mt-6 flex gap-2"><a href="#" aria-label="Instagram" className="grid size-9 place-items-center rounded-full border border-white/15 text-blue-100/70 transition hover:border-[#F5B301] hover:text-[#F5B301]"><Globe2 className="size-4" /></a><a href="#" aria-label="LinkedIn" className="grid size-9 place-items-center rounded-full border border-white/15 text-blue-100/70 transition hover:border-[#F5B301] hover:text-[#F5B301]"><Globe2 className="size-4" /></a><a href={`mailto:${siteConfig.email}`} aria-label="Email us" className="grid size-9 place-items-center rounded-full border border-white/15 text-blue-100/70 transition hover:border-[#F5B301] hover:text-[#F5B301]"><Mail className="size-4" /></a></div>
        </div>
        <FooterColumn title="Explore" links={['Destinations', 'Our services', 'Our process', 'Study guides']} />
        <FooterColumn title="Company" links={['About GlobalPath', 'Student stories', 'Blog', 'Contact us']} />
        <div><h3 className="font-heading text-sm font-semibold text-white">Get in touch</h3><div className="mt-5 flex flex-col gap-4 text-sm text-blue-100/65"><p className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-[#F5B301]" /> 88 Market Street,<br />San Francisco, CA</p><p className="flex gap-3"><Phone className="size-4 shrink-0 text-[#F5B301]" /> {siteConfig.phone}</p><p className="flex gap-3"><Mail className="size-4 shrink-0 text-[#F5B301]" /> {siteConfig.email}</p></div></div>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-blue-100/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><span>© 2025 GlobalPath Study. All rights reserved.</span><div className="flex gap-5"><Link href="#">Privacy policy</Link><Link href="#">Terms of use</Link></div></div></div>
    </footer>
  )
}
function FooterColumn({ title, links }) { return <div><h3 className="font-heading text-sm font-semibold text-white">{title}</h3><div className="mt-5 flex flex-col gap-3 text-sm text-blue-100/65">{links.map((link) => <Link href="#" key={link} className="transition hover:text-[#F5B301]">{link}</Link>)}</div></div> }
