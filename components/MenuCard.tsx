type Props = { title: string; image: string; tags?: string[] };
export default function MenuCard({ title, image, tags = [] }: Props) {
  return (
    <div className="rounded-xl overflow-hidden border border-zinc-200 bg-white">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="p-3">
        <div className="font-medium text-dark">{title}</div>
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span key={i} className="text-xs rounded-full bg-accent px-2 py-0.5 text-dark/80">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
