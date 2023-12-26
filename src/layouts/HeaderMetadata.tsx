import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>Dandy Dicky&apos;s Portfolio Website</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="subject"
        content="Dandy Dicky, UI/UX Designer and Front End Developer"
      />
      <meta
        name="description"
        content="Hello Everyone👋 I'am Dandy Dicky Triwibowo. A Frontend Developer and Mobile Developer from Indonesia. This is my personal portfolio website that created using Next.js and Chakra UI"
      />
      <meta
        name="author"
        content="Dandy Dicky Triwibowo"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
}
