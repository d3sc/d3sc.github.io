import React from "react";
import { DataContact } from "../data";
import ContactItems from "./partials/ContactItems.jsx";

export default function Contact() {
  return (
    <>
      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full sm:p-4 mb-16">
              <div className="sm:px-4 text-start">
                <div className="max-w-xl sm:ms-10 text-start mb-6">
                  <h4 className="font-semibold text-lg text-primary mb-2 uppercase after:w-24 after:h-1 after:content-[''] after:block after:bg-primary">
                    {DataContact.heroTitle}
                  </h4>
                  <h2 className="font-bold text-dark text-3xl mb-4 sm:text-3xl lg:text-4xl">{DataContact.typeTitle}</h2>
                  <p className="font-medium text-base text-secondary lg:text-lg">{DataContact.subtitle}</p>
                </div>
              </div>
              <div className="flex justify-between items-center flex-wrap sm:w-4/5 mx-auto">
                {DataContact.contact.map((data, i) => (
                  <ContactItems key={i} path={data.path} title={data.title}>
                    <div dangerouslySetInnerHTML={{ __html: data.fragment }}></div>
                  </ContactItems>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
