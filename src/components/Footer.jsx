import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark pt-24 pb-12">
      <div className="container lg:p-0">
        <div className="flex flex-wrap gap-16">
          <div className="w-full lg:w-1/6 mb-12 text-slate-300">
            <h2 className="font-bold text-4xl text-white mb-5">Ikbar Rabbani</h2>
            <h3 className="font-bold text-2xl mb-4">Contact Me</h3>
            <p>ikbar686@gmail.com</p>
          </div>
          <div className="w-full lg:w-1/6 mb-12 text-slate-300">
            <h2 className="font-bold text-xl text-white mb-5">Links</h2>
            <a className="group" href="#home">
              <h3 className="font-medium text-base mb-2 opacity-70 group-hover:opacity-40">Home</h3>
            </a>
            <a className="group" href="#about">
              <h3 className="font-medium text-base mb-2 opacity-70 group-hover:opacity-40">About</h3>
            </a>
            <a className="group" href="#portfolio">
              <h3 className="font-medium text-base mb-2 opacity-70 group-hover:opacity-40">Project</h3>
            </a>
            <a className="group" href="#certificate">
              <h3 className="font-medium text-base mb-2 opacity-70 group-hover:opacity-40">Certificate</h3>
            </a>
            <a className="group" href="#contact">
              <h3 className="font-medium text-base mb-2 opacity-70 group-hover:opacity-40">Contact</h3>
            </a>
          </div>
          <div className="w-full lg:w-1/6 mb-12 text-slate-300">
            <h2 className="font-bold text-xl text-white mb-5">Writing Categories</h2>
            <a className="group" href="#">
              <h3 className="font-medium text-base mb-2 opacity-70 group-hover:opacity-40">Programming</h3>
            </a>
            <a className="group" href="#">
              <h3 className="font-medium text-base mb-2 opacity-70 group-hover:opacity-40">Technology</h3>
            </a>
            <a className="group" href="#">
              <h3 className="font-medium text-base mb-2 opacity-70 group-hover:opacity-40">Lifestyle</h3>
            </a>
          </div>
          <div className="w-full lg:w-1/6 mb-12 text-slate-300">
            <h2 className="font-bold text-xl text-white mb-5">Social</h2>
            <a className="group" href="https://github.com/d3sc">
              <h3 className="font-medium text-base mb-2 opacity-70 group-hover:opacity-40">Github</h3>
            </a>
            <a className="group" href="https://www.instagram.com/ikrabni_09/">
              <h3 className="font-medium text-base mb-2 opacity-70 group-hover:opacity-40">Instagram</h3>
            </a>
            <a className="group" href="https://www.youtube.com/@vinn8958">
              <h3 className="font-medium text-base mb-2 opacity-70 group-hover:opacity-40">Youtube</h3>
            </a>
          </div>
        </div>
      </div>
      <hr className="opacity-20" />
      <div className="mx-8 pt-6">
        <h4 className="text-slate-300 opacity-70 max-sm:pb-16">
          ©️ 2023{" "}
          <a href="https://github.com/d3sc" target="_blank" className="font-bold text-primary">
            Ikbar Rabbani
          </a>
          , All Rights Reserved.
        </h4>
      </div>
    </footer>
  );
}
