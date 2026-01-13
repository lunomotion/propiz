"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Building2, MapPin, User, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type FormData = {
    name: string;
    agency: string;
    targetArea: string;
    budgetMin: string;
    budgetMax: string;
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
        agency: "",
        targetArea: "",
        budgetMin: "",
        budgetMax: "",
        tone: "Professional",
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
                                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-[var(--background)]",
                                    isActive ? "border-[var(--primary)] text-[var(--primary)]" : "border-white/20 text-gray-500",
                                    isCurrent && "bg-[var(--primary)] text-white shadow-[0_0_20px_var(--primary)] ring-4 ring-[var(--primary)]/20"
                                )}
                            >
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
            <div className="bg-[#1e1b2e] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 blur-[80px] rounded-full pointer-events-none" />

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
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => update("name", e.target.value)}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
                                        placeholder="e.g. Sarah Connor"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Agency Name</label>
                                    <input
                                        type="text"
                                        value={data.agency}
                                        onChange={(e) => update("agency", e.target.value)}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
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
                                <h2 className="text-2xl font-bold mb-2">Define your market</h2>
                                <p className="text-gray-400">Where are you looking for leads?</p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Target Area / Neighborhood</label>
                                    <input
                                        type="text"
                                        value={data.targetArea}
                                        onChange={(e) => update("targetArea", e.target.value)}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
                                        placeholder="e.g. Downtown Dubai"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Min Budget</label>
                                        <input
                                            type="text"
                                            value={data.budgetMin}
                                            onChange={(e) => update("budgetMin", e.target.value)}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white"
                                            placeholder="$500k"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Max Budget</label>
                                        <input
                                            type="text"
                                            value={data.budgetMax}
                                            onChange={(e) => update("budgetMax", e.target.value)}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white"
                                            placeholder="$5M"
                                        />
                                    </div>
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

                            <div className="grid gap-3">
                                {["Professional & Formal", "Friendly & Casual", "Luxury & Sophisticated"].map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => update("tone", t)}
                                        className={cn(
                                            "w-full text-left px-5 py-4 rounded-xl border transition-all flex items-center justify-between",
                                            data.tone === t
                                                ? "bg-[var(--primary)]/10 border-[var(--primary)] text-white"
                                                : "bg-black/20 border-white/10 text-gray-400 hover:bg-white/5"
                                        )}
                                    >
                                        <span className="font-medium">{t}</span>
                                        {data.tone === t && <Check className="w-5 h-5 text-[var(--primary)]" />}
                                    </button>
                                ))}
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
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-10 h-10 text-green-500" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">You're all set!</h2>
                            <p className="text-gray-400 mb-8 max-w-md mx-auto">
                                Propiz is now configured for <strong>{data.agency || "your agency"}</strong> targeting <strong>{data.targetArea || "your area"}</strong>.
                            </p>

                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left mb-8 text-sm text-gray-300">
                                <p className="font-mono">API Key generated: pk_live_59...</p>
                                <p className="font-mono mt-2">Webhook URL: https://api.propiz.io/wh/...</p>
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
        </div>
    );
}
