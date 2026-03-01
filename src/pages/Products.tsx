import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import {
    GraduationCap,
    Car,
    Heart,
    Brain,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Rocket,
    UtensilsCrossed,
    Building2,
    FolderSearch,
    Briefcase,
    ShoppingCart,
    ScrollText,
    Star,
    Zap,
    Shield,
    Users,
    Globe,
    TrendingUp,
    ExternalLink,
    X,
    Clock,
    Activity,
    Languages,
    Mic2,
    HeartPulse,
    Phone,
} from 'lucide-react';

/* ───────────────────── Product Data ───────────────────── */

const products = [
    {
        id: 'school-management',
        icon: GraduationCap,
        title: 'School Management',
        tagline: 'Complete Digital Campus Solution',
        badge: 'explore',   // "explore" | "inprogress"
        badgeLabel: 'Explore',
        description:
            'A comprehensive school management system that digitizes every aspect of educational administration — from admissions and attendance to examinations, finance, and parent communication. Empower your institution with real-time insights and seamless workflows.',
        features: [
            'Student & Staff Management',
            'Attendance & Timetable',
            'Fee & Finance Module',
            'Examination & Report Cards',
            'Parent & Teacher Communication',
            'Inventory & Library Management',
        ],
        gradient: 'from-blue-600 via-blue-500 to-cyan-400',
        glow: 'shadow-blue-500/30',
        accentColor: 'text-blue-500',
        bgAccent: 'bg-blue-500/10',
        borderAccent: 'border-blue-500/30',
        stats: [
            { label: 'Modules', value: '25+' },
            { label: 'Schools', value: '50+' },
            { label: 'Uptime', value: '99.9%' },
        ],
        exploreLink: 'https://ourschoolerp.com/',
        brief: 'Our School Management System is a full-featured platform built to digitize every operation of a modern educational institution. It handles everything from student enrollment and attendance automation to exam management, fee collection, and real-time parent-teacher communication — all under one unified dashboard.',
    },
    {
        id: 'jagopro',
        icon: Car,
        title: 'JagoPro',
        tagline: 'Smart Bike & Cab Ride Platform',
        badge: 'inprogress',
        badgeLabel: 'In Progress',
        description:
            'A next-generation ride-hailing platform for bikes and cabs — designed to make daily commute fast, affordable, and reliable. JagoPro connects riders with nearby drivers in seconds, offering real-time GPS tracking, flexible fare options, and a seamless booking experience like Rapido and Ola.',
        features: [
            'Instant Bike & Cab Booking',
            'Real-time GPS Tracking',
            'Flexible Fare & Surge Pricing',
            'Driver & Rider Dashboards',
            'In-app Payments & Wallet',
            'Ratings & Safety Features',
        ],
        gradient: 'from-purple-600 via-violet-500 to-pink-400',
        glow: 'shadow-purple-500/30',
        accentColor: 'text-purple-500',
        bgAccent: 'bg-purple-500/10',
        borderAccent: 'border-purple-500/30',
        stats: [
            { label: 'Rides/Day', value: '500+' },
            { label: 'Drivers', value: '200+' },
            { label: 'Cities', value: '5+' },
        ],
        exploreLink: null,
        brief: null,
    },
    {
        id: 'raksha-assist',
        icon: HeartPulse,
        title: 'Raksha Assist',
        tagline: 'Comprehensive Health Insurance Platform',
        badge: 'inprogress',
        badgeLabel: 'In Progress',
        description:
            'A cutting-edge health insurance platform that streamlines policy management, claims processing, and customer assistance — making healthcare coverage transparent, accessible, and seamless for every user.',
        features: [
            'Policy Management',
            'Claims Processing',
            'Customer Portal',
            'Healthcare Network',
            'Secure Data Vault',
            'Real-time Assistance',
        ],
        gradient: 'from-rose-600 via-rose-500 to-pink-400',
        glow: 'shadow-rose-500/30',
        accentColor: 'text-rose-500',
        bgAccent: 'bg-rose-500/10',
        borderAccent: 'border-rose-500/30',
        stats: [
            { label: 'Policy Types', value: '20+' },
            { label: 'Partners', value: '15+' },
            { label: 'Processing', value: '24/7' },
        ],
        exploreLink: null,
        brief: null,
    },
    {
        id: 'neurotalk',
        icon: Brain,
        title: 'NeuroTalk',
        tagline: 'AI-Powered Real-Time Call Translation',
        badge: 'inprogress',
        badgeLabel: 'In Progress',
        description:
            'Advanced AI communication tool that enables real-time call translation across 22 languages — with voice cloning technology that translates using your own voice, making global conversations feel completely natural.',
        features: [
            '22 Languages Supported',
            'Voice Cloning AI',
            'Real-time Translation',
            'Global Connectivity',
            'Seamless Integration',
            'Privacy-first Design',
        ],
        gradient: 'from-emerald-600 via-teal-500 to-cyan-400',
        glow: 'shadow-emerald-500/30',
        accentColor: 'text-emerald-500',
        bgAccent: 'bg-emerald-500/10',
        borderAccent: 'border-emerald-500/30',
        stats: [
            { label: 'Languages', value: '22+' },
            { label: 'Accuracy', value: '98%' },
            { label: 'Latency', value: '<1s' },
        ],
        exploreLink: null,
        brief: null,
    },
];

