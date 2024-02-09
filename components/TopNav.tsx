import React from 'react'
import Link from 'next/link'

function TopNav() {
    return (
        <nav className="nav shadow p-2 justify-content-between mb-3">
            <Link href="/" className="nav-link">
                🛒 NextJs - Ecommerce
            </Link>
            
            <div className="d-flex">
                <Link href="/login" className="nav-link">
                    Login
                </Link>   
                <Link href="/register" className="nav-link">
                    Register
                </Link>                              
            </div>
        </nav>
    )
}

export default TopNav