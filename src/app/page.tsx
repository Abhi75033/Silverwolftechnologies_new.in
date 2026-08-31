import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";

export const metadata = {
  title: 'Web Development & SEO Company in India',
  description: 'Silver Wolf Technologies — 10+ years building websites, mobile apps, CRMs and SEO/digital marketing for businesses across India and globally. Get a free quote today.',
  alternates: {
    canonical: 'https://www.silverwolftechnologies.in/',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
