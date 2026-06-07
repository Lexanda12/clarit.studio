'use client'

import { useState } from 'react'

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  if (!open) return null

  async function handleSubmit() {
    if (!name || !email || !message) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        setStatus('sent')
        setTimeout(() => {
          onClose()
          setStatus('idle')
          setName('')
          setEmail('')
          setMessage('')
        }, 1500)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    backgroundColor: 'var(--bg-hover)',
    border: '1px solid var(--border)',
    borderRadius: '4px',
    padding: '10px 12px',
    fontSize: '13px',
    color: 'var(--text-primary)',
    outline: 'none',
    fontFamily: 'var(--font-sans)',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '11px',
    color: 'var(--text-muted)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    marginBottom: '6px',
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(4px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--bg-sidebar)',
          border: '1px solid var(--border)',
          borderRadius: '6px',
          padding: '28px',
          width: '100%',
          maxWidth: '480px',
          margin: '0 16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>Contact</span>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            Close
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={labelStyle}>Name</label>
            <input
              style={inputStyle}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input
              style={inputStyle}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What are you working on?"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={status === 'sending' || status === 'sent'}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-base)',
              border: 'none',
              borderRadius: '4px',
              fontSize: '13px',
              cursor: status === 'sending' ? 'wait' : 'pointer',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
            }}
          >
            {status === 'idle' && 'Send'}
            {status === 'sending' && 'Sending...'}
            {status === 'sent' && 'Sent'}
            {status === 'error' && 'Try again'}
          </button>
        </div>
      </div>
    </div>
  )
}
