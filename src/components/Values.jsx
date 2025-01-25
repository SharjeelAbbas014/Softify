import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Trust, Excellence, and Partnership"
      >
        <p>
          We believe in building lasting relationships with our clients through 
          transparent practices, exceptional service, and unwavering commitment 
          to providing genuine software solutions that drive business success.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Authenticity">
            We exclusively provide genuine, licensed software from authorized vendors, 
            ensuring our clients receive legitimate products with full support and security.
          </GridListItem>
          <GridListItem title="Expertise">
            Our team stays current with the latest software licensing models and 
            compliance requirements to provide expert guidance for your business needs.
          </GridListItem>
          <GridListItem title="Customer-Centric">
            Every business has unique requirements, and we take pride in understanding 
            your specific needs to recommend the most suitable software solutions.
          </GridListItem>
          <GridListItem title="Transparency">
            We maintain clear communication about pricing, licensing terms, and 
            renewal processes, ensuring you always know what to expect.
          </GridListItem>
          <GridListItem title="Long-term Partnership">
            We build enduring relationships with our clients, providing ongoing 
            support and strategic advice for their software investments.
          </GridListItem>
          <GridListItem title="Reliability">
            Our established partnerships with major software vendors ensure stable 
            supply chains and priority access to the latest software releases and updates.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
