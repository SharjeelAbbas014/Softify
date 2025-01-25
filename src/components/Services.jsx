import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Comprehensive Software Solutions for Your Business"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We provide end-to-end software licensing solutions, from consultation 
          to deployment and ongoing support, ensuring your business has the tools it needs to succeed.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Enterprise Software Licensing">
              Comprehensive licensing solutions for Microsoft, Adobe, and Autodesk products, 
              tailored to your organization's size and needs. We handle volume licensing, 
              enterprise agreements, and cloud subscriptions.
            </ListItem>
            <ListItem title="Security Solutions">
              Complete security software packages from Kaspersky and TrendMicro, 
              protecting your business from evolving cyber threats. Including endpoint 
              protection, email security, and network defense solutions.
            </ListItem>
            <ListItem title="Cloud Services">
              Expert guidance on cloud licensing and subscriptions, including Microsoft 365, 
              Adobe Creative Cloud, and Autodesk Cloud. We help optimize your cloud 
              investments and manage subscriptions effectively.
            </ListItem>
            <ListItem title="License Management">
              Comprehensive license management services including audit support, 
              compliance monitoring, renewal management, and optimization recommendations 
              to ensure maximum value from your software investments.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
