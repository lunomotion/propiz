"use client";
import { BarChart3, Settings, Bell, Search, FileText, Zap, Bot, LifeBuoy } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
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
                    <a href="#" className="flex items-center gap-3 px-4 py-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-xl font-medium">
                        <BarChart3 className="w-5 h-5" /> Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition-colors">
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
                        <span className="text-sm">Dashboard</span> / <span className="text-white">Overview</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-400 hover:text-white"><Search className="w-5 h-5" /></button>
                        <button className="p-2 text-gray-400 hover:text-white relative">
                            <Bell className="w-5 h-5" />
                        </button>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-8 overflow-y-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
                            <p className="text-gray-400 text-sm">Manage your automations and track activity</p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {[
                            { label: "Active Automations", val: "3", icon: Zap, color: "text-blue-400" },
                            { label: "Tasks Completed", val: "127", icon: BarChart3, color: "text-green-400" },
                            { label: "This Month", val: "48", icon: FileText, color: "text-purple-400" },
                        ].map((s, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`w-10 h-10 rounded-xl bg-${s.color.split('-')[1]}-500/10 flex items-center justify-center`}>
                                        <s.icon className={`w-5 h-5 ${s.color}`} />
                                    </div>
                                    <p className="text-gray-400 text-sm">{s.label}</p>
                                </div>
                                <span className="text-3xl font-bold">{s.val}</span>
                            </div>
                        ))}
                    </div>

                    {/* Automations Grid */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Your Automations</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    name: "Contract Transformer",
                                    desc: "Transform proposals into contracts",
                                    icon: "📄",
                                    status: "Active",
                                    uses: 42
                                },
                                {
                                    name: "Email Automation",
                                    desc: "Automated email campaigns",
                                    icon: "✉️",
                                    status: "Active",
                                    uses: 67
                                },
                                {
                                    name: "Lead Enrichment",
                                    desc: "Auto-enrich lead data",
                                    icon: "🎯",
                                    status: "Active",
                                    uses: 18
                                },
                            ].map((automation, i) => (
                                <button
                                    key={i}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[var(--primary)]/50 transition-all text-left group"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="text-3xl">{automation.icon}</div>
                                        <span className="px-2 py-1 rounded-full text-xs bg-green-500/10 text-green-400 border border-green-500/20">
                                            {automation.status}
                                        </span>
                                    </div>
                                    <h3 className="font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{automation.name}</h3>
                                    <p className="text-sm text-gray-400 mb-4">{automation.desc}</p>
                                    <div className="pt-4 border-t border-white/5 text-xs text-gray-500">
                                        {automation.uses} uses this month
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                        <h3 className="font-bold mb-6">Recent Activity</h3>
                        <div className="space-y-4">
                            {[
                                { action: "Contract generated", detail: "client_proposal_v2.pdf → contract.docx", time: "5m ago" },
                                { action: "Email sent", detail: "Welcome sequence → john@example.com", time: "12m ago" },
                                { action: "Lead enriched", detail: "Sarah J. → +15 data points", time: "1h ago" },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start pb-4 border-b border-white/5 last:border-0">
                                    <div className="w-8 h-8 rounded-full bg-[var(--primary)]/20 flex items-center justify-center shrink-0">
                                        <Zap className="w-4 h-4 text-[var(--primary)]" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{item.action}</p>
                                        <p className="text-xs text-gray-400 mt-1">{item.detail}</p>
                                    </div>
                                    <span className="text-xs text-gray-500">{item.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Support Chat Modal */}
            {showSupport && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end lg:items-center justify-center z-50 p-4" onClick={() => setShowSupport(false)}>
                    <div className="bg-[#1e1b2e] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        {/* Chat Header */}
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
                            <button onClick={() => setShowSupport(false)} className="text-gray-400 hover:text-white">
                                ✕
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                            <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none">
                                <p className="text-sm text-gray-200">👋 Hi! How can we help you today?</p>
                            </div>
                        </div>

                        {/* Chat Input */}
                        <div className="p-4 border-t border-white/5">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    className="flex-1 bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
                                />
                                <button className="px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-glow)] rounded-xl text-sm font-medium transition-all">
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
