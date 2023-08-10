"use client";

import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const GetMoreLeads = () => {
  return (
    <section className="container my-32">
      <div className="text-center">
        <Typography variant="h2">
          <TextColor>
            Get More Leads, Convert More Clients And <br /> Build A Solid Brand.
          </TextColor>
        </Typography>
        <div className="mt-7">
          <Typography>
            Will do anything that has to do with bringing you more customers
          </Typography>
        </div>
      </div>

      <div className="grid grid-cols-3 place-items-center mt-16 px-12 text-center">
        <div>
          <Image
            className="block mx-auto mb-10"
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
          <div className="mt-5">
            <Typography>
              Not just digital marketing strategy. <br /> Execution as well.
            </Typography>
          </div>
        </div>
        <div>
          <Image
            className="block mx-auto mb-10"
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
          <div className="mt-5">
            <Typography>
              Sales pipeline filled with leads. I <br /> mean sales qualified
              leads.
            </Typography>
          </div>
        </div>
        <div>
          <Image
            className="block mx-auto mb-10"
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
          <div className="mt-5">
            <Typography>
              Establish your own in-house <br /> marketing team.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetMoreLeads;
