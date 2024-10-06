import React from "react";

function PlusIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="none"
      viewBox="0 0 17 17"
      className="absolute top-0 left-[40%]"
      {...props}
    >
      <path fill="url(#paint0_linear_48_7)" d="M0 6h17v5H0V6z"></path>
      <path fill="url(#paint1_linear_48_7)" d="M6 17V0h5v17H6z"></path>
      <defs>
        <linearGradient
          id="paint0_linear_48_7"
          x1="17"
          x2="0"
          y1="0"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D701FF"></stop>
          <stop offset="1" stopColor="#60F6ED"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_48_7"
          x1="17"
          x2="0"
          y1="0"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D701FF"></stop>
          <stop offset="1" stopColor="#60F6ED"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default PlusIcon;