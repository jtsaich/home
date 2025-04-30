"use client";

import React from "react";

interface NavButtonsProps {
  labels: {
    about: string;
    experience: string;
    projects: string;
  };
}

export const NavButtons = ({ labels }: NavButtonsProps) => {
  return (
    <ul className="flex flex-col gap-2 text-sm font-semibold tracking-widest">
      <li>
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-block border-b-2 pb-1 cursor-pointer"
        >
          {labels.about}
        </button>
      </li>
      <li>
        <button
          onClick={() =>
            document
              .getElementById("experience")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-block border-b pb-1 cursor-pointer"
        >
          {labels.experience}
        </button>
      </li>
      {/* <li>
        <span className="inline-block border-b pb-1 cursor-pointer">
          {labels.projects}
        </span>
      </li> */}
    </ul>
  );
};
