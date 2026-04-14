type Props = {
  title: string;
  image: string;
};

const PageHero = ({ title, image }: Props) => (
  <div
    className="relative bg-cover bg-center py-32 text-white"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="absolute inset-0 bg-black/50" />

    <div className="relative z-10 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  </div>
);

export { PageHero };
