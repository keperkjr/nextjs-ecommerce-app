'use client'
import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'


function TopNav() {
    let { data, status } = useSession();

    function logout() {
        signOut({ callbackUrl: "/login"})
    }

    return (
        <nav className="nav shadow p-2 justify-content-between mb-3">
            <Link href="/" className="nav-link">
                🛒 NextJs - Ecommerce
            </Link>
            
            <div className="d-flex">
                {status == 'authenticated' ? 
                (
                    <>
                        <Link href="/dashboard/user" className="nav-link">
                            {data?.user?.name} Dashboard
                        </Link>                     
                        <a className="nav-link pointer" onClick={logout}>
                            Logout
                        </a>                     
                    </>
                ) 
                : 
                (
                    <>
                        <Link href="/login" className="nav-link">
                            Login
                        </Link>   
                        <Link href="/register" className="nav-link">
                            Register
                        </Link>                         
                    </>
                )}
                           
            </div>
        </nav>
    )
}

export default TopNav