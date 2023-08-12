"use client";
import { Button } from "@material-tailwind/react";
import { ReactNode } from "react";

const DefaultButton = ({
  children,
  className,
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  size?: string | any;
}) => {
  return (
    <Button
      className={`py-4 rounded-full hover:bg-[#0C304A] shadow-lg duration-300 normal-case tracking-wider ${className}`}
      size={size}
      color="blue"
    >
      {children}
    </Button>
  );
};

export default DefaultButton;
