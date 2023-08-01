import React from "react";
import Card from "./partials/Card";

export default function Certificate() {
  return (
    <section id="certificate" className="pt-36 pb-32 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2 uppercase">Certificate</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">My Achievements</h2>
            <p className="font-medium text-base text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure eum totam quisquam quas, vel iusto quibusdam voluptas similique ipsum.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <Card
            img="/certificate/certificate1.png"
            link="https://www.dicoding.com/certificates/MEPJE400WX3V"
            title="Basic Javascript Programming"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, maiores!"
          />
          <Card
            img="/certificate/certificate2.png"
            link="https://www.dicoding.com/certificates/JLX1L4Y8NX72"
            title="Creating a backend app for beginners"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, maiores!"
          />
        </div>
      </div>
    </section>
  );
}
