type Props = { title: string; subtitle?: string };
export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark font-title">{title}</h2>
      {subtitle && <p className="mt-3 text-lg sm:text-xl text-dark/80 leading-relaxed">{subtitle}</p>}
    </div>
  );
}
