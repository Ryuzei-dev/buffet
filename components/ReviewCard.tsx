type Props = { name: string; text: string; rating?: number };
export default function ReviewCard({ name, text, rating = 5 }: Props) {
  return (
    <div className="rounded-xl border border-zinc-200 p-4 bg-white shadow-sm">
      <div className="text-sm text-dark/70 mb-2">{"★".repeat(rating)}{"☆".repeat(5-rating)}</div>
      <p className="text-dark/90">{text}</p>
      <div className="mt-3 text-sm text-dark/70">— {name}</div>
    </div>
  );
}
