import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Check, Eye, EyeOff, Star } from 'lucide-react';

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        terms: false
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.terms) {
            navigate('/dashboard');
        } else {
            alert("Please agree to the Terms & Conditions.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row font-sans bg-[#F9FAFB]">
            {/* Left Side - Dark Gradient */}
            <div className="md:w-1/2 p-8 lg:p-16 flex flex-col justify-between bg-gradient-to-br from-[#020617] via-[#020617] to-[#0cc8a8]/20 text-white relative overflow-hidden">
                {/* Decorative glow effect */}
                <div className="absolute bottom-0 right-[-20%] w-[800px] h-[800px] bg-gradient-to-tl from-[#0cc8a8]/30 to-transparent rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <div className="flex items-center space-x-2 mb-16">
                            <div className="w-5 h-5 rounded-full bg-[#0cc8a8]"></div>
                            <span className="text-2xl font-semibold tracking-tight">aps</span>
                        </div>

                        <div className="max-w-md">
                            <h1 className="text-[40px] leading-[1.1] font-semibold mb-10 tracking-tight">
                                Expert level Cybersecurity <br />
                                in <span className="text-[#0cc8a8]">hours</span> not weeks.
                            </h1>

                            <div className="mb-4">
                                <span className="text-sm font-semibold tracking-wide">What's included</span>
                            </div>

                            <div className="space-y-5">
                                <div className="flex items-start">
                                    <Check className="text-[#0cc8a8] mt-1 mr-3 flex-shrink-0" size={18} />
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Effortlessly spider and map targets to uncover hidden security flaws
                                    </p>
                                </div>

                                <div className="flex items-start">
                                    <Check className="text-[#0cc8a8] mt-1 mr-3 flex-shrink-0" size={18} />
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Deliver high-quality, validated findings in hours, not weeks.
                                    </p>
                                </div>

                                <div className="flex items-start">
                                    <Check className="text-[#0cc8a8] mt-1 mr-3 flex-shrink-0" size={18} />
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Generate professional, enterprise-grade security reports automatically.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <div className="flex items-center space-x-1.5 mb-1.5">
                            {/* 5 Trustpilot Stars */}
                            <div className="flex space-x-0.5 mr-2">
                                <div className="bg-[#00b67a] p-1"><Star className="text-white fill-white" size={12} /></div>
                                <div className="bg-[#00b67a] p-1"><Star className="text-white fill-white" size={12} /></div>
                                <div className="bg-[#00b67a] p-1"><Star className="text-white fill-white" size={12} /></div>
                                <div className="bg-[#00b67a] p-1"><Star className="text-white fill-white" size={12} /></div>
                                {/* Half star simulation by split background */}
                                <div className="bg-gradient-to-r from-[#00b67a] from-50% to-[#1e2330] to-50% p-1"><Star className="text-white fill-white" size={12} /></div>
                            </div>
                            <span className="font-semibold text-lg tracking-tight">Trustpilot</span>
                        </div>
                        <div className="text-sm text-gray-400">
                            <span className="text-white font-medium">Rated 4.5/5.0</span> (100k+ reviews)
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="md:w-1/2 flex items-center justify-center p-6 sm:p-10 relative bg-slate-50">
                <div className="w-full max-w-[440px] bg-white p-8 sm:p-10 rounded-[20px] shadow-sm border border-slate-200">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold mb-2 text-gray-900">Sign up</h2>
                        <p className="text-gray-600 text-sm">
                            Already have an account? <Link to="/login" className="text-[#0cc8a8] hover:underline font-medium">Log in</Link>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <input
                                    type="text" name="firstName" required
                                    value={formData.firstName} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 text-sm rounded-xl focus:outline-none focus:border-[#0cc8a8] focus:ring-2 focus:ring-[#0cc8a8] transition-colors placeholder:text-gray-400"
                                    placeholder="First name*"
                                />
                            </div>
                            <div className="w-1/2">
                                <input
                                    type="text" name="lastName" required
                                    value={formData.lastName} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 text-sm rounded-xl focus:outline-none focus:border-[#0cc8a8] focus:ring-2 focus:ring-[#0cc8a8] transition-colors placeholder:text-gray-400"
                                    placeholder="Last name*"
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                type="email" name="email" required
                                value={formData.email} onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border border-gray-200 text-sm rounded-xl focus:outline-none focus:border-[#0cc8a8] focus:ring-1 focus:ring-[#0cc8a8] transition-colors placeholder:text-gray-400"
                                placeholder="Email address*"
                            />
                        </div>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"} name="password" required
                                value={formData.password} onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border border-gray-200 text-sm rounded-xl focus:outline-none focus:border-[#0cc8a8] focus:ring-1 focus:ring-[#0cc8a8] transition-colors placeholder:text-gray-400"
                                placeholder="Password (8+ characters)*"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        <div className="flex items-start pt-2 pb-4">
                            <div className="flex items-center h-5 mt-0.5">
                                <input
                                    type="checkbox" name="terms" required
                                    checked={formData.terms} onChange={handleChange}
                                    className="w-4 h-4 text-[#0cc8a8] focus:ring-[#0cc8a8] border-gray-300 rounded"
                                />
                            </div>
                            <div className="ml-3 text-xs text-gray-600 leading-relaxed">
                                I agree to Aps's <a href="#" className="text-[#0cc8a8] hover:underline">Terms & Conditions</a> and acknowledge the <a href="#" className="text-[#0cc8a8] hover:underline">Privacy Policy</a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#0cc8a8] hover:bg-[#0ba389] text-white font-medium text-sm py-3.5 px-4 rounded-full transition duration-200"
                        >
                            Create account
                        </button>
                    </form>

                    <div className="mt-6 flex justify-center gap-3">
                        <button className="flex-1 flex justify-center items-center py-3 bg-black hover:bg-gray-900 rounded-full transition">
                            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.34-.84 3.73-.78 1.63.15 2.94.86 3.78 2.11-3.2 1.95-2.67 6.13.56 7.42-.71 1.77-1.66 3.32-3.15 3.42zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.33-1.92 4.25-3.74 4.25z" />
                            </svg>
                        </button>
                        <button className="flex-1 flex justify-center items-center py-3 border border-gray-200 hover:bg-gray-50 rounded-full transition">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                        </button>
                        <button className="flex-1 flex justify-center items-center py-3 bg-[#1877F2] hover:bg-[#166fe5] rounded-full transition">
                            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
