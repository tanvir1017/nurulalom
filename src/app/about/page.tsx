import AboutHeading from "@/components/pages/about/aboutheading/aboutheading";
import CareerHighlights from "@/components/pages/about/careerhighlights/careerhighlights";
import Certificate from "@/components/pages/about/certificate/certificate";
import ProcessOfWorkingWithMe from "@/components/pages/about/processofworkingwithme/processofworkingwithme";

const About = () => {
  return (
    <main className="App">
      <AboutHeading />
      <section className="container max-w-6xl mx-auto pt-24 pb-12 ">
        <p className="text-[1.375rem] leading-8">
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
      </section>
    </main>
  );
};

export default About;
