"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Paperclip, MoreVertical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Message = {
    id: string;
    role: "bot" | "user";
    content: string;
    timestamp: Date;
};

const INITIAL_MESSAGE: Message = {
    id: "1",
    role: "bot",
    content: "Hi there! I'm Linda, your Propiz assistant. I can help you qualify leads, schedule viewings, or answer questions about your listings. How can I help you today?",
    timestamp: new Date(),
};

export function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "bot",
                content: "I've received your message. Since I'm currently in demo mode, I can't process live data yet, but I'm ready to be connected to your n8n workflows!",
                timestamp: new Date(),
            };
            setIsTyping(false);
            setMessages((prev) => [...prev, botMsg]);
        }, 1500);
    };

    return (
        <div className="flex h-[calc(100vh-theme(spacing.20))] max-h-[800px] w-full max-w-5xl mx-auto bg-[#1e1b2e] rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex-col md:flex-row">
            {/* Sidebar (History) */}
            <div className="w-full md:w-80 bg-black/20 border-r border-white/5 p-4 hidden md:flex flex-col">
                <button className="flex items-center gap-2 w-full px-4 py-3 bg-[var(--primary)] hover:bg-[var(--primary-glow)] text-white rounded-xl font-medium transition-all mb-6">
                    <Sparkles className="w-4 h-4" /> New Chat
                </button>

                <div className="space-y-2 overflow-y-auto flex-1">
                    <p className="text-xs font-medium text-gray-500 mb-2 px-2">Today</p>
                    <div className="p-3 rounded-lg bg-white/5 text-sm text-gray-300 cursor-pointer hover:bg-white/10 transition-colors">
                        Lead Qualification: #L-291
                    </div>
                    <div className="p-3 rounded-lg text-sm text-gray-400 cursor-pointer hover:bg-white/5 transition-colors">
                        Drafting Downtown Offer
                    </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold">
                        AS
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-medium">Agent Smith</p>
                        <p className="text-xs text-green-400">Online</p>
                    </div>
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col relative bg-[#151221]">
                {/* Header */}
                <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#1e1b2e]/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-[2px]">
                                <div className="w-full h-full rounded-full bg-[#1e1b2e] flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#1e1b2e] rounded-full"></span>
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Linda</h3>
                            <p className="text-xs text-gray-400">AI Real Estate Assistant</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-white">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6" ref={scrollRef}>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={cn("flex gap-4 max-w-2xl", msg.role === "user" ? "ml-auto flex-row-reverse" : "")}
                        >
                            <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                                msg.role === "bot" ? "bg-[var(--primary)]/20 text-[var(--primary)]" : "bg-gray-700 text-gray-300"
                            )}>
                                {msg.role === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                            </div>

                            <div className={cn(
                                "p-4 rounded-2xl text-sm leading-relaxed",
                                msg.role === "bot" ? "bg-[#1e1b2e] border border-white/5 text-gray-200" : "bg-[var(--primary)] text-white"
                            )}>
                                {msg.content}
                            </div>
                        </motion.div>
                    ))}

                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-4 max-w-2xl"
                        >
                            <div className="w-8 h-8 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] flex items-center justify-center shrink-0">
                                <Bot className="w-4 h-4" />
                            </div>
                            <div className="bg-[#1e1b2e] border border-white/5 px-4 py-3 rounded-2xl flex gap-1 items-center">
                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Input */}
                <div className="p-4 bg-[#1e1b2e] border-t border-white/5">
                    <div className="relative max-w-4xl mx-auto flex items-center gap-2">
                        <button className="p-3 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition-colors">
                            <Paperclip className="w-5 h-5" />
                        </button>
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Ask Linda anything..."
                                className="w-full bg-[#151221] border border-white/10 rounded-full pl-5 pr-12 py-3.5 text-white focus:outline-none focus:border-[var(--primary)] transition-all placeholder:text-gray-600"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--primary-glow)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <p className="text-center text-[10px] text-gray-600 mt-2">Propiz AI may produce inaccurate information about people, places, or facts.</p>
                </div>
            </div>
        </div>
    );
}
