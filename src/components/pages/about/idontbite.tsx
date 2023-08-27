"use client";

import { TextColor } from "@/lib/customColorFunc";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const IDontBite = () => {
  return (
    <div className="md:container mt-20 mb-28">
      <div className="max-w-6xl mx-auto bg-[#F7FCFF]">
        <div className="grid md:grid-cols-2 grid-cols-1 place-items-center">
          <Image
            src="/assets/images/about/idontbite.webp"
            alt="Confidentially smiling website owner"
            height={100}
            width={600}
          />
          <div className="bg-[url('/assets/images/about/Decor_I_don_t_bite.svg')] bg-no-repeat  p-10">
            <h2 className="font-extrabold text-3xl pb-6">
              <TextColor>I Don't Bite!</TextColor>
            </h2>
            <div className="space-y-6 pb-6">
              <p>
                Hi there! I m just another human who is in love with his work &
                has a proven record of helping companies grow.
              </p>
              <p>
                I promise you, our 1st conversation will REALLY help you even if
                we don't work together. So please..
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-3 pb-6">
                <FaFacebook className="bg-blue-800 w-8 h-8 rounded-full p-1 text-white cursor-pointer" />
                <FaInstagram className="bg-black w-8 h-8 rounded-full p-1 text-white cursor-pointer" />
                <FaLinkedin className="bg-blue-500 w-8 h-8 rounded-full p-1 text-white cursor-pointer" />
              </div>

              <Link href="/inbound-marketing-consultation" className="block">
                <Button
                  className="py-3 px-6 rounded-full hover:bg-[#0C304A] shadow-lg capitalize"
                  size="md"
                  color="blue"
                >
                  Say Hi!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDontBite;
