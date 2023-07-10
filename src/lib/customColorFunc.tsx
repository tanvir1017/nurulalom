import React from "react";
interface PropsType {
  children: React.ReactNode;
}
export const TextColor = ({ children }: PropsType) => {
  return <span className="text-[#0c304a]">{children}</span>;
};
