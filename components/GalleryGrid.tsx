type Props = { images: string[] };
export default function GalleryGrid({ images }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {images.map((src, i) => (
        <div key={i} className="relative overflow-hidden rounded-xl group">
          <img src={src} alt="Plato" className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
      ))}
    </div>
  );
}
