import React from "react";

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
                    Contact
                  </h4>
                  <h2 className="font-bold text-dark text-3xl mb-4 sm:text-3xl lg:text-4xl">Contact Me</h2>
                  <p className="font-medium text-base text-secondary lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure eum totam quisquam quas, vel iusto quibusdam voluptas similique
                    ipsum.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center flex-wrap sm:w-4/5 mx-auto">
                <div className="flex items-center gap-8 p-4 my-4 opacity-90">
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
                    <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path>
                  </svg>
                  <div className="text-secondary">
                    <h3 className="font-semibold text-xl text-dark text tracking-wider mb-1">Location</h3>
                    <span className="flex gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="m21.447 6.105-6-3a1 1 0 0 0-.895 0L9 5.882 3.447 3.105A1 1 0 0 0 2 4v13c0 .379.214.725.553.895l6 3a1 1 0 0 0 .895 0L15 18.118l5.553 2.776a.992.992 0 0 0 .972-.043c.295-.183.475-.504.475-.851V7c0-.379-.214-.725-.553-.895zM10 7.618l4-2v10.764l-4 2V7.618zm-6-2 4 2v10.764l-4-2V5.618zm16 12.764-4-2V5.618l4 2v10.764z"></path>
                      </svg>
                      <p className="text-base font-medium">Citizens of Earth.</p>
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-8 p-4 opacity-90">
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path>
                  </svg>
                  <div className="text-secondary">
                    <h3 className="font-semibold text-xl text-dark text tracking-wider mb-1">WhatsApp</h3>
                    <span className="flex gap-1">
                      <p className="text-base font-medium">+62 814</p>
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-8 p-4 opacity-90">
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                  </svg>
                  <div className="text-secondary">
                    <h3 className="font-semibold text-xl text-dark text tracking-wider mb-1">Email</h3>
                    <span className="flex gap-1">
                      <p className="text-base font-medium">ikbar686@gmail.com</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
