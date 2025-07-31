"use client";

import Link from 'next/link'
import { useState } from 'react'

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          color: 'inherit'
        }}
        className="mobile-toggle"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div style={{
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        gap: '1rem',
        position: 'absolute',
        top: '100%',
        left: '0',
        right: '0',
        backgroundColor: 'inherit',
        padding: '1rem',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        zIndex: 999
      }} className="mobile-menu">
        <Link href="/home" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}

export default HamburgerMenu