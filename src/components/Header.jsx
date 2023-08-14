import React from "react";
import { DataHeader } from "../data";

export default function Header() {
  const dataNavbar = DataHeader[1].navbar;
  // dataNavbar.forEach((e) => {
  //   console.log(e);
  // });
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
            <nav id="nav-menu" className="block static bg-transparent max-w-full shadow-none rounded-none">
              <ul className="max-md:hidden flex items-center justify-end">
                {dataNavbar.map((e) => (
                  <li key={e} className="group py-2 mx-3">
                    <a href="#home" className="text-base text-dark flex group-hover:text-primary">
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
