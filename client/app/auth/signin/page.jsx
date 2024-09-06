'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/services/axios';
import { saveToken } from '@/services/auth';
import Link from 'next/link';

export default function SignupPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await api.post('/user/signin', formData);
            saveToken(response.data.token);
            alert("Signin success");
            router.push('/');
        } catch (err) {
            setError(err.response?.data?.error || 'Signin failed');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-navy mb-6">Sign In</h2>
                <form onSubmit={handleSignup} className="space-y-4">
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
                    {error && <p className="text-red-500">{error.message}</p>}
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                        Sign In
                    </button>
                </form>
                <div className='text-center py-2 my-2'>
                    <Link href="signup" className="px-4 py-2 hover:bg-gray-700 rounded">Go to Signup</Link>
                </div>
            </div>
        </div>

    );
}
