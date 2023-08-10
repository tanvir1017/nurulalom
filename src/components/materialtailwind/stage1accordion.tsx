import { stage1AccordionData } from "@/data/stagesaccordiandata";
import { AccordionDataType } from "@/types/globaltypes";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React from "react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export function Stage1Accordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      {stage1AccordionData.map((accordion: AccordionDataType, i: number) => (
        <Accordion open={open === i + 1} animate={CUSTOM_ANIMATION} key={i}>
          <AccordionHeader
            className="border-none"
            onClick={() => handleOpen(i + 1)}
          >
            <span className="flex items-center">
              <ChevronRightIcon
                className={`w-5 h-5 ${
                  open === i + 1 ? "text-blue-500" : "text-[#0c304a]"
                } duration-300 transition-all ${
                  open === i + 1 ? "rotate-90" : "rotate-0"
                }`}
              />{" "}
              <p
                className={` ${
                  open === i + 1 ? "text-blue-500" : "text-[#0c304a]"
                }`}
              >
                {accordion.title}
              </p>
            </span>
          </AccordionHeader>
          <AccordionBody className="text-start">{accordion.desc}</AccordionBody>
        </Accordion>
      ))}
    </>
  );
}
