import React from "react";
import Typed from "react-typed";
import "../assets/css/mouse.css";

export default function Hero() {
  return (
    <section id="home" className="pt-0 md:pt-16 max-md:py-12 md:h-[90vh] lg:py-24 flex items-center">
      <div className="container">
        <div className="flex justify-evenly items-center flex-wrap md:pr-20">
          <div className="w-fit h-fit grid gap-4 max-sm:grow-[1]">
            <a href="https://www.instagram.com/ikrabni_09/" target="_blank" className="cursor-pointer w-fit">
              <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
              </svg>
            </a>
            <a href="https://github.com/d3sc" target="_blank" className="cursor-pointer w-fit">
              <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
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
              Only someone who is
              <span className="text-dark font-bold"> Learning, Evolving, and Innovating </span>
              in Technology
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
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
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
