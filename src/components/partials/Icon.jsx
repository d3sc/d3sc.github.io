import React from "react";

export default function Icon({ ...props }) {
  return (
    <a href={props.link} target="_blank" className="icon">
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" className="fill-current">
        <title>
          <span className="capitalize">{props.title}</span>
        </title>
        <path d={props.SvgPath} />
      </svg>
    </a>
  );
}
