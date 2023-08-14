import React from "react";
import Icon from "./partials/Icon";
import { DataAbout } from "../data";

export default function About() {
  return (
    <section id="about" className="pt-36 pb-32">
      <div className="container lg:w-3/4">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="font-bold uppercase text-primary text-lg mb-3 after:w-28 after:h-1 after:content-[''] after:block after:bg-primary after:rounded-l-md">
              {DataAbout.title}
            </h4>
            <h2 className="font-bold text-dark text-xl mb-5 max-w-md lg:text-3xl">{DataAbout.subtitle.about}</h2>
            <p className="font-medium text-base text-secondary mb-6 max-w-xl lg:text-lg inline-block">
              {DataAbout.descAboutMe.map((data, i) => (
                <span key={i}>{i % 2 == 0 ? DataAbout.descAboutMe[i] : <span className="text-dark"> {DataAbout.descAboutMe[i]} </span>}</span>
              ))}
            </p>
            <div className="flex items center flex-wrap gap-2">
              {DataAbout.iconAbout.map((data, i) => (
                <Icon key={i} link={data.link} SvgPath={data.SvgPath} title={data.title} />
              ))}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 lg:mt-12">
            <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl">{DataAbout.subtitle.skillTools}</h3>
            <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
              {DataAbout.descSkillTools.map((data, i) => (
                <span key={i}>{i % 2 == 0 ? DataAbout.descSkillTools[i] : <span className="text-dark">{DataAbout.descSkillTools[i]}</span>}</span>
              ))}
            </p>
            <div className="flex items-center flex-wrap gap-2">
              {DataAbout.iconSkillTools.map((data, i) => (
                <Icon key={i} link={data.link} SvgPath={data.SvgPath} title={data.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
