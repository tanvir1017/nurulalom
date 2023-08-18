"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <section className="container md:my-32 mt-16">
      <div className="max-w-fit mx-auto text-center">
        <Typography variant="h4">
          <TextColor>
            Trusted By Founders At 100+ Companies, Including
          </TextColor>
        </Typography>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="mt-7 md:mt-24">
          <div className="grid grid-cols-3 md:grid-cols-9 place-items-center place-content-center space-x-5">
            {[
              "/assets/images/brand/cramstack.png",
              "/assets/images/brand/prothom-alo.png.webp",
              "/assets/images/brand/southtech.webp",
              "/assets/images/brand/cutoutwix.png",
              "/assets/images/brand/sheba.webp",
              "/assets/images/brand/brainstation23.webp",
              "/assets/images/brand/invogue-Black.png",
              "/assets/images/brand/zantrik.webp",
              "/assets/images/brand/jobike.webp",
            ].map((_: string, i: number) => (
              <div key={i}>
                <Image
                  alt="trusted founders brand image"
                  src={_}
                  height={100}
                  width={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