const futureProducts = [
    {
        id: 'matrimony',
        icon: Heart,
        title: 'Matrimony App',
        tagline: 'Find Your Perfect Match',
        description:
            'AI-powered matchmaking platform with advanced profile verification, compatibility scoring, and secure communication features.',
        gradient: 'from-rose-500 to-pink-500',
        accentColor: 'text-rose-500',
    },
    {
        id: 'food-delivery',
        icon: UtensilsCrossed,
        title: 'Food Delivery App',
        tagline: 'Delicious Food, Delivered Fast',
        description:
            'End-to-end food delivery solution with real-time tracking, restaurant management, and seamless payment integration.',
        gradient: 'from-orange-500 to-red-500',
        accentColor: 'text-orange-500',
    },
    {
        id: 'real-estate',
        icon: Building2,
        title: 'Real Estate Script',
        tagline: 'Property Marketplace Platform',
        description:
            'Feature-rich property listing and management platform with virtual tours, agent dashboards, and smart search filters.',
        gradient: 'from-sky-500 to-blue-600',
        accentColor: 'text-sky-500',
    },
    {
        id: 'directory',
        icon: FolderSearch,
        title: 'Directory Script',
        tagline: 'Business Directory Solutions',
        description:
            'Local business directory platform with reviews, ratings, map integration, and promotional listing features.',
        gradient: 'from-violet-500 to-purple-600',
        accentColor: 'text-violet-500',
    },
    {
        id: 'job-portal',
        icon: Briefcase,
        title: 'Job Portal',
        tagline: 'Connect Talent with Opportunity',
        description:
            'Modern job portal with AI resume parsing, employer dashboards, applicant tracking, and smart job recommendations.',
        gradient: 'from-indigo-500 to-blue-500',
        accentColor: 'text-indigo-500',
    },
    {
        id: 'ecommerce',
        icon: ShoppingCart,
        title: 'E-commerce Platform',
        tagline: 'Sell Anything, Anywhere',
        description:
            'Scalable e-commerce solution with multi-vendor support, inventory management, payment gateways, and analytics dashboard.',
        gradient: 'from-emerald-500 to-green-600',
        accentColor: 'text-emerald-500',
    },
    {
        id: 'marriage-biodata',
        icon: ScrollText,
        title: 'Marriage Biodata',
        tagline: 'Beautiful Biodata Maker',
        description:
            'Elegant biodata creation tool with premium templates, photo editing, PDF export, and shareable digital biodata.',
        gradient: 'from-pink-500 to-fuchsia-500',
        accentColor: 'text-pink-500',
    },
];

/* ─── Badge Component ─── */
const ProductBadge = ({ badge, badgeLabel }: { badge: string; badgeLabel: string }) => {
    if (badge === 'explore') {
        return (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-green-500/30">
                <ExternalLink className="w-3 h-3" />
                {badgeLabel}
            </div>
        );
    }
    return (
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-amber-500/30">
            <Clock className="w-3 h-3" />
            {badgeLabel}
        </div>
    );
};

