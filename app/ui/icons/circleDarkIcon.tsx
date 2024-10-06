import React from "react";

function CircleDarkIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="52"
      fill="none"
      viewBox="0 0 52 52"
      {...props}
    >
      <path
        fill="#000305"
        d="M0 26c0 14.36 11.64 26 26 26s26-11.64 26-26S40.36 0 26 0 0 11.64 0 26z"
      ></path>
      <path
        fill="#FDFFFF"
        d="M15.293 35.293a1 1 0 001.414 1.414l-1.414-1.414zM37 16a1 1 0 00-1-1h-9a1 1 0 100 2h8v8a1 1 0 102 0v-9zM16.707 36.707l20-20-1.414-1.414-20 20 1.414 1.414z"
      ></path>
    </svg>
  );
}

export default CircleDarkIcon;