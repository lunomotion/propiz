"use client";
import { BarChart3, Settings, Bell, Search, Zap, Bot, LifeBuoy, ArrowLeft, Linkedin, Users, Home, LogOut, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AutomationsPage() {
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
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-[var(--surface)] rounded-xl transition-colors">
                        <BarChart3 className="w-5 h-5" /> Dashboard
                    </Link>
                    <Link href="/automations" className="flex items-center gap-3 px-4 py-3 bg-[var(--purple-tint)] text-[var(--primary)] rounded-xl font-medium">
                        <Zap className="w-5 h-5" /> Automations
                    </Link>
                    <Link href="/settings" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-[var(--surface)] rounded-xl transition-colors">
                        <Settings className="w-5 h-5" /> Settings
                    </Link>
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
                        <Link href="/dashboard" className="hover:text-[var(--primary)] transition-colors p-1 rounded-lg hover:bg-gray-100">
                            <ArrowLeft className="w-5 h-5 text-gray-700" />
                        </Link>
                        <span className="text-sm">Dashboard</span> / <span className="text-[var(--foreground)] font-medium">Automations</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-500 hover:text-[var(--primary)]"><Search className="w-5 h-5" /></button>
                        <button className="p-2 text-gray-500 hover:text-[var(--primary)] relative">
                            <Bell className="w-5 h-5" />
                        </button>
                    </div>
                </header>

                {/* Automations Content */}
                <div className="p-8 overflow-y-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2 text-[var(--foreground)]">Automations</h1>
                        <p className="text-gray-500">Configure and manage your automated workflows</p>
                    </div>

                    {/* Automation Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                name: "LinkedIn Outreach",
                                desc: "Automated LinkedIn messaging and connection requests",
                                icon: Linkedin,
                                status: "Active",
                                color: "blue",
                                stats: "127 messages sent"
                            },
                            {
                                name: "Lead Prospecting",
                                desc: "Find and qualify leads based on your ICP",
                                icon: Users,
                                status: "Active",
                                color: "green",
                                stats: "42 leads found"
                            },
                            {
                                name: "Property Research",
                                desc: "Automated property data collection and analysis",
                                icon: Home,
                                status: "Active",
                                color: "purple",
                                stats: "18 properties analyzed"
                            },
                        ].map((automation, i) => (
                            <button
                                key={i}
                                className="p-8 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-lg hover:-translate-y-1 transition-all text-left group relative overflow-hidden"
                            >
                                <div className="relative z-10">
                                    {/* Icon & Status */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={cn(
                                            "w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg",
                                            automation.color === "blue" && "bg-gradient-to-br from-blue-500 to-blue-600",
                                            automation.color === "green" && "bg-gradient-to-br from-green-500 to-emerald-600",
                                            automation.color === "purple" && "bg-gradient-to-br from-purple-500 to-pink-600",
                                        )}>
                                            <automation.icon className="w-7 h-7" />
                                        </div>
                                        <span className="px-3 py-1 rounded-full text-xs bg-green-50 text-green-600 border border-green-200 font-medium flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            {automation.status}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-2 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">{automation.name}</h3>
                                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">{automation.desc}</p>

                                    {/* Stats */}
                                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{automation.stats}</span>
                                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </button>
                        ))}
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
