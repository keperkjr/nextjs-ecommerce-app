"use client"
import React from 'react'
import { useState } from 'react'

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            setLoading(true);

        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false);
        }
    }

    function isFormValid() : boolean {
        return (name?.trim() ?? '') != '' && (email?.trim() ?? '') != '' && (password?.trim() ?? '') != '';
    }

    function isButtonDisabled() : boolean {
        return loading || !isFormValid();
    }

    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col-lg-5 text-center shadow bg-light p-5">
                        <h2 className="mb-4">
                            Register
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <input type="text" 
                                value={name} 
                                onChange={e => setName(e.target.value)} 
                                className='form-control mb-3'
                                placeholder='Name'
                            />
                            <input type="email" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                                className='form-control mb-3'
                                placeholder='Email'
                            />
                            <input type="password" 
                                value={password} 
                                onChange={e => setPassword(e.target.value)} 
                                className='form-control mb-3'
                                placeholder='Password'
                            />     

                            <button className="btn btn-primary btn-raised" disabled={isButtonDisabled()}>                                
                                {loading ? 'Please wait...' : 'Submit'}
                            </button>                                                   
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}