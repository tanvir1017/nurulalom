"use client";
import { TextColor } from "@/lib/customColorFunc";
import DefaultButton from "@/shared/button/default-button";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

type CardDataType = {
  image: string;
  link: string;
  title: string;
  desc: string;
};

const cardData: CardDataType[] = [
  {
    image: "/assets/images/resources/hire-cmo.svg",
    link: "/cmo-interview-questions",
    title: "CMO Interview Question & JD Template",
    desc: "Ask The Right Questions To Hire The Right CMO",
  },
  {
    image: "/assets/images/resources/undraw_selecting_team_re_ndkb-1.svg",
    link: "/first-client-accelerator",
    title: "Build A Marketing Team (Free Guide)",
    desc: "FREE Guide On Building A Digital Marketing Team (With 13 Job Descriptions)",
  },
  {
    image: "/assets/images/resources/Ad-marketing-illustration-.svg",
    link: "/marketing-budget-template",
    title: "Marketing Budget Template",
    desc: "A Step By Step Guide To Create A Realistic Digital Marketing Budget",
  },
  {
    image: "/assets/images/resources/free-consultation_mobile.svg",
    link: "/courses/build-your-marketing-strategy-for-2022",
    title: "Build A Marketing Strategy",
    desc: "If you're a Founder or a Marketer who's looking to scale your business or company by setting practical, measurable, and feasible goals then this course is for you.",
  },
];

const MarketingResource = () => {
  return (
    <section>
      <div className="bg-[#F0F7FB] py-5">
        <div className="md:container mt-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="md:text-5xl text-2xl md:leading-[3.2rem] pb-4 font-bold">
              <TextColor>Marketing Resources</TextColor>
            </h1>
          </div>
          <Typography className="max-w-2xl mx-auto text-center pb-6">
            Here are all the marketing resources I have for you. Enjoy!
          </Typography>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F0F7FB"
          fillOpacity="1"
          d="M0,128L120,149.3C240,171,480,213,720,208C960,203,1200,149,1320,122.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      <div className="md:container px-4 my-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-5">
            {cardData.map((item: CardDataType, i: number) => (
              <div key={i} className="border px-4 py-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={100}
                  width={200}
                  className="mx-auto"
                />
                <h5 className="uppercase text-blue-500 md:text-xl text-lg py-6">
                  Free Resource
                </h5>
                <Typography variant="h4" className="pb-6 md:text-xl text-base">
                  {item.title}
                </Typography>
                <Typography>{item.desc}</Typography>
                <Link href={item.link} className="pt-6 block">
                  <DefaultButton size="sm" className="md:py-3 py-2">
                    Get access
                  </DefaultButton>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingResource;
