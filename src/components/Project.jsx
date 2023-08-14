import React, { useEffect, useState } from "react";
import Project from "./partials/Project";
import { DataProject } from "../data";

export default function Portfolio() {
  const [visible, setVisible] = useState(2);
  const [button, setButton] = useState(true);
  useEffect(() => {
    if (visible >= DataProject.project.length) setButton(false);
  }, [visible]);
  return (
    <section id="project" className="pt-36 pb-16 bg-slate-100">
      <div className="container w-full">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2 uppercase after:w-24 after:h-1 after:content-[''] after:block after:bg-primary after:mx-auto">
              {DataProject.heroTitle}
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">{DataProject.typeTitle}</h2>
            <p className="font-medium text-base text-secondary md:text-lg">{DataProject.subtitle}</p>
          </div>
        </div>

        <div className="w-full px-4 gap-6 flex flex-wrap justify-center lg:w-10/12 lg:mx-auto">
          {DataProject.project.slice(0, visible).map((items, i) => (
            <Project key={i} img={items.img} link={items.link} title={items.title} desc={items.desc} tech={items.tech} />
          ))}
        </div>
        {button && (
          <div className="w-full flex justify-center items-center">
            <button
              onClick={() => setVisible((prevValue) => prevValue + 2)}
              className="mx-auto text-base font-semibold text-white bg-primary py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition-all duration-300 ease-in-out">
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
