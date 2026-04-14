interface BannerProps {
  title: string;
  description: string;
  buttonText: string;
  urlText: string;
}

const Banner = ({ title, description, buttonText, urlText }: BannerProps) => (
  <section className="w-full bg-black py-20 text-center text-white">
    <h2 className="mb-4 text-3xl font-bold">{title}</h2>

    <p className="mb-6 text-gray-300">{description}</p>

    <a
      href={urlText}
      className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition-colors hover:bg-blue-700"
    >
      {buttonText}
    </a>
  </section>
);

export { Banner };
// const Banner = () => (
//   <section className="w-full bg-black py-20 text-center text-white">
//     <h2 className="mb-4 text-3xl font-bold">Klaar voor nieuwe PVC vloeren?</h2>

//     <p className="mb-6 text-gray-300">
//       Vraag vandaag nog een vrijblijvende offerte aan
//     </p>

//     <a
//       href="#contact"
//       className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
//     >
//       Aanvragen
//     </a>
//   </section>
// );

// export { Banner };
// import Link from 'next/link';

// import { Button } from '../button/Button';
// import { CTABanner } from '../cta/CTABanner';
// import { Section } from '../layout/Section';

// const Banner = () => (
//   <Section>
//     <CTABanner
//       title="Klaar voor nieuwe PVC vloeren?"
//       subtitle="Vraag vandaag nog een vrijblijvende offerte aan"
//       button={
//         <Link href="#contact">
//           <Button>Aanvragen</Button>
//         </Link>
//       }
//     />
//   </Section>
// );

// export { Banner };
