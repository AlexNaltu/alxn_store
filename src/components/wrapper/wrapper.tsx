import React from "react";
import { cn } from "~/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={cn("mx-auto max-w-screen-xl px-2 lg:px-6", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
