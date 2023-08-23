"use client";

import { TextColor } from "@/lib/customColorFunc";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@material-tailwind/react";
import Image from "next/image";

const AskTheRightQuestion = () => {
  return (
    <section className="container">
      <div className="max-w-4xl mx-auto text-center my-7">
        <h5 className="text-xl font-bold text-[#09304C] pb-6">
          - Free Video Guides & Interview Questions To-
        </h5>
        <h1 className="md:text-4xl text-2xl font-bold text-[#09304C] pb-6">
          Ask The Right Questions To Hire The Right CMO
        </h1>
        <p>
          A perfect CMO will not only bring growth to your business but also
          build a powerful marketing team for your company. In that case, you
          can forget about scaling your business and start worrying about hiring
          the right CMO.
        </p>
      </div>
      <div className="max-w-fit mx-auto">
        <Image
          src="/assets/images/interview-questions/3-hour-wide.jpg.webp"
          alt="Author interviewing"
          width={1150}
          height={50}
          sizes="(min-width: 740px) 42.125rem, calc(95.48vw - 18px)"
        />
      </div>

      <div className="max-w-6xl mx-auto md:my-28 my-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="pr-5">
            <h2 className="md:text-3xl text-2xl font-bold pb-6">
              <TextColor>
                Don't Know What To Ask In An Interview With Your Future CMO?
                This Will Help.
              </TextColor>
            </h2>
            <p>
              With past experience as a founder and a full-time CMO myself, I
              know exactly what to ask a CMO during the interview and I want to
              share everything with you for free of cost. All you need to do is
              sign up and you'll find the video in your email box.
            </p>

            <h2 className="md:text-3xl text-2xl font-bold py-6">
              <TextColor>What's Inside?</TextColor>
            </h2>
            <ul className="space-y-2">
              <li>
                {" "}
                <ArrowRightIcon
                  className="text-blue-500 md:w-5 md:h-5 inline-flex mr-2"
                  strokeWidth={3.5}
                />{" "}
                Job Description template for CMO Position
              </li>
              <li>
                {" "}
                <ArrowRightIcon
                  className="text-blue-500 md:w-5 md:h-5 inline-flex mr-2"
                  strokeWidth={3.5}
                />{" "}
                Interview questions to ask in the interview
              </li>
              <li>
                {" "}
                <ArrowRightIcon
                  className="text-blue-500 md:w-5 md:h-5 inline-flex mr-2"
                  strokeWidth={3.5}
                />{" "}
                Step By Step Guide to hiring the right CMO
              </li>
            </ul>
          </div>
          <div className="bg-[#F3F7FB] border border-[#d1e3f5]  px-8 py-16 space-y-4">
            <h4 className="md:text-2xl text-xl font-bold">
              <TextColor>Subscribe And Download The Free Resource</TextColor>
            </h4>
            <div className="space-y-5">
              <Input size="lg" label="name" color="blue" />
              <Input size="lg" label="email" color="blue" />

              <Button color="blue" className="rounded-full w-full">
                Show me the CMO Interview Questions & JD Templates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskTheRightQuestion;
