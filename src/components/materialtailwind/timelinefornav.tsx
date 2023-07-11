import {
  Timeline,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
} from "@material-tailwind/react";
import Link from "next/link";

const TimelineForNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TimelineConnector />
      <TimelineHeader className="">{children}</TimelineHeader>
    </>
  );
};
export const ServicesNav = () => {
  return (
    <ul className="m-5 lg:h-[250px] overflow-auto" id="scroll">
      <Timeline>
        <TimelineItem>
          <TimelineForNav>
            <TimelineIcon className="bg-gray-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Build a marketing team (Free Guide)</li>
            </Link>
          </TimelineForNav>
          <TimelineForNav>
            <TimelineIcon className="bg-gray-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Build a marketing team (Free Guide)</li>
            </Link>
          </TimelineForNav>
          <TimelineForNav>
            <TimelineIcon className="bg-gray-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Build a marketing team (Free Guide)</li>
            </Link>
          </TimelineForNav>
          <TimelineForNav>
            <TimelineIcon className="bg-gray-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Build a Marketing Strategy Free Course</li>
            </Link>
          </TimelineForNav>
          <TimelineForNav>
            <TimelineIcon className="bg-gray-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Digital Marketing (Free Course)</li>
            </Link>
          </TimelineForNav>
          <TimelineForNav>
            <TimelineIcon className="bg-gray-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Marketing Budget Template</li>
            </Link>
          </TimelineForNav>
          <TimelineForNav>
            <TimelineIcon className="bg-gray-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Buyer Persona Template</li>
            </Link>
          </TimelineForNav>
          <TimelineForNav>
            <TimelineIcon className="bg-gray-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Marketing Blogs</li>
            </Link>
          </TimelineForNav>
        </TimelineItem>
      </Timeline>
    </ul>
  );
};
export const FreeResourceNav = () => {
  return (
    <ul className="m-5 h-[200px] overflow-auto" id="scroll">
      <Timeline>
        <TimelineItem>
          <TimelineForNav>
            <TimelineIcon className="bg-pink-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Build a marketing team (Free Guide)</li>
            </Link>
          </TimelineForNav>
          <TimelineForNav>
            <TimelineIcon className="bg-pink-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Build a marketing team (Free Guide)</li>
            </Link>
          </TimelineForNav>
          <TimelineForNav>
            <TimelineIcon className="bg-pink-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Build a marketing team (Free Guide)</li>
            </Link>
          </TimelineForNav>
          <TimelineForNav>
            <TimelineIcon className="bg-pink-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Build a Marketing Strategy Free Course</li>
            </Link>
          </TimelineForNav>
          <TimelineForNav>
            <TimelineIcon className="bg-pink-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Digital Marketing (Free Course)</li>
            </Link>
          </TimelineForNav>
          <TimelineForNav>
            <TimelineIcon className="bg-pink-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Marketing Budget Template</li>
            </Link>
          </TimelineForNav>
          <TimelineForNav>
            <TimelineIcon className="bg-pink-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Buyer Persona Template</li>
            </Link>
          </TimelineForNav>
          <TimelineForNav>
            <TimelineIcon className="bg-pink-500/95" />
            <Link
              href="/"
              className="mb-3 block bg-white rounded-lg hover:shadow-md duration-200 transition-all p-2"
            >
              <li>Marketing Blogs</li>
            </Link>
          </TimelineForNav>
        </TimelineItem>
      </Timeline>
    </ul>
  );
};

export default TimelineForNav;
