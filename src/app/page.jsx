import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Your Trusted Source for Premium Software Solutions
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Softify is a leading distributor of premium software solutions from world-renowned brands 
            including Microsoft, Adobe, Autodesk, Kaspersky, and TrendMicro. We connect businesses 
            and individuals with the software they need to succeed.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "TechCorp", logo: logoPhobiaDark }}
      >
        Softify made our software procurement process seamless and efficient. Their team provided 
        excellent support and competitive pricing for our enterprise-wide Adobe Creative Cloud deployment.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
