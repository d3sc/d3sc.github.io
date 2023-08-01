import React from "react";

export default function Card({ ...props }) {
  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 lg:max-w-sm xl:max-w-md mx-auto">
        <img src={props.img} alt={props.title} className="w-full" />
        <div className="py-8 px-6">
          <h3>
            <a target="_blank" href={props.link} className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
              {props.title}
            </a>
          </h3>
          <p className="text-base font-medium text-secondary mb-6">{props.desc}</p>
          <a target="_blank" href={props.link} className="font-medium text-sm text-white bg-primary py-3 px-4 rounded-lg hover:opacity-80">
            See More
          </a>
        </div>
      </div>
    </div>
  );
}
