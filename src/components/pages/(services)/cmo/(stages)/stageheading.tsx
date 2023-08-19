import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";

const StageHeading = ({
  stageLevel,
  title,
  period,
  text,
}: {
  stageLevel: string;
  title: string;
  period: string;
  text: string;
}) => {
  return (
    <div className="mx-w-6xl text-center mx-auto ">
      <div>
        <div className="md:space-y-5 space-y-3">
          <Typography
            variant="h4"
            className="text-blue-500 md:normal-case uppercase md:text-2xl text-lg"
          >
            {stageLevel}
          </Typography>
          <Typography
            variant="h2"
            className="md:text-4xl text-2xl font-black md:font-bold"
          >
            <TextColor>{title}</TextColor>
          </Typography>
          <Typography
            variant="h5"
            className="text-blue-500 md:text-2xl text-lg"
          >
            <TextColor>{period}</TextColor>
          </Typography>
        </div>
        <p className="max-w-2xl text-center mx-auto pt-6 md:block hidden">
          {text}
        </p>
      </div>
    </div>
  );
};

export default StageHeading;
