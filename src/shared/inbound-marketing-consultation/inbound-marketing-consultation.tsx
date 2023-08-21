"use client";
import { TextColor } from "@/lib/customColorFunc";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import BookAMeeting from "../book-a-metting/book-a-meeting";

const InboundMarketingConsultation = () => {
  return (
    <div className="">
      <div className="max-w-xl mx-auto text-center">
        <Typography variant="h2" className="md:pb-6 pb-2">
          <TextColor>Contact Me</TextColor>
        </Typography>
        <Typography className="md:pb-6 pb-3 md:block hidden">
          <TextColor>Reach us today, we would love to hear from you!</TextColor>
        </Typography>
        <div className="flex flex-col md:flex-row items-center justify-center  md:justify-around md:mt-7 mt-4 md:space-y-0 space-y-2">
          <span className="flex items-center space-x-3 mr-5">
            <PhoneIcon className="w-5 h-5" />
            <Typography variant="h5">+8801721853227 </Typography>
          </span>
          <span className="flex items-center space-x-3">
            <EnvelopeIcon className="w-5 h-5" />
            <Typography variant="h5">hello@najmc.com</Typography>
          </span>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center md:mt-28 mt-14 pb-10">
        <BookAMeeting />
      </div>
    </div>
  );
};

export default InboundMarketingConsultation;
