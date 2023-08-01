import React from "react";
import Project from "./partials/Project";

export default function Portfolio() {
  return (
    <section id="project" className="pt-36 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2 uppercase after:w-24 after:h-1 after:content-[''] after:block after:bg-primary after:mx-auto">
              Project
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Latest Project</h2>
            <p className="font-medium text-base text-secondary md:text-lg">I've been busy lately working on the following project.</p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center lg:w-10/12 lg:mx-auto">
          <Project
            img="/project/project1.png"
            link="https://schl.smkletris2pamulang.sch.id/index.html"
            title="School Website"
            desc="I've created a school-themed website with simple technology, and it is already on my school domain."
            tech={["html", "css", "bootstrap 5"]}
          />
          <Project
            img="/project/project2.png"
            link="https://github.com/d3sc/cashier-application-demo"
            title="Cashier Application Demo"
            desc="A cashier application with Laravel and Mysql database, which can be used directly. the features in this application are still incomplete."
            tech={["php", "bootstrap 5", "laravel", "livewire", "mysql"]}
          />
          <Project
            img="/project/project3.png"
            link="https://chat.d3sc.my.id"
            title="Chat APP"
            desc="I've created a simple chat application, and the application can communicate with anyone privately. I store contact data in the firebase database."
            tech={["javascript", "react js", "sass", "firebase"]}
          />
        </div>
      </div>
    </section>
  );
}
