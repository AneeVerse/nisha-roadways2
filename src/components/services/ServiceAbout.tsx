interface Stat {
    value: string;
    label: string;
}

interface ServiceAboutProps {
    title: string;
    description: string;
    stats?: Stat[];
}

export default function ServiceAbout({ title, description, stats }: ServiceAboutProps) {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="mb-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {title}
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mx-auto"></div>
                    </div>

                    <div className="mb-10">
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium max-w-4xl mx-auto">
                            {description}
                        </p>
                    </div>

                    {stats && stats.length > 0 && (
                        <div className="flex flex-wrap justify-center items-center gap-4 mt-12 max-w-4xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="group relative overflow-hidden bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 p-6 text-center w-[180px] h-[140px] flex flex-col justify-center items-center">
                                    <div className="relative z-10">
                                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                                            {stat.label}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
