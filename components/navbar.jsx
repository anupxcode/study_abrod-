'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/mock-data'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/#process' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/60 bg-white/90 px-4 py-3 shadow-[0_10px_40px_rgba(11,31,68,0.08)] backdrop-blur-xl sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-xl bg-[#125BC9] text-sm font-bold text-white shadow-[0_6px_15px_rgba(18,91,201,0.3)]">GP</span>
          <span className="font-heading text-[15px] font-bold tracking-tight text-[#0B1F44]">GlobalPath <span className="text-[#125BC9]">Study</span></span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} className={`group relative py-2 text-[13px] font-medium ${index === 0 ? 'text-[#125BC9]' : 'text-[#53627a]'} transition-colors hover:text-[#125BC9]`}>
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-[#F5B301] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden items-center gap-2 rounded-full bg-[#125BC9] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#0B1F44] sm:flex">
          Free consultation <ArrowUpRight className="size-4" />
        </Link>
        <button aria-label={open ? 'Close menu' : 'Open menu'} className="grid size-10 place-items-center rounded-full bg-[#F0F5FD] text-[#0B1F44] lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-3xl border border-white/70 bg-white p-3 shadow-xl lg:hidden" aria-label="Mobile navigation">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-medium text-[#53627a] hover:bg-[#F0F5FD] hover:text-[#125BC9]">{link.label}</Link>)}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-1 rounded-2xl bg-[#125BC9] px-4 py-3 text-center text-sm font-semibold text-white">Free consultation</Link>
        </motion.nav>}
      </AnimatePresence>
    </header>
  )
}
