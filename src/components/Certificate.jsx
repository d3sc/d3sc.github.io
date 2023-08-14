import React from "react";
import Card from "./partials/Card";
import { DataCertificate } from "../data";

export default function Certificate() {
  return (
    <section id="certificate" className="pt-36 pb-32 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2 uppercase">{DataCertificate.heroTitle}</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">{DataCertificate.typeTitle}</h2>
            <p className="font-medium text-base text-secondary md:text-lg">{DataCertificate.subtitle}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {DataCertificate.certificate.map((item, i) => (
            <Card key={i} img={item.img} link={item.link} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
