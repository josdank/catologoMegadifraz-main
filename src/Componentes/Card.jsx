import React from "react";
import clsx from "clsx";

function Card({ className, children, ...props }) {
  return (
    <div
      className={clsx(
        "bg-gray-900 rounded-xl shadow-md overflow-hidden h-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;