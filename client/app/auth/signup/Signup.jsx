'use client';
import { useState } from 'react';
import api from '@/services/axios';
import Link from 'next/link';


export default function SignupPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: undefined, password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/user/signup', formData);
            alert("Signup success");
        } catch (err) {
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-navy mb-6">
                    Sign Up
                </h2>
                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="block w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="block w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                        Sign Up
                    </button>
                </form>
                <div className='text-center py-2 my-2'>
                    <Link href="signin" className="px-4 py-2 hover:bg-gray-700 text-center rounded">Go to Signin</Link>
                </div>

            </div>
        </div>

    );
}
