"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import { CmoCardDataType } from "@/types/globaltypes";
import { ArrowLongRightIcon, ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function CmoCard({ item }: { item: CmoCardDataType }) {
  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none "
      >
        <Image alt={item.title} src={item.image} width={400} height={100} />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {item.title}
        </Typography>
        <div className="md:my-5 my-3 space-y-3">
          <p className="flex md:items-center md:text-base text-sm">
            <strong className="flex items-center mr-2 ">
              <ClockIcon
                strokeWidth={2.5}
                className="text-orange-300 md:h-5 md:w-5 h-4 w-4 mr-2"
              />{" "}
              {item.time}
            </strong>{" "}
            <span>{item.wm}</span>
          </p>
          <p className="flex items-center md:text-base text-sm">
            <strong className="flex items-center  mr-2 ">{item.price}</strong>{" "}
            <span>Per month</span>
          </p>
        </div>
        <Typography
          variant="lead"
          color="gray"
          className="mt-3 font-normal hidden md:block"
        >
          {item.shortDescription}
        </Typography>
        <Typography color="gray" className="mt-3 font-normal block md:hidden">
          {item.shortDescription}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          <Button variant="text" className="flex items-center gap-2">
            Explore Plan{" "}
            <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
