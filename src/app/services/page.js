import React from 'react'
import Link from 'next/link'

function page() {
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', margin: '20px' }}>Services</h1>
            <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
                <Link href="/services/web-development">
                    Web Development
                </Link>
                <Link href="/services/seo">
                    SEO
                </Link>
                <Link href="/services/consulting">
                    Consulting
                </Link>
            </div>
        </div>
    )
}

export default page
