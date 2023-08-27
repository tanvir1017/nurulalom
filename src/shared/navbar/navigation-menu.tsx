"use client";
import { Services, freeResource } from "@/data/navmenu";
import { cn } from "@/lib/utils";
import { NestedNavType } from "@/types/globaltypes";
import {
  ArrowRightIcon,
  Bars3Icon,
  BoltIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  FaceSmileIcon,
  FlagIcon,
  GiftIcon,
  RocketLaunchIcon,
  Square3Stack3DIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavList = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isNavOpenForMobile, setIsNavOpenForMobile] = useState<boolean>(false);
  const [isServiceOpen, setIsServiceOpen] = useState<boolean>(false);
  const [isOpenResources, setIsOpenResources] = useState<boolean>(false);

  return (
    <>
      <div
        className="relative mr-8 "
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(!true)}
      >
        <button className="flex items-center  p-5">
          <Square3Stack3DIcon className="w-5 h-5 mr-3" />
          Menu
          <ChevronDownIcon
            className={cn("w-4 h-4 ml-2", {
              ["transform rotate-0 transition-all duration-200"]: isMenuOpen,
              ["transform rotate-180 transition-all duration-200"]: !isMenuOpen,
            })}
          />
        </button>

        <ul
          className={cn(
            "menu-ul absolute top-16 bg-white shadow-xl h-auto w-[13.375rem] rounded-xl p-2",
            {
              ["block"]: isMenuOpen,
              ["hidden"]: !isMenuOpen,
            }
          )}
        >
          <li
            className="hover:bg-gray-100 duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer relative"
            onMouseEnter={() => setIsServiceOpen(true)}
            onMouseLeave={() => setIsServiceOpen(!true)}
          >
            <Link
              href="/marketing-consulting"
              className="flex items-center justify-between"
            >
              <span className="flex items-center">
                <BoltIcon className={cn("w-4 h-4 mr-2 text-blue-500")} />{" "}
                Services
              </span>{" "}
              <ChevronRightIcon className={cn("w-4 h-4 ml-2")} />
            </Link>
            <ul
              className={cn(
                "absolute -top-2 left-48 right-0 bg-white shadow-xl h-auto w-[17.375rem] rounded-xl p-2",
                {
                  ["block"]: isServiceOpen,
                  ["hidden"]: !isServiceOpen,
                }
              )}
            >
              {Services.map((item: NestedNavType) => (
                <Link href={item.href} key={item.href}>
                  <li className="hover:bg-gray-100 duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer relative">
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </li>
          <Link href="/price">
            <li className="hover:bg-gray-100 duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer">
              <span className="flex items-center">
                <RocketLaunchIcon
                  className={cn("w-4 h-4 mr-2 text-purple-500")}
                />{" "}
                Price
              </span>
            </li>
          </Link>
          <Link href="/marketing-case-studies">
            <li className="hover:bg-gray-100 duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer">
              <span className="flex items-center">
                <FaceSmileIcon className={cn("w-4 h-4 mr-2 text-orange-500")} />
                Client Success
              </span>
            </li>
          </Link>
          <Link href="/about">
            <li className="hover:bg-gray-100 duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer">
              <span className="flex items-center">
                <FlagIcon className={cn("w-4 h-4 mr-2 text-[#e11d48]")} />
                About
              </span>
            </li>
          </Link>
          <li
            className="hover:bg-gray-100 duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer relative"
            onMouseEnter={() => setIsOpenResources(true)}
            onMouseLeave={() => setIsOpenResources(!true)}
          >
            <Link
              href="/resources"
              className="flex items-center justify-between"
            >
              <span className="flex items-center">
                <GiftIcon className={cn("w-4 h-4 mr-2 text-[#059669]")} />
                Free resources
              </span>
              <ChevronRightIcon className={cn("w-4 h-4 ml-2")} />
            </Link>
            <ul
              className={cn(
                "absolute -top-2 left-48 right-0 bg-white shadow-xl h-auto w-[19.375rem] rounded-xl p-2",
                {
                  ["block"]: isOpenResources,
                  ["hidden"]: !isOpenResources,
                }
              )}
            >
              {freeResource.map((item: NestedNavType) => (
                <Link href={item.href} key={item.href}>
                  <li className="hover:bg-gray-100 duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer relative">
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
const MobileNavList = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isNavOpenForMobile, setIsNavOpenForMobile] = useState<boolean>(false);
  const [isServiceOpen, setIsServiceOpen] = useState<boolean>(false);
  const [isOpenResources, setIsOpenResources] = useState<boolean>(false);

  const handleServiceOpen = () => {
    if (isServiceOpen) {
      setIsServiceOpen(!true);
    } else {
      setIsOpenResources(!true);
      setIsServiceOpen(true);
    }
  };
  const handleFreeResourceOpen = () => {
    if (isOpenResources) {
      setIsOpenResources(!true);
    } else {
      setIsServiceOpen(!true);
      setIsOpenResources(true);
    }
  };

  const handleMobileNav = () => {
    if (isNavOpenForMobile) {
      setIsNavOpenForMobile(!true);
      setIsMenuOpen(!true);
    } else {
      setIsNavOpenForMobile(true);
      setIsMenuOpen(true);
    }
  };
  return (
    <>
      <div className="mr-8 z-50 ">
        <IconButton
          color="white"
          onClick={handleMobileNav}
          className="block md:hidden"
        >
          {!isNavOpenForMobile ? (
            <Bars3Icon className="w-5 h-5" />
          ) : (
            <XMarkIcon className="w-5 h-5" />
          )}
        </IconButton>

        <ul
          className={cn(
            "absolute top-14 left-0 bg-white shadow-xl w-full h-auto p-2",
            {
              ["block"]: isMenuOpen,
              ["hidden"]: !isMenuOpen,
            }
          )}
        >
          <li
            className={
              " px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer relative focus:outline-none focus:border-none"
            }
          >
            <Link
              href="/marketing-consulting"
              className="flex items-center justify-between"
              onClick={handleServiceOpen}
            >
              <span className="flex items-center">
                <BoltIcon className={cn("w-4 h-4 mr-2 text-blue-500")} />{" "}
                Services
              </span>{" "}
              <ChevronRightIcon
                className={cn(
                  "w-4 h-4 ml-2 rotate-0 duration-300 transition-transform",
                  {
                    [" rotate-90 "]: isServiceOpen,
                  }
                )}
              />
            </Link>

            <ul
              className={cn("h-auto w-full rounded-xl p-2", {
                ["block"]: isServiceOpen,
                ["hidden"]: !isServiceOpen,
              })}
            >
              {Services.map((item: NestedNavType, i: number) => (
                <Link href={item.href} key={item.href}>
                  <li
                    className={cn(
                      "p-3 font-normal text-sm cursor-pointer relative border-gray-100 border-b-[0.5px]"
                    )}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </li>
          <Link href="/price">
            <li className="hover:bg-gray-100 duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer">
              <span className="flex items-center">
                <RocketLaunchIcon
                  className={cn("w-4 h-4 mr-2 text-purple-500")}
                />{" "}
                Price
              </span>
            </li>
          </Link>
          <Link href="/marketing-case-studies">
            <li className="hover:bg-gray-100 duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer">
              <span className="flex items-center">
                <FaceSmileIcon className={cn("w-4 h-4 mr-2 text-orange-500")} />
                Client Success
              </span>
            </li>
          </Link>
          <Link href="/about">
            <li className="hover:bg-gray-100 duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer">
              <span className="flex items-center">
                <FlagIcon className={cn("w-4 h-4 mr-2 text-[#e11d48]")} />
                About
              </span>
            </li>
          </Link>
          <li
            className={
              " px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer relative"
            }
          >
            <Link
              onClick={handleFreeResourceOpen}
              href="/resources"
              className="flex items-center justify-between"
            >
              <span className="flex items-center">
                <GiftIcon className={cn("w-4 h-4 mr-2 text-[#059669]")} />
                Free resources
              </span>
              <ChevronRightIcon
                className={cn(
                  "w-4 h-4 ml-2 rotate-0 duration-300 transition-transform",
                  {
                    [" rotate-90 "]: isOpenResources,
                  }
                )}
              />
            </Link>
            <ul
              className={cn("h-auto w-full rounded-xl p-2", {
                ["block"]: isOpenResources,
                ["hidden"]: !isOpenResources,
              })}
            >
              {freeResource.map((item: NestedNavType, i: number) => (
                <Link href={item.href} key={item.href} className="py-3">
                  <li
                    className={cn(
                      "p-3 font-normal text-sm cursor-pointer relative border-gray-100 border-b-[0.5px]"
                    )}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </li>
          <Link href="/inbound-marketing-consultation">
            <li className="hover:bg-gray-100 duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer">
              <span className="flex items-center">
                <CalendarDaysIcon
                  className={cn("w-4 h-4 mr-2 text-blue-gray-500")}
                />
                Book a consultation
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

const NavigationMenu = () => {
  return (
    <nav className="bg-[#f0f7fb] lg:max-w-none lg:rounded-none lg:border-none md:max-w-none md:rounded-none md:border-none py-2 shadow-lg">
      <div className="md:container">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Image
                  src="/assets/images/brand-logo-black.svg"
                  alt="Brand logo for nurul alom"
                  width={200}
                  height={100}
                />
              </Link>
            </div>
            <div>
              <div className="flex items-center">
                <span className="md:block hidden">
                  <NavList />
                </span>
                <span className="block md:hidden">
                  <MobileNavList />
                </span>

                <Link
                  href="/inbound-marketing-consultation"
                  className="md:block hidden"
                >
                  <Button
                    className="py-3 rounded-full bg-[#0C304A] text-xs hover:shadow-none shadow-none flex items-center"
                    size="lg"
                  >
                    Book a Meting{" "}
                    <ArrowRightIcon
                      strokeWidth={2.5}
                      className={` h-3 w-3 transition-transform ml-3`}
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
