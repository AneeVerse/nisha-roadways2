"use client";

import { motion } from "framer-motion";
import { Users, ShieldCheck, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TeamHero() {
    return (
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-indigo-300/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/10 to-pink-200/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 relative">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full shadow-sm mb-4">
                            <Users className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                                The Backbone of Nisha Roadways
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tight">
                            The People <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Moving India</span>
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
                            43 years in business. 96,000 trips per year. That doesn't happen by accident—it happens because of the expert dedicated minds behind every shipment.
                        </p>

                        <div className="flex flex-wrap justify-center gap-12 pt-8">
                            <div className="text-center group">
                                <div className="w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mx-auto">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div className="text-2xl font-black text-slate-900">100%</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ownership</div>
                            </div>
                            <div className="text-center group">
                                <div className="w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 mx-auto">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div className="text-2xl font-black text-slate-900">24/7</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Operations</div>
                            </div>
                            <div className="text-center group">
                                <div className="w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center mb-3 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 mx-auto">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div className="text-2xl font-black text-slate-900">Zero</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Compromise</div>
                            </div>
                        </div>

                        <div className="pt-10">
                            <Button className="h-auto py-5 px-10 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all" onClick={() => document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' })}>
                                Meet Our Leadership
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
