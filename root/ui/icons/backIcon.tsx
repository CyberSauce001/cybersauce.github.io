import React from "react";

function BackIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      fill="none"
      viewBox="0 0 14 8"
      {...props}
    >
      <path
        fill="#323A3F"
        d="M13 4.5a.5.5 0 000-1v1zM.646 3.646a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.707 4l2.829-2.828a.5.5 0 10-.708-.708L.646 3.646zM13 3.5H1v1h12v-1z"
      ></path>
    </svg>
  );
}

export default BackIcon;