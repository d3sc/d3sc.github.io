import React from "react";

export default function HeroProject() {
  return (
    <section className="pt-36 pb-36 bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-start mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2 uppercase after:w-14 after:h-1 after:content-[''] after:block after:bg-primary">
              Make own Game
            </h4>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center gap-10">
            <iframe
              src="https://drive.google.com/file/d/1xhScxitJaFI71xM4tsd0KRkl6TPupRyF/preview"
              width="560"
              height="315"
              allow="autoplay"></iframe>
            <div className="w-1/2  ">
              <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Samurai Game</h2>
              <p className="font-medium text-base text-secondary md:text-lg">
                I am a beginner game maker, recently I made a samurai themed game, in this game we can attack, jump, run, and shoot shuriken. in the
                game there are enemies that we can attack and kill . I make this game with Godot 4.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
