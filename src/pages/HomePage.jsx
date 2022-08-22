import React from "react";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";

const HomePage = () => {
  return (
    <div className="Homepage">
      <div className="presentation">
        <p>Bienvenue !</p>
        <p>
          Je suis <span className="bold">Alexandre TREMOUREUX</span>, un{" "}
          <span className="bold pepsi">développeur web</span> situé près de
          Nantes.
        </p>
        <p>
          Je suis spécialisé dans le{" "}
          <span className="bold pepsi">Front End</span> avec{" "}
          <span className="bold">React</span>
        </p>
        <CallToAction action={""} text={"En savoir plus ?"}/>
      </div>
      

      <Banner />
    </div>
  );
};

export default HomePage;
