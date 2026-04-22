interface BannerProps {
  title: string;
  description: string;
  buttonText: string;
  urlText: string;
  image?: string;
}

const Banner = ({
  title,
  description,
  buttonText,
  urlText,
  image = 'https://sfvloeren.nl/wp-content/uploads/2025/05/alpen-klik-.jpg',
}: BannerProps) => (
  <section
    className="relative w-full overflow-hidden bg-cover bg-center py-24 text-center text-white"
    style={{ backgroundImage: `url(${image})` }}
  >
    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/60" />

    {/* CONTENT */}
    <div className="relative mx-auto max-w-5xl px-6">
      <h2 className="mb-4 text-4xl font-bold">{title}</h2>

      <p className="mx-auto mb-8 max-w-2xl text-gray-200">{description}</p>

      <a
        href={urlText}
        className="rounded-lg bg-brand-gold px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
      >
        {buttonText}
      </a>
    </div>
  </section>
);

export { Banner };
