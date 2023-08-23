"use client";

import { TextColor } from "@/lib/customColorFunc";
import { Button, Input } from "@material-tailwind/react";
import Image from "next/image";

const Free_Marketing_Budgeting_Template = () => {
  return (
    <section className="md:container px-2 md:mt-16 mt-6">
      <div className="max-w-4xl mx-auto text-center my-7 md:hidden block">
        <h1 className="md:text-4xl text-2xl font-bold text-[#09304C] pb-6">
          FREE Guide To Create a Digital Marketing Budget for 2023 <br /> Under
          30 Minutes
        </h1>
      </div>
      <div className="max-w-4xl mx-auto text-center my-7 hidden md:block">
        <h5 className="text-xl font-bold text-[#09304C] pb-6">
          - Free Digital Marketing Budget Template -
        </h5>

        <p>
          <b>
            <TextColor>
              *Disclaimer: It's Free. Like, Really Free. As In “No Charge.” (Did
              I Mention It's Free?) 🙂
            </TextColor>
          </b>
        </p>
      </div>
      <div className="max-w-fit mx-auto">
        <Image
          src="/assets/images/free-marketing-template/inbound-marketing-consultation.jpg.webp"
          alt="Author interviewing"
          width={1150}
          height={100}
          priority
          sizes="(min-width: 740px) 42.125rem, calc(95.48vw - 18px)"
        />
      </div>

      <div className="max-w-6xl mx-auto md:my-28 my-14">
        <div className=" md:grid md:grid-cols-2 md:gap-6 flex flex-col-reverse ">
          <div className="md:pr-5 pt-6 md:px-0 px-4">
            <h4 className="md:text-2xl text-xl font-bold pb-6">
              <TextColor>
                Make A <span className="underline">Realistic</span> Marketing
                Budget For 2023
              </TextColor>
            </h4>
            <p>
              Marketing budgets are a foolproof way of making sure you're not
              wasting money. With the right tools & strategy, it's easy to
              create a digital marketing budget for 2023. When You Access It,
              You'll Discover:
            </p>

            <ul className="space-y-2 list-disc ml-8 md:mt-0 mt-5">
              <li>
                Get the actual template that you can follow to create your own
                marketing budget.
              </li>
              <li>
                A video guide that you can follow to understand how to use the
                template.
              </li>
              <li>
                What to be aware of when creating a digital marketing budget
                Mistakes to avoid to consider specifically for 2023 as the 1st
                year.
              </li>
            </ul>
          </div>
          <div className="bg-[#F3F7FB] border border-[#d1e3f5]  md:px-8 px-4 py-16 space-y-4">
            <h4 className="text-xl font-bold">
              <TextColor>Subscribe And Download The Free Resource</TextColor>
            </h4>
            <div className="space-y-5">
              <Input size="lg" label="name" color="blue" />
              <Input size="lg" label="email" color="blue" />

              <Button
                color="blue"
                className="rounded-full w-full text-xs md:text-sm"
              >
                Show me the CMO Interview Questions & JD Templates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Free_Marketing_Budgeting_Template;
