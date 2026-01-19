import { Wrench } from "lucide-react";

interface Spec {
    title: string;
    description: string;
}

interface ServiceSpecsProps {
    specs: Spec[];
}

export default function ServiceSpecs({ specs }: ServiceSpecsProps) {
    return (
        <section className="py-20 bg-gray-50">
            <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                        Technical Specifications & Details
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {specs.map((spec, index) => (
                        <div key={index} className="group p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                                    <Wrench className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{spec.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{spec.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
