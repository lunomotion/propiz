import { Share2, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';

const features = [
    {
        icon: <Share2 className="w-6 h-6" />,
        title: "Centralized Lead Collection",
        description: "Capture leads from WhatsApp, Portals, and Social Media automatically into one streamlined dashboard.",
        color: "from-blue-500 to-cyan-400"
    },
    {
        icon: <MessageSquare className="w-6 h-6" />,
        title: "AI Smart Qualification",
        description: "Our AI engages instantly, asking the right questions to qualify budget, location, and urgency.",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Automated Follow-ups",
        description: "Never lose a lead. The system nurtures cold leads and alerts you when they become hot.",
        color: "from-orange-500 to-amber-500"
    }
];

export function Features() {
    return (
        <section className="py-24 relative overflow-hidden" id="features">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Optimized Process. <br /> <span className="text-gradient">Maximum Results.</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Stop wasting time on data entry. Let Propiz handle the busy work while you close deals.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-[1px] mb-6`}>
                                <div className="w-full h-full rounded-2xl bg-[#0f0518] flex items-center justify-center text-white">
                                    {feature.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>

                            <div className="flex items-center text-sm font-medium text-[var(--primary-glow)] group-hover:text-white transition-colors cursor-pointer">
                                Learn more <ArrowUpRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
