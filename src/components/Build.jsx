import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="License & Configure" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on the consultation phase, we proceed with{" "}
          <strong className="font-semibold text-neutral-950">license procurement</strong> and 
          begin the configuration process. We handle all the paperwork and ensure your licenses 
          are properly registered and documented.
        </p>
        <p>
          Each client is assigned a dedicated account manager who oversees the entire process 
          and provides regular{" "}
          <strong className="font-semibold text-neutral-950">status updates</strong>. They 
          serve as your primary point of contact and ensure smooth communication throughout 
          the deployment.
        </p>
        <p>
          Our team handles all aspects of{" "}
          <strong className="font-semibold text-neutral-950">software activation</strong> and 
          provides initial setup assistance to ensure your team can start using the software 
          right away.
        </p>
      </div>
      <Blockquote
        author={{ name: "Sarah Chen", role: "IT Director at TechCorp" }}
        className="mt-12"
      >
        Softify's licensing process was incredibly smooth. Their team handled everything from 
        procurement to activation, making the whole experience hassle-free.
      </Blockquote>
    </Section>
  );
};

export default Build;
