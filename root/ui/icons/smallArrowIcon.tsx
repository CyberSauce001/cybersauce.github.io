import React from "react";

function SmallArrowIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="#C2C4C7"
        d="M2.646 13.646a.5.5 0 00.708.708l-.708-.708zM14.5 3a.5.5 0 00-.5-.5H9.5a.5.5 0 000 1h4v4a.5.5 0 001 0V3zM3.354 14.354l11-11-.708-.708-11 11 .708.708z"
      ></path>
    </svg>
  );
}

export default SmallArrowIcon;
