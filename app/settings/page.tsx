"use client";
import { BarChart3, Settings as SettingsIcon, Bell, Search, Zap, Bot, LifeBuoy, LogOut, ArrowRight, Shield, User, BellRing } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SettingsPage() {
    const [messageLimit, setMessageLimit] = useState(50);
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
                    <Link href="/automations" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-[var(--surface)] rounded-xl transition-colors">
                        <Zap className="w-5 h-5" /> Automations
                    </Link>
                    <Link href="/settings" className="flex items-center gap-3 px-4 py-3 bg-[var(--purple-tint)] text-[var(--primary)] rounded-xl font-medium">
                        <SettingsIcon className="w-5 h-5" /> Settings
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
                        <span className="text-sm">Settings</span> / <span className="text-[var(--foreground)] font-medium">General</span>
                    </div>
                </header>

                <div className="p-8 max-w-4xl">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold mb-1 text-[var(--foreground)]">Settings</h1>
                        <p className="text-gray-500 text-sm">Manage your account and automation preferences</p>
                    </div>

                    <div className="space-y-6">
                        {/* Automation Limits */}
                        <div className="bg-white p-6 rounded-2xl border border-[var(--border)] shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg font-bold text-gray-900 mb-1">Automation Limits</h2>
                                    <p className="text-gray-500 text-sm mb-6">Control how many actions your assistant performs daily.</p>

                                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                                        <div>
                                            <label className="block font-medium text-gray-900">Daily Message Limit</label>
                                            <span className="text-xs text-gray-500">Max outbound messages per 24 hours</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="number"
                                                value={messageLimit}
                                                onChange={(e) => setMessageLimit(Number(e.target.value))}
                                                className="w-24 px-3 py-2 bg-white border border-gray-200 rounded-lg text-center font-bold outline-none focus:border-[var(--primary)] text-[var(--foreground)]"
                                            />
                                            <span className="text-sm text-gray-500">msgs/day</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Account */}
                        <div className="bg-white p-6 rounded-2xl border border-[var(--border)] shadow-sm opacity-60">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                                    <User className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg font-bold text-gray-900 mb-1">Account & Profile</h2>
                                    <p className="text-gray-500 text-sm">Manage your personal details and agency info.</p>
                                </div>
                                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">Edit</button>
                            </div>
                        </div>

                        {/* Notifications */}
                        <div className="bg-white p-6 rounded-2xl border border-[var(--border)] shadow-sm opacity-60">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                                    <BellRing className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg font-bold text-gray-900 mb-1">Notifications</h2>
                                    <p className="text-gray-500 text-sm">Choose what updates you want to receive.</p>
                                </div>
                                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">Manage</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reuse Support Modal logic if needed, or keeping it Simple for Settings page */}
        </div>
    );
}
