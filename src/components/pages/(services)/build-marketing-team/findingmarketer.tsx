"use client";
import { TextColor } from "@/lib/customColorFunc";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const FindingMarketer = () => {
  return (
    <section className="container mt-28">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="pb-6 text-4xl font-bold">
          <TextColor>
            It's Not About Finding A Marketer, It's About Creating A Marketing
            Department.
          </TextColor>
        </h2>
        <Typography className="pb-6">
          A team solely committed to your project, maximizing efficiency and
          focus.
        </Typography>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-5 mt-16">
          {/* YOU DON’T NEED 1,000 CVS. CARD */}
          <div className="bg-[#F7FBFD] border-t-blue-500 border-t-4 rounded-lg p-10 shadow">
            <div>
              <Image
                src="/assets/images/build-marketing-team/find-cvs-for-mkt.png.webp"
                alt="find cvs for mkt"
                width={250}
                height={100}
                className="mx-auto mb-10"
              />
            </div>
            <div>
              <div className="space-y-5">
                <Typography variant="h3">
                  <TextColor>
                    {" "}
                    You Don't Need 1,000 CVs. You Need 1 Right Candidate.
                  </TextColor>
                </Typography>

                <Typography>
                  We are here to help you connect the dots with in-depth
                  marketing knowledge and pick out the best fir for your
                  company.
                </Typography>
                <Typography>
                  Let us shoulder the lengthy and time-consuming recruitment
                  procedure and help you to on-board a new person.
                </Typography>
              </div>

              <div className="pt-6 pb-10 space-y-3">
                <span className="flex items-center ">
                  <CheckIcon className="w-4 h-4 text-white bg-blue-500 rounded-full mr-2" />

                  <p className="text-sm">Get started as soon as in 1 month</p>
                </span>
                <span className="flex items-center ">
                  <CheckIcon className="w-4 h-4 text-white bg-blue-500 rounded-full mr-2" />
                  <p className="text-sm">Deep industry knowledge</p>
                </span>
                <span className="flex items-center ">
                  <CheckIcon className="w-4 h-4 text-white bg-blue-500 rounded-full mr-2" />
                  <p className="text-sm">Hiring made fast and easy</p>
                </span>
              </div>
            </div>
          </div>{" "}
          {/* THOROUGHLY VETTED TALENT. TRAINED, EVERY WEEK. CARD */}
          <div className="bg-[#F7FBFD] border-t-blue-500 border-t-4 rounded-lg p-10 shadow">
            <div>
              <Image
                src="/assets/images/build-marketing-team/vetted-talent.svg"
                alt="find cvs for mkt"
                width={300}
                height={100}
                className="mx-auto mb-10"
              />
            </div>
            <div>
              <div className="space-y-5">
                <Typography variant="h3">
                  <TextColor>
                    {" "}
                    Thoroughly Vetted Talent. Trained, Every Week.
                  </TextColor>
                </Typography>

                <Typography>
                  Rigorous testing, vetting, and training to guarantee top-notch
                  professionals for your team.
                </Typography>
                <p>
                  <strong className="">Streamlined Processes:</strong>{" "}
                  Transparent and accountable processes for smooth team
                  operations
                </p>
                <p>
                  <strong className="">Team Specialists:</strong> Marketing We
                  exclusively build marketing teams, ensuring mastery in the
                  field.
                </p>
                <p>
                  <strong className="">Team Management: </strong> Expert Our
                  marketing managers and CMOs oversee projects, ensuring
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindingMarketer;
