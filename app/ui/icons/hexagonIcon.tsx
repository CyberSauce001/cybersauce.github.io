import React from "react";

function HexagonIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="60"
      fill="none"
      viewBox="0 0 52 60"
      {...props}
    >
      <path
        fill="#FDFFFF"
        d="M25.98 0l25.982 15v30L25.98 60 0 45V15L25.98 0z"
      ></path>
      <path
        fill="#000305"
        d="M15.293 39.293a1 1 0 001.414 1.414l-1.414-1.414zM37 20a1 1 0 00-1-1h-9a1 1 0 100 2h8v8a1 1 0 102 0v-9zM16.707 40.707l20-20-1.414-1.414-20 20 1.414 1.414z"
      ></path>
    </svg>
  );
}

export default HexagonIcon;
