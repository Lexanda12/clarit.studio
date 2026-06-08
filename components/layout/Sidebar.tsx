'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ContactModal from './ContactModal'

const navLinks = [
  { href: '/', label: 'Work' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <aside
        style={{
          width: 'var(--sidebar-width)',
          minWidth: 'var(--sidebar-width)',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundColor: 'var(--bg-sidebar)',
          borderRight: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 0',
          zIndex: 50,
        }}
      >
        {/* Identity */}
        <div style={{ padding: '0 16px 20px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 500 }}>
            Eniola Alex
          </div>
          <a
            href="https://clarit.studio"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '11px',
              color: 'var(--text-secondary)',
              marginTop: '2px',
              display: 'inline-block',
              textDecoration: 'none',
            }}
          >
            Clarit Studio ↗
          </a>
        </div>

        {/* Nav */}
        <nav style={{ padding: '12px 0', flex: 1 }}>
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '6px 16px',
                  fontSize: '13px',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                  backgroundColor: isActive ? 'var(--bg-hover)' : 'transparent',
                  transition: 'color 150ms ease, background-color 150ms ease',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            )
          })}
          <button
            onClick={() => setContactOpen(true)}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              padding: '6px 16px',
              fontSize: '13px',
              color: 'var(--text-muted)',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 150ms ease',
            }}
          >
            Contact
          </button>
        </nav>

        {/* Footer */}
        <div
          style={{
            padding: '16px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <a
            href="mailto:alex@clarit.studio"
            style={{ fontSize: '11px', color: 'var(--text-muted)', textDecoration: 'none' }}
          >
            alex@clarit.studio
          </a>
          <a
            href="https://linkedin.com/in/eniolaalex"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '11px', color: 'var(--text-muted)', textDecoration: 'none' }}
          >
            LinkedIn ↗
          </a>
        </div>
      </aside>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
