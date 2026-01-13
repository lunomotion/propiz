"use client";
import Link from 'next/link';
import { ArrowRight, Bot, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[var(--primary)] opacity-20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[var(--secondary)] opacity-10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm text-gray-300">AI-Powered Real Estate Assistant</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
                    >
                        No Need to Fight <br />
                        <span className="text-gradient">The Robots.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg"
                    >
                        Let them work for you. Automate your leads, boost your revenue, and reduce your costs with Propiz.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="/onboarding" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden flex items-center justify-center gap-2">
                            <span className="relative z-10">Start Automating</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>

                        <button className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                            <Zap className="w-4 h-4" />
                            See How It Works
                        </button>
                    </motion.div>

                    <div className="mt-12 flex items-center gap-4 text-gray-500 text-sm">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border border-black" />
                            ))}
                        </div>
                        <p>Trusted by 100+ agencies</p>
                    </div>
                </div>

                {/* Visual / Bot Interface */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Mock Chat Interface */}
                    <div className="relative w-full aspect-[4/5] bg-[#1a1625] rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-6 flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-[#1a1625] flex items-center justify-center overflow-hidden">
                                        <Bot className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Linda</h3>
                                    <p className="text-green-400 text-xs flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 space-y-6">
                            <div className="bg-[#2a2438] p-4 rounded-2xl rounded-tl-none max-w-[85%] border border-white/5">
                                <p className="text-gray-200 leading-relaxed">👋 Hi! I'm Linda, your Propiz assistant.</p>
                                <p className="text-gray-200 mt-2">I'm here to help you qualify leads and schedule viewings.</p>
                            </div>

                            <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-4 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-white shadow-lg">
                                <p>I have a new lead asking about the Downtown apartment. Can you handle it?</p>
                            </div>

                            <div className="bg-[#2a2438] p-4 rounded-2xl rounded-tl-none max-w-[85%] border border-white/5">
                                <p className="text-gray-200">Absolutely! I've already engaged them. Here's what we know:</p>
                                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                                    <li className="flex items-center gap-2">💰 Budget: $2.5M - $3M</li>
                                    <li className="flex items-center gap-2">📍 Location: Business Bay</li>
                                    <li className="flex items-center gap-2">🔥 Urgency: High</li>
                                </ul>
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <button className="w-full py-2 rounded-lg bg-[var(--primary)]/20 text-[var(--primary-glow)] font-medium text-sm hover:bg-[var(--primary)]/30 transition-colors">
                                        View Full Report
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="mt-6 pt-4 relative">
                            <div className="h-12 w-full bg-[#2a2438] rounded-full flex items-center px-4 text-gray-500 text-sm">
                                Type a message...
                            </div>
                        </div>
                    </div>

                    {/* Floating Cards */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -left-12 top-1/4 bg-[#1a1625]/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                <span className="text-lg">💰</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400">Revenue Boost</p>
                                <p className="font-bold text-green-400">+24%</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
