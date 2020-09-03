import React from "react";
import NavBar from "../components/NavBar";
import kick from "../assets/images/kick.svg";
import fond from "../assets/images/fondhome.svg";

const Home = () => {
  return (
    <>
      <div className="main-section">
        {/* <img id="kick" src={kick} alt="test" /> */}
        <div className="fond-circle">
          <img id="fond" src={fond} alt="test" />
        </div>
      </div>
      {/* <h1>F.C.V Taekwondo</h1>
        <i class="fas fa-quote-right"></i>
        <h2>Plus qu'un simple club, une grande famille</h2>
        <i class="fas fa-quote-left"></i>
        <p>N’hésitez plus, faites votre premier entrainement gratuitement.</p>
        <button id="join-us">Rejoinez-nous !</button> */}

      {/* <NavBar /> */}
    </>
  );
};

export default Home;
