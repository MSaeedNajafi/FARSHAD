interface BannerProps {
  title: string;
  description: string;
  buttonText: string;
  urlText: string;
}

const Banner = ({ title, description, buttonText, urlText }: BannerProps) => (
  <section className="w-full bg-brand-black py-20 text-center text-white">
    <h2 className="mb-4 text-3xl font-bold">{title}</h2>

    <p className="mb-6 text-gray-300">{description}</p>

    <a
      href={urlText}
      className="rounded-lg bg-brand-gold px-6 py-3 font-semibold text-black transition hover:bg-brand-dark"
    >
      {buttonText}
    </a>
  </section>
);

export { Banner };
