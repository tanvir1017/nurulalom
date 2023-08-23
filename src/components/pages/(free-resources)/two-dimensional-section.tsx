"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { FaHandPointUp } from "react-icons/fa";

const TwoDimensionalSection = () => {
  return (
    <section className="container">
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="md:flex md:items-center md:justify-between">
          <Image
            src="/assets/images/CMO-interview/job-descriptions.png.webp"
            alt="Job descriptions illustration"
            height={100}
            width={550}
          />

          <div className="space-y-8 ml-5">
            <h2 className="text-2xl md:text-4xl font-bold ">
              <TextColor>A Good CV Is Not Enough</TextColor>
            </h2>
            <p>
              You can't just hire a CMO based on their CV or a few assessments.
              You're taking a major decision for your company and investing a
              huge amount of money behind one person, so you definitely need to
              dig deep into their knowledge and experience through an interview.
            </p>
            <Button className="rounded-full flex items-center" color="blue">
              Get access to training <FaHandPointUp className="w-5 h-5 ml-3" />
            </Button>
          </div>
        </div>

        <div className="md:flex md:flex-row-reverse md:items-center md:justify-between">
          <Image
            src="/assets/images/CMO-interview/marekting-teams.png"
            alt="Job descriptions illustration"
            height={100}
            width={550}
          />

          <div className="space-y-8 mr-5">
            <h2 className="text-2xl md:text-4xl font-bold ">
              <TextColor>
                Key Qualities To Measure During The Interview
              </TextColor>
            </h2>
            <p>
              Next time when you are interviewing a candidate for the CMO
              position, make sure they have these qualities.
            </p>
            <ul className="list-disc ml-10">
              <li>Team Leadership</li>
              <li>Creative Thinker</li>
              <li>Communication</li>
              <li>Analytical Ability</li>
              <li>Growth Oriented</li>
              <li>Data and ROI Driven</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoDimensionalSection;
