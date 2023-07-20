// @ts-nocheck

"use client";

import { navListMenuItems } from "@/data/navmenu";
import {
  ArrowRightIcon,
  Bars3Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  FolderIcon,
  GiftIcon,
  Square3Stack3DIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Chip,
  Collapse,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { FreeResourceNav, ServicesNav } from "./timelinefornav";

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mouseOver, setMouseOver] = React.useState(false);
  const [mouseEnter, setMouseEnter] = React.useState(false);
  const createIcon = React.createElement(ChevronRightIcon, {
    strokeWidth: 2,
    className: `h-4 w-4 ${mouseOver ? "rotate-90 duration-300" : ""}`,
  });
  const createIcon1 = React.createElement(ChevronRightIcon, {
    strokeWidth: 2,
    className: `h-4 w-4 ${mouseEnter ? "rotate-90 duration-300" : ""}`,
  });

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color, href }, key) => (
      <div key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg relative ">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Link href={href}>
              <Typography variant="h6" color="blue-gray" className="">
                <span className="flex items-center justify-between text-sm">
                  {title}{" "}
                </span>
              </Typography>

              <Typography variant="small" color="gray" className="font-normal">
                {description}
              </Typography>
            </Link>
          </div>
        </MenuItem>
      </div>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Menu
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <div className="space-y-3">
            <ul className="grid grid-cols-2 gap-3">
              <Accordion open={mouseOver}>
                <AccordionHeader
                  onMouseEnter={() => setMouseOver(true)}
                  onMouseLeave={() => setMouseOver(!true)}
                  className={`rounded-lg p-5 ${colors["blue-gray"]}`}
                >
                  <div>
                    <GiftIcon strokeWidth={2} className="h-6 w-6" />
                    <Typography variant="h6" color="blue-gray" className="">
                      <span className="flex items-center justify-between text-sm">
                        <span>
                          Services
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-normal"
                          >
                            All the stuff that we dan from legal made us add.
                          </Typography>
                        </span>
                        <Chip
                          size="sm"
                          color="blue-gray"
                          variant="ghost"
                          value={createIcon}
                          className={`capitalize ml-3`}
                        />
                      </span>
                    </Typography>
                  </div>
                </AccordionHeader>
                <AccordionBody
                  onMouseEnter={() => setMouseOver(true)}
                  onMouseLeave={() => setMouseOver(!true)}
                >
                  <MenuItem className="flex items-start gap-3 rounded-lg relative">
                    <div>
                      <ServicesNav />
                    </div>
                  </MenuItem>
                </AccordionBody>
              </Accordion>

              <Accordion open={mouseEnter}>
                <AccordionHeader
                  className={`rounded-lg p-5 ${colors["pink"]}`}
                  onMouseEnter={() => setMouseEnter(true)}
                  onMouseLeave={() => setMouseEnter(!true)}
                >
                  <div>
                    <FolderIcon strokeWidth={2} className={`h-6 w-6 `} />
                    <Typography variant="h6" color="blue-gray">
                      <div className="flex items-center justify-between text-sm">
                        <span>
                          Free resource
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-normal"
                          >
                            ist of all our open-source projects, it's all free.
                          </Typography>
                        </span>
                        <Chip
                          size="sm"
                          color="pink"
                          variant="ghost"
                          value={createIcon1}
                          className={`capitalize ml-3`}
                        />
                      </div>
                    </Typography>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <MenuItem
                    onMouseEnter={() => setMouseEnter(true)}
                    onMouseLeave={() => setMouseEnter(!true)}
                    className="flex items-start gap-3 rounded-lg "
                  >
                    <div>
                      <FreeResourceNav />
                    </div>
                  </MenuItem>
                </AccordionBody>
              </Accordion>
            </ul>
            <ul className={`grid  gap-y-2 }`}>{renderItems}</ul>
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          {" "}
          <ul className="grid grid-cols-2 gap-3">
            <Accordion open={mouseOver}>
              <AccordionHeader
                onMouseEnter={() => setMouseOver(true)}
                onMouseLeave={() => setMouseOver(!true)}
                className={`rounded-lg p-5 ${colors["blue-gray"]}`}
              >
                <div>
                  <GiftIcon strokeWidth={2} className="h-6 w-6" />
                  <Typography variant="h6" color="blue-gray" className="">
                    <span className="flex items-center justify-between text-sm">
                      <span>
                        Services
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          All the stuff that we dan from legal made us add.
                        </Typography>
                      </span>
                      <Chip
                        size="sm"
                        color="blue-gray"
                        variant="ghost"
                        value={createIcon}
                        className={`capitalize ml-3`}
                      />
                    </span>
                  </Typography>
                </div>
              </AccordionHeader>
              <AccordionBody
                onMouseEnter={() => setMouseOver(true)}
                onMouseLeave={() => setMouseOver(!true)}
              >
                <MenuItem className="flex items-start gap-3 rounded-lg relative">
                  <div>
                    <ServicesNav />
                  </div>
                </MenuItem>
              </AccordionBody>
            </Accordion>

            <Accordion open={mouseEnter}>
              <AccordionHeader
                className={`rounded-lg p-5 ${colors["pink"]}`}
                onMouseEnter={() => setMouseEnter(true)}
                onMouseLeave={() => setMouseEnter(!true)}
              >
                <div>
                  <FolderIcon strokeWidth={2} className={`h-6 w-6 `} />
                  <Typography variant="h6" color="blue-gray">
                    <div className="flex items-center justify-between text-sm">
                      <span>
                        Free resource
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          ist of all our open-source projects, it's all free.
                        </Typography>
                      </span>
                      <Chip
                        size="sm"
                        color="pink"
                        variant="ghost"
                        value={createIcon1}
                        className={`capitalize ml-3`}
                      />
                    </div>
                  </Typography>
                </div>
              </AccordionHeader>
              <AccordionBody>
                <MenuItem
                  onMouseEnter={() => setMouseEnter(true)}
                  onMouseLeave={() => setMouseEnter(!true)}
                  className="flex items-start gap-3 rounded-lg "
                >
                  <div>
                    <FreeResourceNav />
                  </div>
                </MenuItem>
              </AccordionBody>
            </Accordion>
          </ul>{" "}
          {renderItems}
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 lg:justify-end">
      <NavListMenu />
    </List>
  );
}

export default function ComplexNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <Navbar className=" lg:max-w-none lg:rounded-none lg:border-none md:max-w-none md:rounded-none md:border-none">
        <div className="container flex items-center justify-between text-blue-gray-900 ">
          <Typography
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            <Link href="/">Nurlul Alom</Link>
          </Typography>
          <div className="hidden lg:flex ">
            <NavList />
            <Button
              className="py-3 rounded-full bg-[#0C304A] text-xs hover:shadow-none shadow-none flex items-center "
              size="lg"
            >
              Book a Meting{" "}
              <ArrowRightIcon
                strokeWidth={2.5}
                className={` h-3 w-3 transition-transform ml-3`}
              />
            </Button>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button
              className="py-3 rounded-full bg-[#0C304A] text-xs hover:shadow-none shadow-none flex items-center "
              size="lg"
            >
              Book a Meting{" "}
              <ArrowRightIcon
                strokeWidth={2.5}
                className={` h-3 w-3 transition-transform `}
              />
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}
