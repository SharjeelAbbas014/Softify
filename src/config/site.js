export function constructMetadata({
  title = "Softify ",
  description = "Your Trusted Source for Premium Software Solutions",
  image = "/agency.PNG",
  icons = "/favicon.ico",
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@KING_IN_JUNGLE",
    },
    icons,
    metadataBase: new URL("https://softify.com.pk/"),
    themeColor: "#FFF",
  };
}
