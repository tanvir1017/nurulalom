"use client";

import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const GetMoreLeads = () => {
  return (
    <section className="container md:my-32 mt-16">
      <div className="max-w-fit mx-auto ">
        <Typography variant="h2" className="hidden md:block text-center">
          <TextColor>
            Get More Leads, Convert More Clients And <br /> Build A Solid Brand.
          </TextColor>
        </Typography>
        <Typography variant="h4" className="block md:hidden text-start">
          <TextColor>What I deliver as Your marketing consultant</TextColor>
        </Typography>

        <Typography className="mt-7 hidden md:block text-center">
          Will do anything that has to do with bringing you more customers
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:space-y-0 space-y-8   md:place-items-center mt-16 md:px-12 px-0  md:text-center text-start">
        <div>
          <Image
            className="block md:mx-auto md:mb-10 mb-5"
            src="/assets/images/Strategy-_-Execution-01-01.svg"
            alt="Marketing Strategy &  Execution"
            width={100}
            height={100}
          />
          <Typography variant="h5">
            <span className="font-bold">
              Marketing Strategy & <br /> Execution
            </span>
          </Typography>

          <Typography className="md:mt-5 mt-2">
            Not just digital marketing strategy. <br /> Execution as well.
          </Typography>
        </div>
        <div>
          <Image
            className="block md:mx-auto md:mb-10 mb-5"
            src="/assets/images/Lead-Generation-01-01.svg"
            alt="Constant Lead Generation"
            width={100}
            height={100}
          />
          <Typography variant="h5">
            <span className="font-bold">
              Constant Lead <br /> Generation
            </span>
          </Typography>

          <Typography className="md:mt-5 mt-2">
            Sales pipeline filled with leads. I <br /> mean sales qualified
            leads.
          </Typography>
        </div>
        <div>
          <Image
            className="block md:mx-auto md:mb-10 mb-5"
            src="/assets/images/In-House-Marketing-Team-01-01.svg"
            alt="Build An In-House Marketing Team"
            width={100}
            height={100}
          />
          <Typography variant="h5">
            <span className="font-bold">
              Build An In-House <br /> Marketing Team
            </span>
          </Typography>

          <Typography className="md:mt-5 mt-2">
            Establish your own in-house <br /> marketing team.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default GetMoreLeads;
