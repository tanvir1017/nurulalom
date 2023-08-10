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
        <div className="space-y-5">
          <Typography variant="h4" className="text-blue-500">
            {stageLevel}
          </Typography>
          <Typography variant="h2">
            <TextColor>{title}</TextColor>
          </Typography>
          <Typography variant="h5" className="text-blue-500">
            <TextColor>{period}</TextColor>
          </Typography>
        </div>
        <p className="max-w-2xl text-center mx-auto pt-6">{text}</p>
      </div>
    </div>
  );
};

export default StageHeading;
