import React from "react";
import { DataHeroProject } from "../data";

export default function HeroProject() {
  return (
    <section className="pt-36 pb-36 bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-start mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2 uppercase after:w-14 after:h-1 after:content-[''] after:block after:bg-primary">
              {DataHeroProject.title}
            </h4>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center gap-10">
            {/* <video width={560} height={315} controls src={DataHeroProject.videoSource}>
              <source src={DataHeroProject.videoSource} />
            </video> */}
            <iframe width="560" height="315" src={DataHeroProject.videoSource} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="lg:w-1/2">
              <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">{DataHeroProject.titleGame}</h2>
              <p className="font-medium text-base text-secondary md:text-lg">{DataHeroProject.desc}</p>
              <br />
              <a
                href="https://youtu.be/9pyZO3N_ltE"
                className="text-base capitalize font-semibold text-white bg-primary py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition-all duration-300 ease-in-out mt-10">
                see more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
