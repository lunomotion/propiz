import { OnboardingWizard } from "@/components/onboarding/Wizard";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function OnboardingPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex flex-col relative selection:bg-[var(--primary)] selection:text-white">
            {/* Navbar Minimal */}
            <header className="absolute top-0 left-0 w-full p-6 flex justify-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">PROPIZ.IO</span>
                </Link>
            </header>

            <div className="flex-1 flex items-center justify-center relative p-6">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 inset-x-0 h-[500px] bg-[var(--primary)]/20 blur-[120px] rounded-full" />
                </div>

                <div className="relative z-10 w-full">
                    <OnboardingWizard />
                </div>
            </div>
        </main>
    );
}
