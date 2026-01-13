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

          <h2 className="text-2xl font-bold mb-3">Welcome back</h2>
          <p className="text-gray-400 mb-8">Sign in to access your automation dashboard</p>

          {/* Login Form */}
          <div className="bg-[#1e1b2e] border border-white/5 rounded-2xl p-8 shadow-2xl mb-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 text-left">Email</label>
                <input
                  type="email"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
                  placeholder="you@agency.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 text-left">Password</label>
                <input
                  type="password"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-400">
                  <input type="checkbox" className="rounded" />
                  Remember me
                </label>
                <a href="#" className="text-[var(--primary)] hover:underline">Forgot password?</a>
              </div>
            </div>

            <Link href="/dashboard" className="w-full mt-6 px-6 py-3 bg-[var(--primary)] hover:bg-[var(--primary-glow)] text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 group">
              Sign In
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <Link href="/onboarding" className="text-[var(--primary)] hover:underline font-medium">
              Get started
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
