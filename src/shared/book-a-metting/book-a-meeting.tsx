"use client";
import { TextColor } from "@/lib/customColorFunc";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import {
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Radio,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { BiRename } from "react-icons/bi";
import { BsLink45Deg, BsPhone } from "react-icons/bs";
import { CiSquareInfo } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import DefaultButton from "../button/default-button";
const iWantToHireYou = [
  "Build Strategy: 25,000 Tk/ One-time",
  "Startup: Weekly 1 hour - 25,000 Tk/ Monthly",
  "Advisor: Weekly 2 hours - 50,000 Tk/ Monthly",
  "Build a Team: Weekly 5 hours - 2 Lakh Tk/ Monthly",
  "CMO: Weekly 10 hours - 2 Lac Tk/ Monthly",
];

const jobTitle = ["Founder", "Coder", "Marketer", "Student", "Others"];

const BookAMeeting = () => {
  return (
    <>
      <Typography variant="h2" className="pb-6 md:text-4xl text-2xl ">
        <TextColor>Book A Meeting Today!</TextColor>
      </Typography>
      <Typography className="pb-6">
        This is to explore and answer any questions regarding my consulting
        plans. Talk to you soon!
      </Typography>

      <div className="border-t-4 border-blue-500 border  rounded-lg p-5 shadow bg-white/50 backdrop-blur-2xl">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-y-2">
          <Input
            label="Email"
            required
            size="lg"
            icon={
              <MdAlternateEmail className="w-4 h-4 text-blue-gray-200 inline-flex mr-2" />
            }
          />
          <Input
            label="Phone"
            size="lg"
            required
            type="number"
            icon={
              <BsPhone className="w-4 h-4 text-blue-gray-200 inline-flex mr-2" />
            }
          />
          <Input
            label="Name"
            size="lg"
            required
            icon={
              <BiRename className="w-4 h-4 text-blue-gray-200 inline-flex mr-2" />
            }
          />
          <Input
            label="Website / LinkedIn Profile"
            required
            size="lg"
            icon={
              <BsLink45Deg className="w-4 h-4 text-blue-gray-200 inline-flex mr-2" />
            }
          />
        </div>

        <div className="my-5">
          <Input
            label="Job Title"
            required
            size="lg"
            icon={
              <CiSquareInfo className="w-4 h-4 text-blue-gray-300 inline-flex mr-2" />
            }
          />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-0">
          <div className="text-start">
            <Typography variant="h6">
              I want to hire you for{" "}
              <span className="text-red-500 ml-3">*</span>
            </Typography>
            {iWantToHireYou.map((labelText: string) => (
              <List key={labelText}>
                <ListItem className="p-0 rounded-full">
                  <label
                    htmlFor="Hire_For_Action"
                    className="flex w-full cursor-pointer items-center px-3 md:py-2 py-0.5"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        name="Hire_For"
                        id="Hire_For"
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      {labelText}
                    </Typography>
                  </label>
                </ListItem>
              </List>
            ))}
          </div>{" "}
          <div className="text-start">
            <Typography variant="h6">
              Job Title
              <span className="text-red-500 ml-3">*</span>
            </Typography>
            {jobTitle.map((labelText: string) => (
              <List key={labelText}>
                <ListItem className="p-0 rounded-full">
                  <label
                    htmlFor="Job_Title_Action"
                    className="flex w-full cursor-pointer items-center px-3 md:py-2 py-0.5"
                  >
                    <ListItemPrefix className="mr-3">
                      <Radio
                        name="Job_Title"
                        id="Job_Title"
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      {labelText}
                    </Typography>
                  </label>
                </ListItem>
              </List>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <Textarea
            label="Where can I help you the most? (If any)"
            size="lg"
            resize
          />
        </div>
        <div className="mt-5">
          <Link className="block" href="/inbound-marketing-consultation">
            <DefaultButton className="rounded-full">
              Send A Consulting Request
              <PaperAirplaneIcon
                className="w-4 h-4 inline ml-3"
                strokeWidth={2.5}
              />
            </DefaultButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BookAMeeting;
