"use client"
import React from 'react'
import { useState } from 'react'

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: Event) {
        e.preventDefault();

        try {
            setLoading(true);

        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false);
        }
    }

    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col-lg-5 text-center shadow bg-light p-5">
                        <h2 className="mb-4">
                            Register
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    )
}