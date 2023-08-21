"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";

const MyPhilosophies = () => {
  return (
    <section className="container my-28 md:block hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-5 gap-3">
        <div className="border-r border-gray-300 col-span-2">
          <Typography variant="h3">
            <TextColor>My Philosophies</TextColor>
          </Typography>
        </div>
        <div className="ml-16 col-span-3">
          <p className="font-black text-7xl text-blue-500">&#128630;</p>
          <Typography className="font-medium text-2xl">
            <TextColor>
              If you think I'm expensive, then you should hire someone bad and
              see what will that cost you.
            </TextColor>
          </Typography>
          <div className="my-10 space-y-4">
            {[
              "LEAD GENERATION 1ST. BRANDING 2ND",
              "YOU DON'T INVEST; YOU DON'T EARN",
              "MARKETING SHOULD BE MEASURABLE",
            ].map((item: string) => (
              <Typography variant="h6" className="uppercase" key={item}>
                <TextColor>{item}</TextColor>
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPhilosophies;
