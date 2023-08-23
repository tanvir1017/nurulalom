import { FaFingerprint } from "react-icons/fa";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { MdOutlineSendTimeExtension, MdSyncProblem } from "react-icons/md";

const TopicsCover = () => {
  return (
    <section>
      <div className="bg-[#F8FAF9]">
        <div className="container">
          <div className="md:py-20 py-12 ">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-8 items-center">
                <div className="col-span-3 ">
                  <div className="bg-[#1C8BAA] md:h-1 h-0.5"></div>
                </div>
                <div className="text-center col-span-2">
                  <h5 className="text-2xl font-bold ">Topics Covered</h5>
                </div>
                <div className="col-span-3">
                  <div className=" bg-[#1C8BAA] md:h-1 h-0.5"></div>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto md:py-24 py-12">
              <div className="grid md:grid-cols-4 grid-cols-2 gap-3 md:place-items-center text-center md:text-start">
                <div>
                  <button className="bg-[#1C8BAA] p-4 mx-auto block">
                    <FaFingerprint className="w-9 h-9 text-white" />
                  </button>
                  <h6 className="md:text-lg text-base font-semibold md:mt-7 mt-4 ">
                    Personal Information
                  </h6>
                </div>
                <div>
                  <button className="bg-[#1C8BAA] p-4 mx-auto block">
                    <MdSyncProblem className="w-9 h-9 text-white" />
                  </button>

                  <h6 className="md:text-lg text-base font-semibold md:mt-7 mt-4 ">
                    Problems
                  </h6>
                </div>
                <div>
                  <button className="bg-[#1C8BAA] p-4 mx-auto block">
                    <MdOutlineSendTimeExtension className="w-9 h-9 text-white" />
                  </button>

                  <h6 className="md:text-lg text-base font-semibold md:mt-7 mt-4 ">
                    Solutions
                  </h6>
                </div>
                <div>
                  <button className="bg-[#1C8BAA] p-4 mx-auto block">
                    <FaFileCircleQuestion className="w-9 h-9 text-white" />
                  </button>
                  <h6 className="md:text-lg text-base font-semibold md:mt-7 mt-4 ">
                    Custom Questions
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicsCover;
