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
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavList = () => {
  const pathname = usePathname();

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
        <div className="relative">
          <button className="flex items-center  p-5 group/buttonHover">
            <Square3Stack3DIcon className="w-5 h-5 mr-3" />
            Menu
            <ChevronDownIcon className={cn("w-4 h-4 ml-2")} />
            <div
              className={cn(
                "absolute bg-blue-500 duration-300 transition-all h-1 w-0 bottom-0 group-hover/buttonHover:visible collapse group-hover/buttonHover:w-3/4"
              )}
            ></div>
          </button>
        </div>

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
            className={cn(
              "duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer relative",
              {
                ["bg-blue-500"]: pathname === "/marketing-consulting",
                ["hover:bg-gray-100 "]: pathname !== "/marketing-consulting",
              }
            )}
            onMouseEnter={() => setIsServiceOpen(true)}
            onMouseLeave={() => setIsServiceOpen(!true)}
          >
            <Link
              href="/marketing-consulting"
              className={cn("flex items-center justify-between", {
                ["text-white"]: pathname === "/marketing-consulting",
              })}
            >
              <span className="flex items-center">
                <BoltIcon
                  className={cn("w-4 h-4 mr-2", {
                    ["text-white"]: pathname === "/marketing-consulting",
                    ["text-blue-500"]: pathname !== "/marketing-consulting",
                  })}
                />{" "}
                Services
              </span>{" "}
              <ChevronRightIcon className={cn("w-4 h-4 ml-2")} />
            </Link>
            <ul
              className={cn(
                "absolute -top-2 md:-left-[17.5rem] lg:left-48 lg:right-0 left-0 right-0 bg-white  border h-auto w-[17.375rem] rounded-xl p-2 z-50",
                {
                  ["block"]: isServiceOpen,
                  ["hidden"]: !isServiceOpen,
                }
              )}
            >
              {Services.map((item: NestedNavType) => (
                <Link href={item.href} key={item.href}>
                  <li
                    className={cn(
                      " duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer relative",
                      {
                        ["bg-blue-500 text-white"]: pathname === item.href,
                        ["hover:bg-gray-100 "]: pathname !== item.href,
                      }
                    )}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </li>
          <Link href="/price">
            <li
              className={cn(
                "duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer relative",
                {
                  ["bg-blue-500 text-white"]: pathname === "/price",
                  ["hover:bg-gray-100 "]: pathname !== "/price",
                }
              )}
            >
              <span className="flex items-center">
                <RocketLaunchIcon
                  className={cn("w-4 h-4 mr-2", {
                    ["text-white"]: pathname === "/price",
                    ["text-purple-500"]: pathname !== "/price",
                  })}
                />{" "}
                Price
              </span>
            </li>
          </Link>
          <Link href="/marketing-case-studies">
            <li
              className={cn(
                "duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer relative",
                {
                  ["bg-blue-500 text-white"]:
                    pathname === "/marketing-case-studies",
                  ["hover:bg-gray-100 "]:
                    pathname !== "/marketing-case-studies",
                }
              )}
            >
              <span className="flex items-center">
                <FaceSmileIcon
                  className={cn("w-4 h-4 mr-2", {
                    ["text-white"]: pathname === "/marketing-case-studies",
                    ["text-orange-500"]: pathname !== "/marketing-case-studies",
                  })}
                />
                Client Success
              </span>
            </li>
          </Link>
          <Link href="/about">
            <li
              className={cn(
                "duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer relative",
                {
                  ["bg-blue-500 text-white"]: pathname === "/about",
                  ["hover:bg-gray-100 "]: pathname !== "/about",
                }
              )}
            >
              <span className="flex items-center">
                <FlagIcon
                  className={cn("w-4 h-4 mr-2", {
                    ["text-white"]: pathname === "/about",
                    ["text-[#e11d48]"]: pathname !== "/about",
                  })}
                />
                About
              </span>
            </li>
          </Link>
          <li
            className={cn(
              "duration-300 transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer relative",
              {
                ["bg-blue-500 text-white"]: pathname === "/resources",
                ["hover:bg-gray-100 "]: pathname !== "/resources",
              }
            )}
            onMouseEnter={() => setIsOpenResources(true)}
            onMouseLeave={() => setIsOpenResources(!true)}
          >
            <Link
              href="/resources"
              className="flex items-center justify-between"
            >
              <span className="flex items-center">
                <GiftIcon
                  className={cn("w-4 h-4 mr-2 ", {
                    ["text-white"]: pathname === "/resources",
                    ["text-[#059669]"]: pathname !== "/resources",
                  })}
                />
                Free resources
              </span>
              <ChevronRightIcon className={cn("w-4 h-4 ml-2")} />
            </Link>
            <ul
              className={cn(
                "absolute top-0 md:-left-[19rem] lg:left-48 lg:right-0 left-0 right-0  bg-white border h-auto w-[19.375rem] rounded-xl p-2",
                {
                  ["block"]: isOpenResources,
                  ["hidden"]: !isOpenResources,
                }
              )}
            >
              {freeResource.map((item: NestedNavType) => (
                <Link href={item.href} key={item.href}>
                  <li
                    className={cn(
                      "duration-300 text-black transition-colors px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer relative",
                      {
                        ["bg-blue-500 text-white"]: pathname === item.href,
                        ["hover:bg-gray-100 "]: pathname !== item.href,
                      }
                    )}
                  >
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
  const pathname = usePathname();
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
      <div className="mr-8 z-50 overflow-hidden">
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
            "absolute top-14 left-0 bg-white shadow-xl w-full h-auto p-2 z-50",
            {
              ["block"]: isMenuOpen,
              ["hidden"]: !isMenuOpen,
            }
          )}
        >
          <li
            onClick={handleServiceOpen}
            className={cn(
              "px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer relative focus:outline-none focus:border-none",
              {
                ["bg-blue-500 text-white"]:
                  pathname === "/marketing-consulting",
              }
            )}
          >
            <Link
              href="/marketing-consulting"
              className="flex items-center justify-between"
            >
              <span className="flex items-center">
                <BoltIcon
                  className={cn("w-4 h-4 mr-2", {
                    [" text-white"]: pathname === "/marketing-consulting",
                    ["text-blue-500"]: pathname !== "/marketing-consulting",
                  })}
                />{" "}
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
          </li>
          <div
            className={cn("p-2 w-full ml-2", {
              ["duration-300 transition-all h-48 delay-200 opacity-100 visible"]:
                isServiceOpen,
              ["h-0 transition-all opacity-0 duration-300 invisible -mt-4"]:
                !isServiceOpen,
            })}
          >
            <ul className={cn("p-2")}>
              {Services.map((item: NestedNavType, i: number) => (
                <Link href={item.href} key={item.href}>
                  <li
                    className={cn(
                      "p-2 font-normal text-xs cursor-pointer relative border-gray-100 border-b-[0.5px] rounded-lg",
                      {
                        ["bg-blue-500 text-white"]: pathname === item.href,
                      }
                    )}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <Link href="/price">
            <li
              className={cn(
                " px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer",
                {
                  ["bg-blue-500 text-white"]: pathname === "/price",
                }
              )}
            >
              <span className="flex items-center">
                <RocketLaunchIcon
                  className={cn("w-4 h-4 mr-2 ", {
                    ["text-purple-500"]: pathname !== "/price",
                    ["text-white"]: pathname === "/price",
                  })}
                />{" "}
                Price
              </span>
            </li>
          </Link>
          <Link href="/marketing-case-studies">
            <li
              className={cn(
                " px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer",
                {
                  ["bg-blue-500 text-white"]:
                    pathname === "/marketing-case-studies",
                }
              )}
            >
              <span className="flex items-center">
                <FaceSmileIcon
                  className={cn("w-4 h-4 mr-2 ", {
                    ["text-orange-500"]: pathname !== "/marketing-case-studies",
                    ["text-white"]: pathname === "/marketing-case-studies",
                  })}
                />
                Client Success
              </span>
            </li>
          </Link>
          <Link href="/about">
            <li
              className={cn(
                " px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer",
                {
                  ["bg-blue-500 text-white"]: pathname === "/about",
                }
              )}
            >
              <span className="flex items-center">
                <FlagIcon
                  className={cn("w-4 h-4 mr-2 ", {
                    ["text-[#e11d48]"]: pathname !== "/about",
                    ["text-white"]: pathname === "/about",
                  })}
                />
                About
              </span>
            </li>
          </Link>
          <li
            onClick={handleFreeResourceOpen}
            className={cn(
              " px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer relative",
              {
                ["bg-blue-500 text-white"]: pathname === "/resources",
                [" text-black"]: pathname !== "/resources",
              }
            )}
          >
            <Link
              href="/resources"
              className="flex items-center justify-between"
            >
              <span className="flex items-center">
                <GiftIcon
                  className={cn("w-4 h-4 mr-2 ", {
                    [" text-white"]: pathname === "/resources",
                    [" text-[#059669]"]: pathname !== "/resources",
                  })}
                />
                Free resources
              </span>
              <ChevronRightIcon
                className={cn(
                  "w-4 h-4 ml-2 rotate-0 delay-200 transition-transform",
                  {
                    [" rotate-90 "]: isOpenResources,
                  }
                )}
              />
            </Link>
          </li>
          <div
            className={cn("ml-2 p-2 w-full", {
              ["duration-300 transition-all h-44 delay-300 opacity-100 visible"]:
                isOpenResources,
              ["h-0 transition-all opacity-0 duration-300 -mt-4 invisible"]:
                !isOpenResources,
            })}
          >
            {freeResource.map((item: NestedNavType, i: number) => (
              <Link href={item.href} key={item.href} className="py-3">
                <li
                  className={cn(
                    "p-2 font-normal text-xs cursor-pointer relative border-gray-100 border-b-[0.5px] rounded-md",
                    {
                      ["bg-blue-500 text-white"]: pathname === item.href,
                    }
                  )}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </div>
          <Link href="/inbound-marketing-consultation">
            <li
              className={cn(
                " px-3 py-2 font-normal text-sm rounded-lg  cursor-pointer",
                {
                  ["bg-blue-500 text-white"]:
                    pathname === "/inbound-marketing-consultation",
                }
              )}
            >
              <span className="flex items-center">
                <CalendarDaysIcon
                  className={cn("w-4 h-4 mr-2 ", {
                    ["text-blue-gray-500"]:
                      pathname !== "/inbound-marketing-consultation",
                    ["text-white"]:
                      pathname === "/inbound-marketing-consultation",
                  })}
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
    <nav className="bg-[#f0f7fb] lg:max-w-none lg:rounded-none lg:border-none md:max-w-none md:rounded-none md:border-none py-2 shadow-lg sticky top-0 z-50">
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
                    className="py-3 rounded-full bg-[#0C304A] hover:bg-blue-500 text-xs hover:shadow-none shadow-none flex items-center"
                    size="lg"
                  >
                    Book a Meting
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
