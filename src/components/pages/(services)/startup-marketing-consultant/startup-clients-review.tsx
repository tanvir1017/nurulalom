"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

type RemoteReviewDataType = { title: string; desc: string };

const remoteReviewData: RemoteReviewDataType[] = [
  {
    title: "You Are Fire-Fighters.",
    desc: "Your people are not listening to you, your product supplier is not coming on time or your co-founder just left the company. You will always be fire fighting. So, let’s bring some accountability and start seeing results.",
  },
  {
    title: "How Many Leads Last Week?",
    desc: "One question we always keep asking. Because you know we are meeting every week, I promise you will make an effort to bring in new clients. Let me be the adult in the room.",
  },
  {
    title: "Do You Know What NOT To Do?",
    desc: "It's important to know what not to do so that you don't waste tons of money and 6 months to figure out what you needed to avoid. I can show the right path given I have previous experience in  marketing startups.",
  },
];

const OneThingAllMyPreviousStartupClientsToldMe = () => {
  return (
    <>
      <section className="md:container px-5 md:mt-28 my-12">
        <div className="max-w-xl mx-auto md:text-center space-y-6">
          <Typography variant="h3" className="">
            <TextColor>
              One Thing ALL My Previous Startup Clients Told Me
            </TextColor>
          </Typography>
          <p>
            <TextColor>
              “<strong>Accountability</strong> is one thing we did not expect
              but helped us the most.”
            </TextColor>
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-28">
          <div className="grid md:grid-cols-2 gap-10 place-items-center">
            <div className="space-y-8">
              {remoteReviewData.map(
                (item: RemoteReviewDataType, index: number) => (
                  <div className="space-y-5" key={index}>
                    <span className="bg-[#f0fbf7] border-l-2 border-blue-500 rounded-lg px-2 py-4 block">
                      <h4 className="text-2xl font-bold">
                        <TextColor>{item.title}</TextColor>
                      </h4>
                    </span>
                    <Typography>{item.desc}</Typography>
                  </div>
                )
              )}
            </div>

            <div>
              <Image
                className="rounded"
                src="/assets/images/startup-marketing-consultant/marketing-problems.jpg.webp"
                alt="remote team group screen shot"
                width={700}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="container max-w-4xl mx-auto md:block hidden">
        <hr className="border border-gray-300 my-32" />
      </div>
    </>
  );
};

export default OneThingAllMyPreviousStartupClientsToldMe;