/* ─── Explore Modal ─── */
const ExploreModal = ({ product, onClose }: { product: typeof products[0]; onClose: () => void }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/80 backdrop-blur-lg"
        onClick={onClose}
    >
        <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-card/95 backdrop-blur-2xl shadow-2xl"
        >
            {/* Header gradient strip */}
            <div className={`relative h-3 bg-gradient-to-r ${product.gradient}`} />

            <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-secondary/80 hover:bg-secondary border border-border/50 flex items-center justify-center transition-all hover:scale-110 z-10"
            >
                <X className="w-4 h-4 text-muted-foreground" />
            </button>

            <div className="p-8 md:p-10">
                {/* Icon + Title */}
                <div className="flex items-center gap-5 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-xl`}>
                        <product.icon className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{product.title}</h3>
                        <p className={`text-sm font-semibold uppercase tracking-widest ${product.accentColor} mt-1`}>{product.tagline}</p>
                    </div>
                </div>

                {/* Brief */}
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 border-l-4 border-primary/30 pl-4">
                    {product.brief}
                </p>

                {/* Key Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {product.features.map((f) => (
                        <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/40">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${product.gradient}`} />
                            <span className="text-sm font-medium text-foreground">{f}</span>
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                    <Button variant="outline" onClick={onClose} className="rounded-xl px-6">
                        Close
                    </Button>
                    {product.exploreLink && (
                        <a href={product.exploreLink} target="_blank" rel="noopener noreferrer">
                            <Button className={`btn-primary rounded-xl px-8 bg-gradient-to-r ${product.gradient} border-0 text-white shadow-xl group`}>
                                Explore Live
                                <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                            </Button>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    </motion.div>
);

/* ─── Animated Description ─── */
const AnimatedDesc = ({ text, className }: { text: string; className?: string }) => (
    <motion.div className={`flex flex-wrap gap-x-[0.3em] gap-y-1 ${className}`}>
        {text.split(' ').map((word, i) => (
            <motion.span
                key={i}
                initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.06 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block"
            >
                {word}
            </motion.span>
        ))}
    </motion.div>
);

/* ─── Premium Product Card ─── */
const ProductCard = ({
    product,
    index,
    isReversed,
}: {
    product: typeof products[0];
    index: number;
    isReversed: boolean;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 70 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:items-center gap-12 lg:gap-20`}
            >
                {/* ══════════════════ VISUAL CARD SIDE ══════════════════ */}
                <div className="w-full lg:w-5/12 relative group">
                    {/* Outer glow aura */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700 rounded-[2rem] blur-2xl`} />

                    <div className={`relative rounded-[2rem] overflow-hidden border ${product.borderAccent} bg-card shadow-2xl ${product.glow} group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition-all duration-700`}>
                        {/* Top accent bar */}
                        <div className={`h-1.5 w-full bg-gradient-to-r ${product.gradient}`} />

                        {/* Card body */}
                        <div className="p-8 md:p-10 relative">
                            {/* Background gradient wash */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700`} />
                            <div className={`absolute -right-20 -top-20 w-56 h-56 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all duration-700`} />
                            <div className={`absolute -left-12 -bottom-12 w-44 h-44 bg-gradient-to-br ${product.gradient} opacity-8 rounded-full blur-3xl group-hover:opacity-15 transition-all duration-700`} />

                            {/* Badge top-right */}
                            <div className="absolute top-6 right-6 z-20">
                                <div onClick={() => product.badge === 'explore' && setShowModal(true)} className={product.badge === 'explore' ? 'cursor-pointer' : ''}>
                                    <ProductBadge badge={product.badge} badgeLabel={product.badgeLabel} />
                                </div>
                            </div>

                            {/* Floating product icon */}
                            <motion.div
                                animate={{ y: [-5, 5, -5], rotate: [0, 2, -2, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="relative z-10 mb-8 flex justify-center"
                            >
                                <div className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-2xl ${product.glow}`}>
                                    <product.icon className="w-12 h-12 text-white drop-shadow-lg" />
                                    {/* Inner shine */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 to-transparent" />
                                </div>
                            </motion.div>

                            {/* Stats grid */}
                            <div className="relative z-10 grid grid-cols-3 gap-3">
                                {product.stats.map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.7 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: 0.35 + i * 0.12, type: 'spring', stiffness: 200 }}
                                        className="relative text-center p-3 rounded-2xl overflow-hidden"
                                        style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}
                                    >
                                        <div className={`text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r ${product.gradient} leading-none`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] md:text-xs text-muted-foreground font-semibold mt-1.5 uppercase tracking-wider">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Explore CTA on card (only for explore badge) */}
                            {product.badge === 'explore' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ delay: 0.7 }}
                                    className="relative z-10 mt-6"
                                >
                                    <button
                                        onClick={() => setShowModal(true)}
                                        className={`w-full py-3 rounded-2xl bg-gradient-to-r ${product.gradient} text-white text-sm font-bold tracking-wide flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-lg ${product.glow}`}
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Quick Preview
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>

                {/* ══════════════════ TEXT / CONTENT SIDE ══════════════════ */}
                <div className="w-full lg:w-7/12 space-y-6">
                    {/* Number label */}
                    <motion.div
                        initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-3"
                    >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg ${product.glow}`}>
                            <product.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className={`text-xs font-black uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r ${product.gradient}`}>
                            0{index + 1} // Product
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] tracking-tight"
                    >
                        {product.title}
                    </motion.h3>

                    {/* Tagline */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="flex items-center gap-3"
                    >
                        <div className={`w-8 h-[3px] rounded-full bg-gradient-to-r ${product.gradient}`} />
                        <p className={`text-sm font-bold uppercase tracking-[0.15em] ${product.accentColor}`}>
                            {product.tagline}
                        </p>
                    </motion.div>

                    {/* Description with animation */}
                    <AnimatedDesc text={product.description} className="text-lg text-muted-foreground leading-relaxed" />

                    {/* Feature checklist */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="grid sm:grid-cols-2 gap-3 pt-2"
                    >
                        {product.features.map((feature, i) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -12 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                                className={`flex items-center gap-3 p-3 rounded-xl ${product.bgAccent} border ${product.borderAccent} group/f hover:scale-[1.02] transition-transform`}
                            >
                                <CheckCircle className={`w-4 h-4 shrink-0 ${product.accentColor}`} />
                                <span className="text-sm font-semibold text-foreground">{feature}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-wrap gap-4 pt-2"
                    >
                        {product.badge === 'explore' ? (
                            <>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r ${product.gradient} text-white font-bold text-base shadow-xl ${product.glow} hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 group`}
                                >
                                    Explore
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a href={product.exploreLink!} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className={`rounded-2xl px-8 py-4 h-auto font-bold border-2 ${product.borderAccent} hover:${product.bgAccent} transition-all group`}>
                                        <ExternalLink className={`mr-2 w-4 h-4 ${product.accentColor}`} />
                                        Visit Website
                                    </Button>
                                </a>
                            </>
                        ) : (
                            <div className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r ${product.gradient} text-white font-bold text-base shadow-xl ${product.glow} opacity-80`}>
                                <Clock className="w-5 h-5" />
                                In Development
                            </div>
                        )}
                    </motion.div>
                </div>
            </motion.div>

            <AnimatePresence>
                {showModal && product.brief && (
                    <ExploreModal product={product} onClose={() => setShowModal(false)} />
                )}
            </AnimatePresence>
        </>
    );
};

/* ─── Future Product Card ─── */
const FutureProductCard = ({
    product,
    index,
    isReversed,
}: {
    product: typeof futureProducts[0];
    index: number;
    isReversed: boolean;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`relative flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}
        >
            {/* Small Card */}
            <div className="w-full lg:w-4/12 relative group">
                <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-border/70 transition-all duration-500 group-hover:shadow-xl">
                    {/* Top bar */}
                    <div className={`h-1 w-full bg-gradient-to-r ${product.gradient}`} />
                    <div className="p-6 md:p-8">
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-[0.02] group-hover:opacity-[0.06] transition-opacity duration-700`} />
                        <div className={`absolute -right-10 -top-10 w-28 h-28 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all duration-700`} />

                        {/* Coming Soon badge */}
                        <div className="flex justify-end mb-4">
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                                <Rocket className="w-3 h-3" />
                                Coming Soon
                            </div>
                        </div>

                        <motion.div
                            animate={{ y: [-3, 3, -3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative z-10 flex justify-center"
                        >
                            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-xl`}>
                                <product.icon className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-md" />
                            </div>
                        </motion.div>

                        <div className="relative z-10 text-center mt-5">
                            <h4 className="text-lg font-bold text-foreground">{product.title}</h4>
                            <p className={`text-xs font-semibold uppercase tracking-widest ${product.accentColor} mt-1.5`}>
                                {product.tagline}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-8/12 space-y-4">
                <motion.div
                    initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2"
                >
                    <span className={`text-xs font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r ${product.gradient}`}>
                        Future Product
                    </span>
                    <div className={`w-8 h-[2px] bg-gradient-to-r ${product.gradient} rounded-full`} />
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="text-2xl md:text-3xl font-bold text-foreground leading-tight"
                >
                    {product.title}
                </motion.h3>

                <AnimatedDesc text={product.description} className="text-base text-muted-foreground leading-relaxed" />

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="pt-2"
                >
                    <Link to="/contact">
                        <Button variant="outline" className="group rounded-xl px-6 py-5 h-auto border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all">
                            <Sparkles className={`mr-2 h-4 w-4 ${product.accentColor}`} />
                            Get Notified
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

