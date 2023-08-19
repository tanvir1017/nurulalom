import { aboutCardData } from "@/data/aboutcard";
import { AboutCardDataType } from "@/types/globaltypes";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";

const ProcessOfWorkingWithMeCard = () => {
  return (
    <div className="md:container mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-3">
        {aboutCardData.map((item: AboutCardDataType, i: number) => (
          <Card className="mt-6 md:w-96 w-full" key={i}>
            <Image
              src={item.image}
              alt={item.title}
              width={250}
              height={100}
              className="block mx-auto"
            />
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProcessOfWorkingWithMeCard;
