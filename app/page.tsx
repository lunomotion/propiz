"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Bot } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] relative selection:bg-[var(--primary)] selection:text-white flex items-center justify-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--primary)] opacity-20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold">PROPIZ</h1>
          </div>

          <h2 className="text-2xl font-bold mb-3">Configure Your AI Assistant</h2>
          <p className="text-gray-400 mb-8">Set up your automation preferences in just 3 steps</p>

          {/* Main CTA - Get Started */}
          <Link href="/onboarding" className="w-full mb-4 px-8 py-4 bg-[var(--primary)] hover:bg-[var(--primary-glow)] text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[var(--primary)]/20">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Features Preview */}
          <div className="bg-[#1e1b2e] border border-white/5 rounded-2xl p-6 mb-6">
            <p className="text-sm font-medium text-gray-300 mb-4">What we'll configure:</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-6 h-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">✓</div>
                <span>Your ideal customer profile (ICP)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-6 h-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">✓</div>
                <span>Target industry and market</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-6 h-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] shrink-0">✓</div>
                <span>Brand voice and messaging tone</span>
              </div>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/dashboard" className="text-[var(--primary)] hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