/* ─── Main Products Page ─── */
const Products = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen">
            <Navbar />
            <WhatsAppButton />

            <main className="pt-24">
                {/* ━━ HERO ━━ */}
                <section className="py-20 md:py-28 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.07, 0.15, 0.07] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"
                    />
                    <motion.div
                        animate={{ scale: [1.1, 1, 1.1], opacity: [0.05, 0.12, 0.05] }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"
                    />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm"
                            >
                                <Sparkles className="w-4 h-4" />
                                Our Products
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-[1.05] tracking-tight"
                            >
                                Powerful Solutions,
                                <span className="gradient-text block mt-2">Built for Growth</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                            >
                                We craft innovative, scalable, and enterprise-ready products that transform how businesses operate. Discover our suite of cutting-edge solutions designed to accelerate your success.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="mt-12 flex justify-center"
                            >
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                    className="w-8 h-12 rounded-full border-2 border-primary/30 flex justify-center pt-2"
                                >
                                    <motion.div
                                        animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                        className="w-1.5 h-3 bg-primary rounded-full"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ━━ STATS BAR ━━ */}
                <section className="py-6 border-y border-border/30 bg-secondary/20">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                            {[
                                { icon: Zap, label: 'Products', value: '4+' },
                                { icon: Users, label: 'Happy Clients', value: '100+' },
                                { icon: Globe, label: 'Countries', value: '3+' },
                                { icon: Shield, label: 'Uptime SLA', value: '99.9%' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <stat.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold text-foreground">{stat.value}</div>
                                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ━━ PRODUCTS SECTION ━━ */}
                <section className="py-20 md:py-32 relative overflow-hidden">
                    <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
                    <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[140px] pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-24 max-w-3xl mx-auto"
                        >
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
                                <Star className="w-4 h-4" />
                                Live Products
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight tracking-tight">
                                Products That
                                <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Drive Results</span>
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Each product is meticulously crafted with cutting-edge technology, intuitive design, and scalable architecture to deliver exceptional value.
                            </p>
                        </motion.div>

                        <div className="space-y-36 md:space-y-48">
                            {products.map((product, index) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    index={index}
                                    isReversed={index % 2 !== 0}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ━━ DIVIDER ━━ */}
                <div className="container mx-auto px-4">
                    <div className="relative flex items-center justify-center py-4">
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="mx-6 w-12 h-12 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center"
                        >
                            <Rocket className="w-5 h-5 text-primary" />
                        </motion.div>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                    </div>
                </div>

                {/* ━━ FUTURE PRODUCTS ━━ */}
                <section className="py-20 md:py-28 relative overflow-hidden bg-secondary/10">
                    <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20 max-w-3xl mx-auto"
                        >
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
                                <Rocket className="w-4 h-4" />
                                Coming Soon
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight tracking-tight">
                                Future Products
                                <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">In The Pipeline</span>
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                We're constantly innovating. Here's a glimpse of the exciting products we're building to shape the future of technology.
                            </p>
                        </motion.div>

                        <div className="space-y-20 md:space-y-28">
                            {futureProducts.map((product, index) => (
                                <FutureProductCard key={product.id} product={product} index={index} isReversed={index % 2 !== 0} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ━━ CTA ━━ */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
                        >
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

                            <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-xl">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                            </motion.div>

                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative z-10">Have a Product Idea?</h2>
                            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto relative z-10">
                                Let's transform your vision into a powerful digital product. Our team is ready to bring your ideas to life.
                            </p>
                            <Link to="/contact">
                                <Button className="btn-primary group text-lg px-10 py-6 relative z-10">
                                    Let's Build Together
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Products;
