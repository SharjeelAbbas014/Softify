import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Your Software Solutions Partner">
        <p>
          We believe in providing businesses with reliable, efficient access to the world's
          leading software solutions while delivering exceptional customer service.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Softify was established with a vision to simplify the software procurement process
            for businesses of all sizes. As an authorized distributor for industry giants like
            Microsoft, Adobe, Autodesk, Kaspersky, and TrendMicro, we ensure our clients receive
            genuine software solutions at competitive prices.
          </p>
          <p>
            Our team of software licensing experts is dedicated to understanding your specific needs
            and providing tailored solutions that align with your business requirements and budget.
            From single licenses to enterprise-wide deployments, we're here to support your digital
            transformation journey.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="1000+" label="Satisfied Clients" />
          <StatListItem value="5+" label="Major Software Partners" />
          <StatListItem value="15+" label="Years of Experience" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
