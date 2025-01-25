import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Consult" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin by understanding your organization's{" "}
          <strong className="font-semibold text-neutral-950">specific needs</strong> and 
          requirements, working closely with your team to identify the right software solutions 
          that align with your business objectives.
        </p>
        <p>
          Our software licensing experts conduct a thorough assessment of your current 
          infrastructure and future{" "}
          <strong className="font-semibold text-neutral-950">growth plans</strong>. This helps 
          us recommend the most cost-effective licensing options and deployment strategies.
        </p>
        <p>
          We provide detailed{" "}
          <strong className="font-semibold text-neutral-950">proposals</strong> that include 
          licensing options, pricing, and implementation timelines to help you make informed decisions.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Requirements analysis</TagListItem>
        <TagListItem>Infrastructure assessment</TagListItem>
        <TagListItem>License optimization</TagListItem>
        <TagListItem>Cost analysis</TagListItem>
        <TagListItem>Solution architecture</TagListItem>
        <TagListItem>Deployment planning</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
