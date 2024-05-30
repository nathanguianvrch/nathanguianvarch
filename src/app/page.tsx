"use client";
import Projects from "@/components/projects";
import Navbar from "@/components/navbar";
import LandingPage from "@/components/landingPage";
import Skills from "@/components/skills";
import Schools from "@/components/schools";
import Experiences from "@/components/experiences";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <Schools />
      <hr />
      <Experiences />
      <hr />
      <Socials />
    </main>
  );
}
