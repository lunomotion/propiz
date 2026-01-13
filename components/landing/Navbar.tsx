import Link from "next/link";
import { Sparkles, Menu } from "lucide-react";
// Minimal Button for now to avoid dependency on uncreated file

// Minimal Button for now to avoid dependency on uncreated file
const NavButton = ({ children, className, variant = "primary", ...props }: any) => {
    const baseStyles = "px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-sm";
    const variants = {
        primary: "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white hover:opacity-90 shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)]",
        ghost: "text-gray-300 hover:text-white hover:bg-white/10"
    };
    return (
        <button className={`${baseStyles} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
            {children}
        </button>
    );
}

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-white/5 bg-black/50 backdrop-blur-xl">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                        PROPIZ.IO
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</Link>
                    <Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</Link>
                    <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">Resources</Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm text-gray-300 hover:text-white px-4 py-2">
                        Login
                    </Link>
                    <Link href="/onboarding">
                        <NavButton>Get Started</NavButton>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white">
                    <Menu />
                </button>
            </div>
        </nav>
    );
}
