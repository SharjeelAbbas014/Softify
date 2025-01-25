import PageIntro from "@/components/PageIntro";


const WorkPage = () => {
  return (
    <>
      <PageIntro 
        eyebrow="Our Work" 
        title="Success Stories and Implementations"
      >
        <p>
          We've helped organizations of all sizes optimize their software infrastructure 
          and achieve their digital transformation goals. Here are some of our notable 
          implementations and success stories.
        </p>
      </PageIntro>
    
    </>
  );
};

export default WorkPage;

export const metadata = {
  title: "Success Stories | Softify Software Solutions",
  description: "Explore how Softify has helped businesses optimize their software infrastructure with solutions from Microsoft, Adobe, Autodesk, and more.",
};
