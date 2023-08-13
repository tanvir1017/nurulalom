"use client";
import { TextColor } from "@/lib/customColorFunc";
import { CheckIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Radio,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { BiRename } from "react-icons/bi";
import { BsLink45Deg, BsPhone } from "react-icons/bs";
import { CiSquareInfo } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";

const ReadyToBuildContactForm = () => {
  return (
    <section className="container">
      <div>
        <div className="max-w-fit mx-auto text-center space-y-5">
          <Typography variant="h2">
            <TextColor>
              I'm Ready To Help You Build Your Team - Start Now!
            </TextColor>
          </Typography>
          <Typography variant="h5">
            <TextColor>Build In-House Team Plan</TextColor>
          </Typography>

          <ul className="flex items-center justify-center space-x-5">
            {["20 Hours a month", "Total 4 Months", "2 Lac Taka per month"].map(
              (item: string) => (
                <li key={item}>
                  <CheckIcon
                    strokeWidth={4.5}
                    className="w-4 h-4 text-blue-500 inline-flex mr-2"
                  />

                  {item}
                </li>
              )
            )}
          </ul>

          <Typography>
            Book a meeting and get started as soon as 5 days.
          </Typography>

          <div className="border-t-4 border-blue-500 border  rounded-lg p-5">
            <div className="grid grid-cols-2 gap-5">
              <Input
                label="Email"
                required
                size="lg"
                icon={
                  <MdAlternateEmail className="w-4 h-4 text-blue-gray-200 inline-flex mr-2" />
                }
              />
              <Input
                label="Phone"
                size="lg"
                required
                type="number"
                icon={
                  <BsPhone className="w-4 h-4 text-blue-gray-200 inline-flex mr-2" />
                }
              />
              <Input
                label="Name"
                size="lg"
                required
                icon={
                  <BiRename className="w-4 h-4 text-blue-gray-200 inline-flex mr-2" />
                }
              />
              <Input
                label="Website / LinkedIn Profile"
                required
                size="lg"
                icon={
                  <BsLink45Deg className="w-4 h-4 text-blue-gray-200 inline-flex mr-2" />
                }
              />
            </div>

            <div className="my-5">
              <Input
                label="Job Title"
                required
                size="lg"
                icon={
                  <CiSquareInfo className="w-4 h-4 text-blue-gray-300 inline-flex mr-2" />
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="text-start">
                <Typography variant="h6">TEAM I AM INTERESTED IN</Typography>
                {[
                  "Social Media Team",
                  "SEO Team",
                  "Demand Gen Team",
                  "Video Production",
                  "Complete Marketing Team",
                  "Others",
                ].map((labelText: string) => (
                  <List key={labelText}>
                    <ListItem className="p-0 rounded-full">
                      <label
                        htmlFor="IAmInterestedIn"
                        className="flex w-full cursor-pointer items-center px-3 py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <Radio
                            name="IAmInterestedIn"
                            id="IAmInterestedIn"
                            ripple={false}
                            className="hover:before:opacity-0"
                            containerProps={{
                              className: "p-0",
                            }}
                          />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="font-medium">
                          {labelText}
                        </Typography>
                      </label>
                    </ListItem>
                  </List>
                ))}
              </div>{" "}
              <div className="text-start">
                <Typography variant="h6">
                  YOUR MONTHLY MARKETING BUDGET{" "}
                  <span className="text-red-500 :">*</span>
                </Typography>
                {[
                  "Less than $2,500",
                  "$2,500 - $5,000",
                  "$5,000 - $10,000",
                  "$10,000+",
                ].map((labelText: string) => (
                  <List key={labelText}>
                    <ListItem className="p-0 rounded-full">
                      <label
                        htmlFor="MonthlyMarketingBudget"
                        className="flex w-full cursor-pointer items-center px-3 py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <Radio
                            name="MonthlyMarketingBudget"
                            id="MonthlyMarketingBudget"
                            ripple={false}
                            className="hover:before:opacity-0"
                            containerProps={{
                              className: "p-0",
                            }}
                          />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="font-medium">
                          {labelText}
                        </Typography>
                      </label>
                    </ListItem>
                  </List>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <Textarea
                label="ANYTHING ELSE YOU WANT TO ADD?"
                size="lg"
                resize
              />
            </div>
            <div className="mt-5">
              <Button className="rounded-full">Book A Meeting</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBuildContactForm;
