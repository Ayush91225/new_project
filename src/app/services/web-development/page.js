import React from 'react'
import Link from 'next/link'

function WebDevelopment() {
  return (
    <div style={{padding: '20px'}}>
      <h1 style={{textAlign: 'center', margin: '20px'}}>Web Development Services</h1>
      <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
        <Link href="/services/web-development" >
          MERN Stack
        </Link>
        <Link href="/services/web-development" >
          MEAN Stack
        </Link>
        <Link href="/services/web-development">
          .NET Development
        </Link>
      </div>
    </div>
  )
}

export default WebDevelopment