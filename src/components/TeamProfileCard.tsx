import Image from 'next/image';

type TeamProfileCardProps = {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
  accentGradient?: string; // e.g., 'from-blue-600 to-indigo-700'
};

export default function TeamProfileCard({
  name,
  role,
  imageSrc,
  description,
  accentGradient = 'from-slate-500 to-slate-700',
}: TeamProfileCardProps) {
  return (
    <div className="group bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-2">
      {/* Image Container */}
      <div className={`relative h-72 sm:h-80 w-full overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-20 z-10 group-hover:opacity-10 transition-opacity duration-500`} />
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          priority={false}
        />

        {/* Overlay Info */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
        <div className="absolute bottom-6 left-6 right-6 z-30">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-black uppercase tracking-widest text-white mb-3">
            {role}
          </div>
          <h3 className="text-3xl font-black text-white leading-tight">{name}</h3>
        </div>
      </div>

      {/* Description Container */}
      <div className="p-8 flex flex-col flex-grow bg-white">
        <p className="text-slate-600 leading-relaxed text-base font-medium line-clamp-6">
          {description}
        </p>

        {/* Decorative footer element */}
        <div className="mt-6 pt-6 border-t border-slate-100 mt-auto">
          <div className={`h-1.5 w-12 bg-gradient-to-r ${accentGradient} rounded-full`} />
        </div>
      </div>
    </div>
  );
}