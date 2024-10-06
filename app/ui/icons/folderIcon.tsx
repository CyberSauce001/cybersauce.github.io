import React from "react";

function FolderIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        stroke="#C2C4C7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.125 8.147a1.91 1.91 0 01.287-.022h13.177c.097 0 .193.008.286.022m-13.75 0a1.875 1.875 0 00-1.569 2.118l.714 5a1.875 1.875 0 001.856 1.61h11.75a1.875 1.875 0 001.855-1.61l.714-5a1.875 1.875 0 00-1.57-2.118m-13.75 0L3.126 5A1.875 1.875 0 015 3.125h3.233c.331 0 .649.132.883.367l1.768 1.766c.234.235.552.367.884.367H15A1.875 1.875 0 0116.875 7.5v.647"
      ></path>
    </svg>
  );
}

export default FolderIcon;
