"use client";
import { BarChart3, Settings, Bell, Search, Zap, Bot, LifeBuoy, ArrowLeft, Linkedin, Users, Home } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function AutomationsPage() {
    const [showSupport, setShowSupport] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--background)] flex text-white relative overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-[#1e1b2e]/50 hidden lg:flex flex-col p-6 backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-xl">PROPIZ</span>
                </div>

                <nav className="space-y-2 flex-1">
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition-colors">
                        <BarChart3 className="w-5 h-5" /> Dashboard
                    </Link>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-xl font-medium">
                        <Zap className="w-5 h-5" /> Automations
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition-colors">
                        <Settings className="w-5 h-5" /> Settings
                    </a>
                </nav>

                <div className="mt-auto pt-6 border-t border-white/5">
                    <button
                        onClick={() => setShowSupport(true)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] rounded-xl transition-colors mb-4"
                    >
                        <LifeBuoy className="w-5 h-5" /> Support
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                        <div>
                            <p className="text-sm font-medium">Your Agency</p>
                            <p className="text-xs text-gray-500">Active</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Topbar */}
                <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#1e1b2e]/30 backdrop-blur-md">
                    <div className="flex items-center gap-4 text-gray-400">
                        <Link href="/dashboard" className="hover:text-white transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <span className="text-sm">Dashboard</span> / <span className="text-white">Automations</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-400 hover:text-white"><Search className="w-5 h-5" /></button>
                        <button className="p-2 text-gray-400 hover:text-white relative">
                            <Bell className="w-5 h-5" />
                        </button>
                    </div>
                </header>

                {/* Automations Content */}
                <div className="p-8 overflow-y-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">Automations</h1>
                        <p className="text-gray-400">Configure and manage your automated workflows</p>
                    </div>

                    {/* Automation Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                name: "LinkedIn Outreach",
                                desc: "Automated LinkedIn messaging and connection requests",
                                icon: <Linkedin className="w-6 h-6" />,
                                status: "Active",
                                color: "from-blue-500 to-blue-600",
                                stats: "127 messages sent"
                            },
                            {
                                name: "Lead Prospecting",
                                desc: "Find and qualify leads based on your ICP",
                                icon: <Users className="w-6 h-6" />,
                                status: "Active",
                                color: "from-green-500 to-emerald-600",
                                stats: "42 leads found"
                            },
                            {
                                name: "Property Research",
                                desc: "Automated property data collection and analysis",
                                icon: <Home className="w-6 h-6" />,
                                status: "Active",
                                color: "from-purple-500 to-pink-600",
                                stats: "18 properties analyzed"
                            },
                        ].map((automation, i) => (
                            <button
                                key={i}
                                className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[var(--primary)]/50 transition-all text-left group relative overflow-hidden"
                            >
                                {/* Gradient background on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${automation.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                                <div className="relative z-10">
                                    {/* Icon & Status */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${automation.color} flex items-center justify-center text-white shadow-lg`}>
                                            {automation.icon}
                                        </div>
                                        <span className="px-3 py-1 rounded-full text-xs bg-green-500/10 text-green-400 border border-green-500/20 font-medium">
                                            {automation.status}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{automation.name}</h3>
                                    <p className="text-sm text-gray-400 mb-6">{automation.desc}</p>

                                    {/* Stats */}
                                    <div className="pt-4 border-t border-white/5">
                                        <p className="text-xs text-gray-500">{automation.stats}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Settings Section */}
                    <div className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/5">
                        <h2 className="text-xl font-bold mb-6">Automation Settings</h2>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium mb-1">Daily Message Limit</h3>
                                    <p className="text-sm text-gray-400">Maximum messages sent per day</p>
                                </div>
                                <input
                                    type="number"
                                    defaultValue="50"
                                    className="w-24 bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white text-center"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium mb-1">Auto-Reply</h3>
                                    <p className="text-sm text-gray-400">Automatically respond to incoming messages</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium mb-1">Lead Scoring</h3>
                                    <p className="text-sm text-gray-400">Automatically score and prioritize leads</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Support Chat Modal */}
            {showSupport && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end lg:items-center justify-center z-50 p-4" onClick={() => setShowSupport(false)}>
                    <div className="bg-[#1e1b2e] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="p-4 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                                    <LifeBuoy className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Support</h3>
                                    <p className="text-xs text-green-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setShowSupport(false)} className="text-gray-400 hover:text-white">✕</button>
                        </div>
                        <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                            <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none">
                                <p className="text-sm text-gray-200">👋 Hi! How can we help you today?</p>
                            </div>
                        </div>
                        <div className="p-4 border-t border-white/5">
                            <div className="flex gap-2">
                                <input type="text" placeholder="Type your message..." className="flex-1 bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all" />
                                <button className="px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-glow)] rounded-xl text-sm font-medium transition-all">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
