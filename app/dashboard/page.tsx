"use client";
import { BarChart3, Settings, Bell, Search, FileText, Zap, Bot, LifeBuoy, ArrowRight, LogOut } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
    const [showSupport, setShowSupport] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--background)] flex text-[var(--foreground)] relative overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 border-r border-[var(--border)] bg-white hidden lg:flex flex-col p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-xl text-[var(--foreground)]">PROPIZ</span>
                </div>

                <nav className="space-y-2 flex-1">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 bg-[var(--purple-tint)] text-[var(--primary)] rounded-xl font-medium">
                        <BarChart3 className="w-5 h-5" /> Dashboard
                    </a>
                    <Link href="/automations" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-[var(--surface)] rounded-xl transition-colors">
                        <Zap className="w-5 h-5" /> Automations
                    </Link>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-[var(--surface)] rounded-xl transition-colors">
                        <Settings className="w-5 h-5" /> Settings
                    </a>
                </nav>

                <div className="mt-auto pt-6 border-t border-[var(--border)] space-y-2">
                    <button
                        onClick={() => setShowSupport(true)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-[var(--purple-tint)] hover:text-[var(--primary)] rounded-xl transition-colors"
                    >
                        <LifeBuoy className="w-5 h-5" /> Support
                    </button>
                    <Link
                        href="/"
                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
                    >
                        <LogOut className="w-5 h-5" /> Log Out
                    </Link>
                    <div className="flex items-center gap-3 pt-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                        <div>
                            <p className="text-sm font-medium text-[var(--foreground)]">Your Agency</p>
                            <p className="text-xs text-gray-500">Active</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-[var(--surface)]">
                {/* Topbar */}
                <header className="h-16 border-b border-[var(--border)] flex items-center justify-between px-8 bg-white">
                    <div className="flex items-center gap-4 text-gray-500">
                        <span className="text-sm">Dashboard</span> / <span className="text-[var(--foreground)] font-medium">Overview</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-500 hover:text-[var(--primary)]"><Search className="w-5 h-5" /></button>
                        <button className="p-2 text-gray-500 hover:text-[var(--primary)] relative">
                            <Bell className="w-5 h-5" />
                        </button>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-8 overflow-y-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-2xl font-bold mb-1 text-[var(--foreground)]">Dashboard</h1>
                            <p className="text-gray-500 text-sm">Manage your automations and track activity</p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {[
                            { label: "Messages Sent", val: "127", icon: Zap, color: "blue" },
                            { label: "Messages Opened", val: "89", icon: BarChart3, color: "green" },
                            { label: "Messages Replied", val: "34", icon: FileText, color: "purple" },
                        ].map((s, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white border border-[var(--border)] shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`w-10 h-10 rounded-xl bg-${s.color}-100 flex items-center justify-center`}>
                                        <s.icon className={`w-5 h-5 text-${s.color}-600`} />
                                    </div>
                                    <p className="text-gray-600 text-sm">{s.label}</p>
                                </div>
                                <span className="text-3xl font-bold text-[var(--foreground)]">{s.val}</span>
                            </div>
                        ))}
                    </div>

                    {/* Automations Grid */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-[var(--foreground)]">Your Automations</h2>
                            <Link href="/automations" className="text-[var(--primary)] hover:text-[var(--primary-glow)] text-sm font-medium flex items-center gap-2">
                                View All <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    name: "Lead Prospecting",
                                    desc: "Find and qualify leads based on your ICP",
                                    icon: "🎯",
                                    status: "Active",
                                    uses: 42
                                },
                                {
                                    name: "Property Research",
                                    desc: "Automated property data collection and analysis",
                                    icon: "🏠",
                                    status: "Active",
                                    uses: 18
                                },
                            ].map((automation, i) => (
                                <Link
                                    key={i}
                                    href="/automations"
                                    className="p-6 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-md transition-all text-left group"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="text-3xl">{automation.icon}</div>
                                        <span className="px-2 py-1 rounded-full text-xs bg-green-50 text-green-600 border border-green-200">
                                            {automation.status}
                                        </span>
                                    </div>
                                    <h3 className="font-bold mb-2 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">{automation.name}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{automation.desc}</p>
                                    <div className="pt-4 border-t border-[var(--border)] text-xs text-gray-500">
                                        {automation.uses} uses this month
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="p-6 rounded-2xl bg-white border border-[var(--border)] shadow-sm">
                        <h3 className="font-bold mb-6 text-[var(--foreground)]">Recent Activity</h3>
                        <div className="space-y-4">
                            {[
                                { action: "2 new leads", detail: "High-value prospects added this week", time: "Today", icon: "🎯" },
                                { action: "5 properties researched", detail: "Market analysis completed", time: "Yesterday", icon: "🏠" },
                                { action: "12 LinkedIn connections", detail: "New outreach targets identified", time: "2d ago", icon: "💼" },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start pb-4 border-b border-[var(--border)] last:border-0">
                                    <div className="w-8 h-8 rounded-full bg-[var(--purple-tint)] flex items-center justify-center shrink-0 text-lg">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-[var(--foreground)]">{item.action}</p>
                                        <p className="text-xs text-gray-500 mt-1">{item.detail}</p>
                                    </div>
                                    <span className="text-xs text-gray-400">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Support Chat Modal */}
            {showSupport && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-end lg:items-center justify-center z-50 p-4" onClick={() => setShowSupport(false)}>
                    <div className="bg-white border border-[var(--border)] rounded-2xl w-full max-w-md shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        {/* Chat Header */}
                        <div className="p-4 border-b border-[var(--border)] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                                    <LifeBuoy className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[var(--foreground)]">Support</h3>
                                    <p className="text-xs text-green-600 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setShowSupport(false)} className="text-gray-400 hover:text-gray-600">
                                ✕
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="p-4 space-y-4 max-h-96 overflow-y-auto bg-[var(--surface)]">
                            <div className="bg-[var(--purple-tint)] p-4 rounded-2xl rounded-tl-none border border-purple-100">
                                <p className="text-sm text-[var(--foreground)]">👋 Hi! How can we help you today?</p>
                            </div>
                        </div>

                        {/* Chat Input */}
                        <div className="p-4 border-t border-[var(--border)]">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-2 text-sm text-[var(--foreground)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
                                />
                                <button className="px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-glow)] text-white rounded-xl text-sm font-medium transition-all">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
