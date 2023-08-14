import React from "react";

export default function Project({ ...props }) {
  return (
    <div className="mb-12 p-4 md:w-2/5">
      <a href={props.link} target="_blank">
        <div className="rounded-md shadow-md overflow-hidden">
          <img src={props.img} alt={props.title} />
        </div>
      </a>
      <a href={props.link} target="_blank" className="group">
        <h3 className="font-semibold text-xl text-dark mt-5 mb-3 inline-block group-hover:text-primary transition-all duration-300">{props.title}</h3>
      </a>
      <p className="font-medium text-base text-secondary">{props.desc}</p>
      <div className="mt-4 p-2 flex flex-wrap items-center gap-2">
        {props.tech.map((e) => (
          <div
            key={e}
            className="w-auto h-auto px-2 py-1 rounded-lg bg-slate-200 border border-slate-400 text-secondary flex justify-center items-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
            <span className="capitalize">{e}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
