import React from "react";
import Typed from "react-typed";
import "../assets/css/mouse.css";
import { DataHero } from "../data";

export default function Hero() {
  return (
    <section id="home" className="pt-0 md:pt-16 max-md:py-12 md:h-[90vh] lg:py-24 flex items-center">
      <div className="container">
        <div className="flex justify-evenly items-center flex-wrap md:pr-20">
          <div className="w-fit h-fit grid gap-4 max-sm:grow-[1]">
            <a href={DataHero.iconSvg.instagram.link} target="_blank" className="cursor-pointer w-fit">
              <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d={DataHero.iconSvg.instagram.path[0]}></path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path d={DataHero.iconSvg.instagram.path[1]}></path>
              </svg>
            </a>
            <a href={DataHero.iconSvg.github.link} target="_blank" className="cursor-pointer w-fit">
              <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d={DataHero.iconSvg.github.path[0]}></path>
              </svg>
            </a>
            <a href={DataHero.iconSvg.linkedin.link} target="_blank" className="cursor-pointer w-fit">
              <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d={DataHero.iconSvg.linkedin.path[0]}></path>
              </svg>
            </a>
          </div>
          <div className="h-auto self-center px-4 max-sm:order-2 sm:w-1/2 lg:w-2/6">
            <h1 className="text-base font-semibold text-primary md:text-lg lg:text-xl">
              Hi There 👋, I am
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Ikbar rabbani</span>
            </h1>
            <div className="flex items-center gap-3 mt-3 mb-4">
              <div className="w-2/12 rounded-l-md h-1 bg-primary"></div>
              <p className="font-medium text-secondary text-lg lg:text-xl">
                <Typed strings={["Web Developer", "Game Developer"]} loop typeSpeed={70} backSpeed={50} backDelay={2000} cursorChar="_" />
              </p>
            </div>
            <p className="font-medium text-secondary mb-10 leading-relaxed max-sm:w-4/5">
              {DataHero.descHero.map((data, i) => (
                <span key={i}>{i % 2 == 0 ? DataHero.descHero[i] : <span className="text-dark font-bold">{DataHero.descHero[i]}</span>}</span>
              ))}
            </p>
            <br />
            <a
              href="#contact"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition-all duration-300 ease-in-out">
              Contact Me
            </a>
          </div>
          <div className="max-md:px-0 self-end px-4 max-sm:w-1/2 order-1 max-sm:order-1 max-sm:grow-[2]">
            <svg
              className="fill-primary lg:w-[320px] sm:w-[270px] max-sm:w-[200px]"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                <path d={DataHero.profileSvg[0]} />
              </mask>
              <g mask="url(#mask0)">
                <path d={DataHero.profileSvg[1]} />
                <image className="w-[170px]" href="/pp-bgremove.png" x={10} y={-40} />
              </g>
            </svg>
          </div>
          <div className="hero-mouse anchor hidden items-center gap-3 p-2 lg:absolute lg:bottom-20 lg:left-[20%] lg:flex" href="#about">
            <div className="mouse-icon border-primary border-2 border-solid">
              <span className="bg-primary"></span>
            </div>
            <span className="text-primary text-base font-bold">Scroll down</span>
          </div>
        </div>
      </div>
    </section>
  );
}
