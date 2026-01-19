interface Step {
    title: string;
    description: string;
}

interface ServiceProcessProps {
    steps: Step[];
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
    return (
        <section className="py-20 bg-gray-50">
            <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                        How It Works
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="group relative">
                            <div className="relative h-full p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:border-blue-300 hover:-translate-y-1 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/30 transition-all duration-300 rounded-2xl"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="relative">
                                            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                {index + 1}
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10"></div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-base">
                                            {step.description}
                                        </p>
                                    </div>

                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
