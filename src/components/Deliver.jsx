import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Support & Maintain" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We provide comprehensive{" "}
          <strong className="font-semibold text-neutral-950">post-deployment support</strong>{" "}
          to ensure your team can maximize the value of your software investments. Our support 
          includes technical assistance, license management, and regular check-ins.
        </p>
        <p>
          Our team monitors license{" "}
          <strong className="font-semibold text-neutral-950">renewals and updates</strong>{" "}
          proactively, ensuring your software remains compliant and up-to-date. We handle all 
          renewal negotiations and provide recommendations for optimization.
        </p>
        <p>
          We maintain detailed{" "}
          <strong className="font-semibold text-neutral-950">documentation</strong>{" "}
          of your software licenses and provide regular reports on usage, helping you make 
          informed decisions about future software investments.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Ongoing support includes
      </h3>
      <List>
        <ListItem title="Technical Support">
          Access to our dedicated support team for any software-related issues or questions.
        </ListItem>
        <ListItem title="License Management">
          Proactive monitoring and management of all your software licenses and subscriptions.
        </ListItem>
        <ListItem title="Regular Reviews">
          Quarterly reviews of your software portfolio to ensure optimal licensing and usage.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
