import React from "react";

export default function Header() {
  return (
    <header className="bg-white fixed max-md:bottom-0 max-md:left-0 w-full flex items-center z-10">
      <div className="container lg:w-4/5">
        <div className="flex items-center justify-between relative">
          <div className="lg:px-4 w-full">
            <a href="#home" className="inline-block font-bold text-lg text-primary py-6">
              Ikbar Rabbani
            </a>
          </div>
          <div className="flex items-center justify-end px-4 w-3/4">
            <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 z-20 lg:hidden">
              <span className="hamburger-line transition-all duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition-all duration-300 ease-in-out"></span>
              <span className="hamburger-line transition-all duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            <nav id="nav-menu" className="block static bg-transparent max-w-full shadow-none rounded-none">
              <ul className="max-md:hidden flex items-center justify-end">
                <li className="group py-2 mx-3">
                  <a href="#home" className="text-base text-dark flex group-hover:text-primary">
                    Home
                  </a>
                </li>
                <li className="group py-2 mx-3">
                  <a href="#about" className="text-base text-dark flex group-hover:text-primary">
                    About
                  </a>
                </li>
                <li className="group py-2 mx-3">
                  <a href="#project" className="text-base text-dark flex group-hover:text-primary">
                    Project
                  </a>
                </li>
                <li className="group py-2 mx-3">
                  <a href="#certificate" className="text-base text-dark flex group-hover:text-primary">
                    Certificate
                  </a>
                </li>
                <li className="group py-2 mx-3">
                  <a href="#contact" className="text-base text-dark flex group-hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
