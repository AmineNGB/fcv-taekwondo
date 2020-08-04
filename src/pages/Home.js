import React from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="call-to-action">
        <h1>FCV Taekwondo</h1>
        <h2>Plus qu'un club, une famille</h2>
        <p>
          Tu veux faire un sport qui t'enseignes le respect ? Rejoins nous !
        </p>
        <p>La première séance est gratuite !</p>

        <a class="learn-more" href="#/leclub">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text"> En savoir plus</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
