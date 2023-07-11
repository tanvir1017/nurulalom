import { connect } from "@/data/footerdata";
import { TextColor } from "@/lib/customColorFunc";
import { SiteMapType } from "@/types/globaltypes";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

const Connect = () => {
  return (
    <div>
      <div className="mb-6">
        <Typography variant="h5">Let's Connect</Typography>
      </div>
      <TextColor>
        <ul className="space-y-3 ml-5">
          {connect.map((item: SiteMapType, i: number) => (
            <li key={i} className="flex items-center">
              {" "}
              <Link href={item.href}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </TextColor>{" "}
      <div className="mb-7 mt-14">
        <Typography variant="h6">Not sure where to start?</Typography>
      </div>
      <div>
        <Button
          className="py-3 px-7  rounded-full hover:bg-[#0C304A] shadow-lg hover:scale-110 duration-300 flex items-center normal-case"
          size="lg"
          color="blue"
        >
          Start here
          <ArrowRightIcon
            strokeWidth={2.5}
            className={`h-5 w-5 transition-transform ml-3`}
          />
        </Button>

        <div className="mb-3 mt-6">
          <Typography>If you don't want to see my ads again.</Typography>
        </div>
        <b className="text-blue-500 cursor-pointer">click here</b>
      </div>
    </div>
  );
};

export default Connect;
