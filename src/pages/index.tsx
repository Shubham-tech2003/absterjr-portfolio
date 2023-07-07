import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aryaman | Portfolio</title>
        <meta
          name="description"
          content="Education, experience, skills, projects and more"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile.png" />

        <meta property="og:title" content="Aryaman | Portfolio" />
        <meta property="og:image" content="/profile.png" />
        <meta
          property="og:description"
          content="Education, experience, skills, projects and more"
        />
      </Head>
      <main>
        <NavBar />
        <Hero />
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </>
  );
}
