"use client";
import { TextColor } from "@/lib/customColorFunc";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";

const CareerHighlights = () => {
  return (
    <div className="bg-[#F3F7FB] p-10">
      <div className="container">
        <div className="max-w-md mx-auto p-12 bg-white rounded-xl shadow-lg">
          <Typography variant="h2" className="pb-6">
            <TextColor>Career Highlights</TextColor>
          </Typography>
          <Typography className="pb-6">
            You can't connect the dots looking forward; you can only connect
            them looking backwards.” - Steve Jobs.
          </Typography>

          <ul className="space-y-5">
            {[
              "Former CMO of a Google Trusted Agency in Austin, TX",
              "Former CMO of a 800+ employee company",
              "Former CEO of a tech startup for 3 years (U.S. and BD)",
              "Former CMO & Country Manager of a Logistics Company",
              "Attended International conferences in Singapore, US, UK, Italy, Germany & many more​",
            ].map((item: string, key: number) => (
              <li className="flex items-center" key={key}>
                <span className="bg-blue-500 rounded-full p-2 block mr-5">
                  <CheckIcon className="h-6 w-6 text-white" />
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareerHighlights;
