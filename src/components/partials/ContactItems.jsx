import React, { Children } from "react";

export default function ContactItems({ ...props }) {
  console.log(props);
  return (
    <div className="flex items-center gap-8 p-4 my-4 opacity-90">
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
        <path d={props.path}></path>
      </svg>
      <div className="text-secondary">
        <h3 className="font-semibold text-xl text-dark text tracking-wider mb-1">{props.title}</h3>
        {props.children}
      </div>
    </div>
  );
}
