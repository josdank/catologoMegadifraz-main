import React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export function Button({ variant = "default", className, asChild, ...props }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "px-4 py-2 rounded-lg transition",
        {
          default: "bg-blue-500 text-white hover:bg-blue-600",
          ghost: "bg-transparent text-white hover:bg-gray-800",
        }[variant],
        className
      )}
      {...props}
    />
  );
}

export default Button;
