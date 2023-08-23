"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { FaHandPointUp } from "react-icons/fa";

const orderListData: string[] = [
  "Marketing Executive",
  "Digital Marketing Intern",
  "Content Writer",
  "Graphics Designer",
  "Lead Generation Expert",
  "Marketing Automation Expert",
  "Media Buyer",
  "Outreach Specialist",
  "PR Specialist",
  "SEO Specialist",
  "Video Editor",
  "Video Marketer",
  "Web Developer",
];

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
              <TextColor>Get Free Job Description Templates</TextColor>
            </h2>
            <p>
              To assist you in preparing your job description templates I'll be
              giving you a few free samples that I use for my clients.
            </p>
            <div className="container">
              <ol className="list-decimal">
                {orderListData.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            </div>

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

          <div className="space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold ">
              <TextColor>So Much To Talk About</TextColor>
            </h2>
            <p>
              With all the changes that have come to marketing in the past few
              years, it's safe to say that the marketing team needs to change as
              well. But how do you do it?
            </p>
            <p>
              <b>
                How do you structure and train an effective marketing team that
                can leverage modern, digital channels such as Facebook, LinkedIn
                and Google to deliver more leads and sales?
              </b>
            </p>
            <p>
              I'll cover all that, and more, in this free training, including…
            </p>
            <ol className="list-decimal ml-10 space-y-2">
              <li>
                Why <b> you need an in-house digital marketing team</b> (even if
                it's a “Team of 3”)
              </li>
              <li>
                <b>8 critical skills</b> that every marketing team must have in
                2022
              </li>
              <li>
                The 4 roles that make up the <b>modern “Growth Team”</b>
              </li>
              <li>
                How to structure your team to{" "}
                <b>maximize communication and accountability</b>
              </li>
              <li>
                How you can my own time to build and train your own team of
                marketing rock stars from scratch
              </li>
              <li>
                The <b>3 main traits you must look for</b> when hiring or moving
                someone into the Growth Team
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoDimensionalSection;
