import { Award, Zap, Target, Globe, LucideIcon } from "lucide-react";

interface Benefit {
    title: string;
    description: string;
}

interface ServiceBenefitsProps {
    benefits: Benefit[];
}

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
    const benefitIcons = [Award, Zap, Target, Globe];

    return (
        <section className="py-20 bg-white">
            <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                        Why Choose Our Service
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefitIcons[index % benefitIcons.length];
                        return (
                            <div key={index} className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-green-200">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
