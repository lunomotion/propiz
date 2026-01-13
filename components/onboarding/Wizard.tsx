"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Building2, MapPin, User, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type FormData = {
    name: string;
    email: string;
    agency: string;
    icp: string;
    targetIndustry: string;
    tone: string;
};

const STEPS = [
    { id: 1, title: "Profile", icon: User },
    { id: 2, title: "Target Market", icon: MapPin },
    { id: 3, title: "Brand Voice", icon: MessageCircle },
    { id: 4, title: "Connect", icon: Check },
];

export function OnboardingWizard() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<FormData>({
        name: "",
        email: "",
        agency: "",
        icp: "",
        targetIndustry: "",
        tone: "Professional & Formal",
    });

    const next = () => setStep((s) => Math.min(s + 1, 4));
    const back = () => setStep((s) => Math.max(s - 1, 1));

    const update = (key: keyof FormData, value: string) => {
        setData((d) => ({ ...d, [key]: value }));
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress */}
            <div className="flex items-center justify-between mb-12 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/10 rounded-full -z-10" />
                <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[var(--primary)] rounded-full -z-10 transition-all duration-500"
                    style={{ width: `${((step - 1) / 3) * 100}%` }}
                />

                {STEPS.map((s) => {
                    const isActive = s.id <= step;
                    const isCurrent = s.id === step;
                    return (
                        <div key={s.id} className="flex flex-col items-center gap-2">
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-white",
                                    isActive ? "border-[var(--primary)] text-[var(--primary)]" : "border-gray-200 text-gray-400",
                                    isCurrent && "bg-[var(--primary)] text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] ring-4 ring-[var(--primary)]/10"
                                )}>
                                <s.icon className="w-5 h-5" />
                            </div>
                            <span className={cn("text-xs font-medium transition-colors", isActive ? "text-white" : "text-gray-500")}>
                                {s.title}
                            </span>
                        </div>
                    )
                })}
            </div>

            {/* Form Steps */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 blur-[80px] rounded-full pointer-events-none" />

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold mb-2">Let's set up your profile</h2>
                                <p className="text-gray-400">Tell us about yourself and your agency.</p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => update("name", e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
                                        placeholder="e.g. Sarah Connor"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => update("email", e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
                                        placeholder="you@agency.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Agency Name</label>
                                    <input
                                        type="text"
                                        value={data.agency}
                                        onChange={(e) => update("agency", e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
                                        placeholder="e.g. Luxury Estates"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold mb-2">Define your ICP</h2>
                                <p className="text-gray-400">Who are your ideal customers?</p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Ideal Customer Profile</label>
                                    <textarea
                                        value={data.icp}
                                        onChange={(e) => update("icp", e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all min-h-[120px]"
                                        placeholder="e.g. High-net-worth individuals, luxury property investors, $5M+ budget, business owners..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Industry</label>
                                    <input
                                        type="text"
                                        value={data.targetIndustry}
                                        onChange={(e) => update("targetIndustry", e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
                                        placeholder="e.g. Real Estate, Tech, Finance"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold mb-2">AI Personality</h2>
                                <p className="text-gray-400">How should your assistant sound?</p>
                            </div>

                            <div className="space-y-4">
                                <div className="grid gap-3">
                                    {["Professional & Formal", "Friendly & Casual", "Luxury & Sophisticated"].map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => update("tone", t)}
                                            className={cn(
                                                "w-full text-left px-5 py-4 rounded-xl border transition-all flex items-center justify-between",
                                                data.tone === t
                                                    ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-lg"
                                                    : "bg-white border-gray-200 text-gray-600 hover:border-[var(--primary)] hover:bg-[var(--primary)]/5"
                                            )}
                                        >
                                            <span className="font-medium">{t}</span>
                                            {data.tone === t && <Check className="w-5 h-5 text-white" />}
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Or describe your custom voice</label>
                                    <textarea
                                        value={data.tone.startsWith("Custom:") ? data.tone.replace("Custom: ", "") : ""}
                                        onChange={(e) => update("tone", `Custom: ${e.target.value}`)}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all placeholder:text-gray-400 min-h-[100px]"
                                        placeholder="e.g. Witty, uses emojis, speaks like a local expert..."
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-8"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-10 h-10 text-green-600" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">We're configuring your agent</h2>
                            <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
                                Our system is training your custom AI model based on your profile. <br />
                                <strong className="text-[var(--primary)]">It will be ready to use in 24 hours.</strong>
                            </p>

                            <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--surface)] to-white border border-gray-100 text-left mb-8 shadow-sm">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">System Status</h4>
                                        <p className="text-sm text-gray-500">Configuring n8n workflows & webhooks...</p>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div className="h-full bg-[var(--primary)] w-[60%] animate-[width_2s_ease-in-out_infinite]" style={{ width: '60%' }}></div>
                                </div>
                            </div>

                            <Link href="/dashboard" className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white rounded-full font-bold transition-all">
                                Go to Dashboard <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                {step < 4 && (
                    <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
                        <button
                            onClick={back}
                            disabled={step === 1}
                            className={cn("text-gray-400 hover:text-white transition-colors", step === 1 && "opacity-0 pointer-events-none")}
                        >
                            Back
                        </button>
                        <button
                            onClick={next}
                            className="px-6 py-2 bg-[var(--primary)] hover:bg-[var(--primary-glow)] text-white rounded-lg font-medium transition-all"
                        >
                            Continue
                        </button>
                    </div>
                )}
            </div>
        </div >
    );
}
