import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export function Stage2Accordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Typography variant="h4" className="text-[#0c304a] underline pt-6">
        Benefits Of A Remote Team:
      </Typography>
      <div className="ml-5">
        <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
          <span className="flex items-center">
            <ChevronRightIcon
              className={`w-5 h-5 duration-300 transition-all hover:cursor-pointer ${
                open === 1 ? "rotate-90 text-blue-500" : "rotate-0"
              }`}
              onClick={() => handleOpen(1)}
            />{" "}
            <AccordionHeader
              className={`border-none text-lg ${
                open === 1
                  ? "text-blue-500 hover:text-blue-500"
                  : "text-[#0c304a]"
              }`}
              onClick={() => handleOpen(1)}
            >
              Reduce Your Costs By Up To 75%
            </AccordionHeader>
          </span>
          <AccordionBody>
            <Typography variant="h6" className="text-[#0c304a] -mt-5 ml-2">
              Low living cost advantage:
            </Typography>
            <Typography className="ml-5">
              Hire top-quality marketing professionals at an affordable price
              and reduce your marketing costs with the help of our offshore
              team. Given the low cost of living, it is easy to hire extremely
              talented people for a fraction of the cost.
            </Typography>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
          <span className="flex items-center">
            <ChevronRightIcon
              className={`w-5 h-5 duration-300 transition-all hover:cursor-pointer ${
                open === 2 ? "rotate-90 text-blue-500" : "rotate-0"
              }`}
              onClick={() => handleOpen(2)}
            />{" "}
            <AccordionHeader
              className={`border-none text-lg ${
                open === 2
                  ? "text-blue-500 hover:text-blue-500"
                  : "text-[#0c304a]"
              }`}
              onClick={() => handleOpen(2)}
            >
              24 Hours Turnaround
            </AccordionHeader>
          </span>

          <AccordionBody>
            <Typography className="ml-5">
              Imagine giving work before the end of your day and getting
              everything delivered right when you wake up. How awesome is that?
              It can happen as your remote team will work while you sleep.
              24-hour turnaround time.
            </Typography>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
          <span className="flex items-center">
            <ChevronRightIcon
              className={`w-5 h-5 duration-300 transition-all hover:cursor-pointer ${
                open === 3 ? "rotate-90 text-blue-500" : "rotate-0"
              }`}
              onClick={() => handleOpen(3)}
            />{" "}
            <AccordionHeader
              className={`border-none text-lg ${
                open === 3
                  ? "text-blue-500 hover:text-blue-500"
                  : "text-[#0c304a]"
              }`}
              onClick={() => handleOpen(3)}
            >
              Flexibility & Scalability
            </AccordionHeader>
          </span>

          <AccordionBody>
            <ul className="space-y-3 list-disc">
              <li className="ml-5">
                <strong className="font-bold">flexibility:</strong> Offshore
                remote teams offer flexibility in terms of location, time zone,
                and working hours.
              </li>
              <li className="ml-5">
                <strong className="font-bold">scalability:</strong> It is easier
                to scale up or down with an offshore remote team, as you can
                easily add or remove team members as needed.
              </li>
              <li className="ml-5">
                <strong className="font-bold">Improved efficiency:</strong>{" "}
                Offshore remote teams can often work more efficiently due to the
                use of technology and communication tools, leading to faster
                turnaround times and better results.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}
