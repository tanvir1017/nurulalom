import AboutHeading from "@/components/pages/about/aboutheading/aboutheading";
import CareerHighlights from "@/components/pages/about/careerhighlights/careerhighlights";
import Certificate from "@/components/pages/about/certificate/certificate";
import FewClients from "@/components/pages/about/fewclients/fewclients";
import IDontBite from "@/components/pages/about/idontbite";
import RealExperiences from "@/components/pages/about/pastexperiences/realexperiences";
import ProcessOfWorkingWithMe from "@/components/pages/about/processofworkingwithme/processofworkingwithme";
import StoryOfMarketer from "@/components/pages/about/storyofmarketer";

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Nurul Alom consultant - Nurul Alom | Digital Marketing...",
  description: "Digital Marketing Consultant",
};

const About = () => {
  return (
    <main className="App">
      <AboutHeading />
      <section className="md:container max-w-6xl mx-auto pt-24 pb-12 px-3 ">
        <Image
          className="md:hidden block mb-5"
          src="/assets/images/about/marketing-consulting.jpg"
          alt="marketing consulting"
          width={400}
          height={100}
          priority
        />

        <p className="md:text-[1.375rem]  leading-8">
          My happiest moment is getting the text message from my clients that
          says,{" "}
          <b className="italic">
            “Najm, you did it. Can't believe we have clients”{" "}
          </b>
          or
          <b className="italic">
            “Najm! Too many leads are coming in. Slow down if you can.”
          </b>{" "}
          I become the proudest of my work when I see leads are generating or
          clients are coming in for my clients. The excitement of closing deals
          is indescribable.
        </p>
      </section>
      <section className="">
        <Certificate />
        <CareerHighlights />
        <ProcessOfWorkingWithMe />
        <StoryOfMarketer />
        <RealExperiences />
        <FewClients />
        <IDontBite />
      </section>
    </main>
  );
};

export default About;
