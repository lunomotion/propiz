import { ChatInterface } from "@/components/chat/Assistant";
import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function ChatPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex flex-col relative selection:bg-[var(--primary)] selection:text-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-[var(--primary)]/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[var(--secondary)]/10 blur-[150px] rounded-full" />
            </div>

            {/* Header */}
            <header className="flex items-center justify-between px-6 py-4 relative z-10">
                <Link href="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                </Link>

                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white hidden md:block">PROPIZ.IO</span>
                </Link>

                <div className="w-24" /> {/* Spacer for centering */}
            </header>

            {/* Content */}
            <div className="flex-1 flex items-center justify-center p-4 relative z-10">
                <ChatInterface />
            </div>
        </main>
    );
}
