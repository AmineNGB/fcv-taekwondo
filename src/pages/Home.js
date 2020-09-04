import React from "react";
import NavBar from "../components/NavBar";
import kick from "../assets/images/kick.svg";
import fond from "../assets/images/fondhome.svg";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="application">
        <div className="main-section">
          <img id="fond" src={fond} alt="test" />
          <img id="kick" src={kick} alt="test" />
          <div className="call-to-action">
            <h1 id="title-fcv">F.C.V Taekwondo</h1>

            <h2 id="sentence-fcv">
              <i class="fas fa-quote-right"></i> Plus qu'un simple club, une
              grande famille ! <i class="fas fa-quote-left"></i>
            </h2>

            <p id="hesitate">
              N’hésitez plus, faites votre premier entrainement gratuitement.
            </p>
            <button src={Contact} id="join-us">
              Rejoignez-nous !
            </button>
          </div>
        </div>

        <NavBar />
      </div>
    </>
  );
};

export default Home;
