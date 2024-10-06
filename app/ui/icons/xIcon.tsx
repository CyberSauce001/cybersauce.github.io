import React from "react";

function XIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      fill="none"
      viewBox="0 0 34 34"
      {...props}
    >
      <path
        stroke="#000305"
        strokeLinecap="round"
        strokeWidth="4"
        d="M2 2l30 30M2 32L32 2"
      ></path>
    </svg>
  );
}

export default XIcon;