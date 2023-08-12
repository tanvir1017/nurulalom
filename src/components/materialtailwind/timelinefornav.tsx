"use client";

import { Services, freeResource } from "@/data/navmenu";
import { NestedNavType } from "@/types/globaltypes";
import {
  Timeline,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
} from "@material-tailwind/react";
import Link from "next/link";

const TimelineForNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TimelineConnector />
      <TimelineHeader className="">{children}</TimelineHeader>
    </>
  );
};
export const ServicesNav = () => {
  return (
    <section className="m-5 h-[250px] overflow-auto" id="scroll">
      <Timeline>
        <TimelineItem>
          {Services.map((item: NestedNavType, i: number) => (
            <TimelineForNav key={i}>
              <TimelineIcon className="bg-gray-500/95" />
              <span className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2">
                <Link href={item.href}> {item.title} </Link>
              </span>
            </TimelineForNav>
          ))}
        </TimelineItem>
      </Timeline>
    </section>
  );
};
export const FreeResourceNav = () => {
  return (
    <section className="m-5 h-[200px] overflow-auto" id="scroll">
      <Timeline>
        <TimelineItem>
          {freeResource.map((item: NestedNavType, i: number) => (
            <TimelineForNav key={i}>
              <TimelineIcon className="bg-pink-500/95" />
              <span className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2">
                <Link href={item.href}>{item.title}</Link>
              </span>
            </TimelineForNav>
          ))}
        </TimelineItem>
      </Timeline>
    </section>
  );
};

export default TimelineForNav;
