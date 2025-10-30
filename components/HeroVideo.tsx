import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  full?: boolean;
  id?: string;
};

export default function HeroVideo({ title, subtitle, ctaPrimary, ctaSecondary, full = false, id = "hero" }: Props) {
  return (
    <section id={id} className={`relative ${full ? "h-screen" : "h-[80vh]"} min-h-[420px] w-full overflow-hidden ${full ? "rounded-none" : "rounded-2xl"} bg-black text-white`}>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-video-poster.jpg"
        preload="metadata"
      >
        <source src="/videos/inicio_video.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/854322/854322-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-bold font-title drop-shadow-md">{title}</h1>
          {subtitle && <p className="mt-3 max-w-xl text-white/90">{subtitle}</p>}
          <div className="mt-6 flex gap-3">
            {ctaPrimary && (
              <Link href={ctaPrimary.href} className="rounded-full bg-mexican-pink px-5 py-2 text-sm text-white hover:brightness-110 cursor-pointer">
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link href={ctaSecondary.href} className="rounded-full bg-white px-5 py-2 text-sm text-[#0D47A1] border-2 border-mexican-pink hover:bg-white/90 cursor-pointer">
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
