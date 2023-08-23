"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Button, Input } from "@material-tailwind/react";
import Image from "next/image";

const BuyerPersonaTemplate = () => {
  return (
    <section className="py-40 bg-gradient-to-t from-[#a3ccdd] via-[#EBF7FF] to-[#BBD2DE]">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="md:grid md:grid-cols-2 justify-items-end">
            <div>
              <h1 className="text-2xl md:text-5xl font-bold pb-6">
                <TextColor>Buyer Persona Template</TextColor>
              </h1>
              <p className="pb-6">
                Quickly build your customer segments and know who to market.
              </p>
              <div>
                <span className="grid md:grid-cols-2 gap-4 pb-5">
                  <Input
                    label="Name"
                    color="blue"
                    size="lg"
                    className="bg-white"
                  />
                  <Input
                    label="Email"
                    color="blue"
                    size="lg"
                    className="bg-white"
                  />
                </span>
                <Button color="blue" className="rounded-full w-full">
                  Download Now
                </Button>
              </div>
              <p className="pt-6">
                I'm committed to your privacy. The information you provide to me
                is to contact you about our relevant content and services. You
                may unsubscribe from these communications at any time. 🙂
              </p>
            </div>
            <div>
              <Image
                width={400}
                height={100}
                alt="Buyer Persona Template Illustration"
                src="/assets/images/buyer-persona-template/Still_not_sure_bg_shape.svg"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyerPersonaTemplate;
