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
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300">
      <div className={`relative h-64 bg-gradient-to-br ${accentGradient}`}>
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white drop-shadow-sm">{name}</h3>
          <p className="text-white/80 font-semibold text-sm">{role}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}