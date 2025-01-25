import PageIntro from "@/components/PageIntro";

const BlogPage = () => {
  return (
    <>
      <PageIntro eyebrow="Blog" title="Latest Software News & Updates">
        <p>
          Stay informed about the latest software releases, licensing updates, and industry news 
          from our partner brands including Microsoft, Adobe, Autodesk, V-Ray, and SketchUp.
        </p>
      </PageIntro>
    </>
  );
};

export default BlogPage;

export const metadata = {
  title: "Software News & Updates | Softify",
  description: "Stay updated with the latest software releases, licensing news, and industry updates from Microsoft, Adobe, Autodesk, V-Ray, and SketchUp.",
};
