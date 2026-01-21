"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const teamMembers = [
    {
        name: "NK",
        surname: "AGARWAL",
        role: "Founder & Chairman",
        imageSrc: "/images/dream-team/person photo/NK AGARWAL.png",
    },
    {
        name: "NAVIN",
        surname: "AGARWAL",
        role: "CEO",
        imageSrc: "/images/dream-team/person photo/NAVIN AGARWAL.png",
    },
    {
        name: "RAJKUMAR",
        surname: "AGARWAL",
        role: "Mentor",
        imageSrc: "/images/dream-team/person photo/RAJKUMAR AGARWAL.png",
    },
    {
        name: "SUMIT",
        surname: "SINGHANIA",
        role: "CA Consultant",
        imageSrc: "/images/dream-team/person photo/SUMIT SINGHANIA.png",
    },
    {
        name: "ARUN KUMAR",
        surname: "PANDEY",
        role: "CA Consultant",
        imageSrc: "/images/dream-team/person photo/ARUN KUMAR PANDEY.png",
    },
];

export default function TeamHero() {
    return (
        <section className="relative pt-28 pb-24 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 overflow-hidden min-h-[90vh]">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 right-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28 relative">
                {/* Top Section - Text Content */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
                    {/* Left - Main Headline */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6"
                        >
                            <span className="text-sm font-medium text-slate-500 tracking-wide">/ Nisha Team</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 leading-[0.95] tracking-tight"
                        >
                            Logistics
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Pioneers</span>
                        </motion.h1>
                    </div>

                    {/* Right - Description & CTA */}
                    <div className="lg:pt-16">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-slate-600 leading-relaxed mb-8 max-w-md"
                        >
                            Meet the faces behind the expertise, making Nisha Roadways your trusted partner in container logistics and supply chain solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap items-center gap-6"
                        >
                            <Link
                                href="#leadership"
                                className="group inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Learn More
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 text-slate-700 font-bold hover:text-slate-900 transition-colors"
                            >
                                Get In Touch
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Section - Team Photos */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            className="group relative"
                        >
                            {/* Geometric Shape Container */}
                            <div className="relative w-40 h-48 sm:w-48 sm:h-56 lg:w-52 lg:h-60">
                                {/* Background Shape - Octagon/Geometric */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-orange-50 group-hover:to-orange-100 transition-all duration-500"
                                    style={{
                                        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                                    }}
                                ></div>

                                {/* Person Image */}
                                <div
                                    className="absolute inset-2 overflow-hidden"
                                    style={{
                                        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                                    }}
                                >
                                    <Image
                                        src={member.imageSrc}
                                        alt={`${member.name} ${member.surname}`}
                                        fill
                                        className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-105"
                                    />
                                </div>

                                {/* Hover Overlay */}
                                <div
                                    className="absolute inset-2 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                                    }}
                                ></div>
                            </div>

                            {/* Name Label */}
                            <div className="mt-4 text-center sm:text-left">
                                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight tracking-tight group-hover:text-orange-600 transition-colors">
                                    {member.name}
                                    <br />
                                    <span className="text-slate-400 group-hover:text-orange-400">{member.surname}</span>
                                </h3>
                                <p className="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
