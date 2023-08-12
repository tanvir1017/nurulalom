"use client";
import { TextColor } from "@/lib/customColorFunc";
import { TeamsLookingCardDataType } from "@/types/globaltypes";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const TeamsLookingCardData: TeamsLookingCardDataType[] = [
  {
    image:
      "/assets/images/build-marketing-team/social-media-team-01-2048x2048.webp",
    title: "Social Media Team",
    item: [
      "Marketing Executive",
      "Social Media Manager",
      "Graphic Designer",
      "Video Editor",
      "Content Writer",
    ],
  },
  {
    image: "/assets/images/build-marketing-team/seo-team.webp",
    title: "SEO Team",
    item: [
      "SEO Strategist",
      "Link Building Specialist",
      "Graphic Designer",
      "Content Writer - One",
      "Content Writer -  Two",
    ],
  },
  {
    image: "/assets/images/build-marketing-team/demand-gen-01-1946x2048.webp",
    title: "Demand Gen Team",
    item: [
      "Lead Acquisition Specialist",
      "Business Dev Executive - Two",
      "Cold caller - Two",
      "Email marketing Specialist",
    ],
  },
  {
    image: "/assets/images/build-marketing-team/video-team-01-1946x2048.webp",
    title: "Content Team",
    item: [
      "Video Editor",
      "Motion Graphic Designer",
      "Graphic Designer",
      "Creative Director",
    ],
  },
  {
    image:
      "/assets/images/build-marketing-team/complete-dm-team-2048x1014.webp",
    title: "Complete Digital Marketing Team",
    item: [
      "Inbound team - 5 talents",
      "Creative team - 5 talents",
      "Outbound team - 4 talents",
    ],
  },
  {
    image: "/assets/images/build-marketing-team/seo-team.webp",
    title: "Custom Team",
    desc: "Let us know what you want to achieve and we will build the team you need.",
  },
];

const YourTeamsLookDependingOnMarketingNeeds = () => {
  return (
    <section className="bg-[#f0f7fb] py-20 px-10 mt-28">
      <div className="max-w-3xl mx-auto text-center space-y-5">
        <Typography variant="h2">
          <TextColor>
            Here Is How Your Team Might Look Like Depending On Your Marketing
            Needs
          </TextColor>
        </Typography>
        <p className="text-sm">
          Your team will have me as your <strong>Fractional CMO</strong> for
          continuous project management, training, and direction.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-16">
          {TeamsLookingCardData.map(
            (item: TeamsLookingCardDataType, index: number) => (
              <div
                key={index}
                className="p-10 bg-white shadow-lg  border-t-4 border-t-blue-500 rounded"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={index === 4 ? 230 : 120}
                  height={100}
                />
                <div className="pt-6">
                  <h5 className="font-black text-xl pb-6">
                    <TextColor>{item.title}</TextColor>
                  </h5>
                  {item?.item ? (
                    <ul>
                      {item?.item.map((item: string, i: number) => (
                        <li key={i}>
                          {i + 1}. {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.desc}</p>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default YourTeamsLookDependingOnMarketingNeeds;
