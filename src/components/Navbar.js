"use client";

import Link from 'next/link'
import HamburgerMenu from './HamburgerMenu'

function Navbar() {
  return (
    <nav style={{
      padding: '1rem',
      position: 'relative'
    }}>
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }} className="desktop-menu">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/services">Services</Link>
      </div>

      <HamburgerMenu />

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar 