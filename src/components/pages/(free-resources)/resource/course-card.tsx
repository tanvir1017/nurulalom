"use client";
import { TextColor } from "@/lib/customColorFunc";
import DefaultButton from "@/shared/button/default-button";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

type CardDataType = {
  image: string;
  link: string;
  title: string;
  desc: string;
  items?: string[];
};

const cardData: CardDataType[] = [
  {
    image: "/assets/images/resources/Sample-Buyer-Persona.png",
    link: "/cmo-interview-questions",
    title: "Buyer Persona Template",
    desc: "Quickly build your customer segments and know who to market",
    items: [
      "Easily add relevant information about your clients",
      "A template to follow and get customer insights",
      "Easily customizable",
    ],
  },
  {
    image:
      "/assets/images/resources/Digital-Marketing-Fundamentals-For-Beginners-FREE-Course.webp",
    link: "/courses/digital-marketing-fundamentals-for-beginners/",
    title: "Digital Marketing Fundamentals For Beginners",
    desc: "Do you want to learn digital marketing but don't know where to start? In this case, this course is the best for you. You will be guided with all the basics of digital marketing that will help any novice, aspiring to mid-level digital marketers.",
  },
];

const CourseCard = () => {
  return (
    <section className="md:container px-4">
      <div className="max-w-6xl mx-auto my-24">
        <div className="grid md:grid-cols-2 gap-5">
          {cardData.map((item: CardDataType, i: number) => (
            <div key={i} className="border shadow-lg rounded-xl">
              <Image
                src={item.image}
                alt={item.title}
                height={100}
                width={580}
                sizes="(min-width: 740px) 42.125rem, calc(95.48vw - 18px)"
                className="rounded-t-xl"
              />
              <div className="md:p-10 p-4 ">
                <Typography
                  variant="h6"
                  className="uppercase md:font-semibold text-blue-500 my-5"
                >
                  Free Resource
                </Typography>
                <Typography variant="h4" className="my-5">
                  <TextColor>{item.title}</TextColor>
                </Typography>
                <Typography className="">{item.desc}</Typography>
                {item?.items && (
                  <ul className="mt-3">
                    {item?.items?.map((item: string) => (
                      <li
                        key={item}
                        className="flex md:items-center items-start my-2"
                      >
                        <span>
                          <CheckCircleIcon className="w-5 h-5 bg-orange-300 text-white rounded-full mr-2" />
                        </span>
                        <span>{item} </span>
                      </li>
                    ))}
                  </ul>
                )}

                <Link href={item.link} className="pt-6 block">
                  <DefaultButton size="lg">Get access</DefaultButton>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
