import Image from "next/image";
import logoAdobe from "../images/portfolio/adobe/adobe-icon.svg";
import logoAutodesk from "../images/portfolio/autodesk/autodesk-icon.svg";
import logoZoom from "../images/portfolio/zoom/zoom-icon.svg";
import logoMicrosoft from "../images/portfolio/microsoft/microsoft-icon.svg";
import logoKahoot from "../images/portfolio/kahoot/kahoot-icon.svg";
import logoSketch from "../images/portfolio/sketch/sketch-icon.svg";
import logoAnydesk from "../images/portfolio/anydesk/anydesk-icon.svg";
import logoVray from "../images/portfolio/vray/vray.svg";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  {client: "Adobe", logo: logoAdobe, showTitle: true, link: "https://www.adobe.com/"},
  {client: "Autodesk", logo: logoAutodesk, showTitle: false, link: "https://www.autodesk.com/"},
  {client: "Zoom", logo: logoZoom, showTitle: false, link: "https://www.zoom.us/"},
  {client: "Microsoft", logo: logoMicrosoft, showTitle: false, link: "https://www.microsoft.com/"},
  {client: "Kahoot", logo: logoKahoot, showTitle: false, link: "https://kahoot.com/"},
  {client: "Sketch", logo: logoSketch, showTitle: false, link: "https://www.sketch.com/"},
  {client: "Anydesk", logo: logoAnydesk, showTitle: false, link: "https://anydesk.com/"},
  {client: "Vray", logo: logoVray, showTitle: false, link: "https://www.chaosgroup.com/vray/"},
];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Our Portfolio
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(({client, logo, showTitle, link}) => (
              <li key={client}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                <FadeIn>
                  <div className="flex items-center gap-x-4">
                    <Image src={logo} alt={client} unoptimized />
                    {showTitle && <p className="text-2xl font-medium text-white">{client}</p>}
                    </div>
                  </FadeIn>
                </a>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
