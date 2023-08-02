"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <section className="container my-32">
      <div className="flex justify-center">
        <Typography variant="h4">
          <TextColor>
            Trusted By Founders At 100+ Companies, Including
          </TextColor>
        </Typography>
      </div>
      <div className="mt-24">
        <div className="flex items-center justify-center space-x-5">
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
    </section>
  );
};

export default TrustedBy;
