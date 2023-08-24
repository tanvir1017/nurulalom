"use client";
import { TextColor } from "@/lib/customColorFunc";
import { IconButton, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const VisitMeOn = () => {
  return (
    <section className="container">
      <div className="max-w-6xl mx-auto my-16">
        <div className="grid md:grid-cols-2 gap3 place-items-center">
          <div className="grid grid-rows-2 grid-flow-col">
            <div className="flex items-center space-x-2 space-y-2">
              <Image
                src="/assets/images/resources/marketing-strategy.webp"
                alt="marketing-strategy"
                width={200}
                height={100}
                className="hidden md:block"
              />
              <Image
                src="/assets/images/resources/nazmul-podcast.webp"
                alt="marketing-strategy"
                width={350}
                height={100}
                className="hidden md:block"
              />

              <Image
                src="/assets/images/resources/marketing-strategy.webp"
                alt="marketing-strategy"
                width={100}
                height={100}
                className="md:hidden block"
              />
              <Image
                src="/assets/images/resources/nazmul-podcast.webp"
                alt="marketing-strategy"
                width={200}
                height={100}
                className="md:hidden block"
              />
            </div>
            <div className="flex items-center space-x-2 space-y-2">
              <Image
                src="/assets/images/resources/blue-cta-300x300.png"
                alt="marketing-strategy"
                width={200}
                height={100}
                className="hidden md:block"
              />
              <Image
                src="/assets/images/resources/CMO.webp"
                alt="marketing-strategy"
                width={350}
                height={100}
                className="hidden md:block"
              />{" "}
              <Image
                src="/assets/images/resources/blue-cta-300x300.png"
                alt="marketing-strategy"
                width={100}
                height={100}
                className="md:hidden block"
              />
              <Image
                src="/assets/images/resources/CMO.webp"
                alt="marketing-strategy"
                width={200}
                height={100}
                className="md:hidden block"
              />
            </div>
          </div>
          <div className="md:ml-16">
            <h2 className="text-2xl md:text-4xl py-6 font-extrabold">
              <TextColor>Visit Me On Social Media</TextColor>
            </h2>
            <Typography>
              Hi there! I am just another human who is in love with his work &
              has a proven record of helping companies grow.
            </Typography>

            <div className="space-x-2 my-6 relative ">
              <IconButton
                size="md"
                color="blue"
                variant="text"
                className="p-2 rounded-full bg-blue-50"
              >
                <a
                  href="https://www.facebook.com/nurrconsultant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook className="w-5 h-5" />
                </a>
              </IconButton>
              <IconButton
                size="md"
                color="pink"
                variant="text"
                className="p-2 rounded-full bg-pink-100"
              >
                <a
                  href="https://www.linkedin.com/in/nurconsultant/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="w-5 h-5" />
                </a>
              </IconButton>
              <IconButton
                size="md"
                color="blue-gray"
                variant="text"
                className="p-2 rounded-full bg-blue-gray-50"
              >
                <a
                  href="https://www.linkedin.com/in/nurconsultant/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="w-5 h-5" />
                </a>
              </IconButton>
              <IconButton
                size="md"
                color="red"
                variant="text"
                className="p-2 rounded-full bg-red-50"
              >
                <AiFillYoutube className="w-5 h-5" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitMeOn;
