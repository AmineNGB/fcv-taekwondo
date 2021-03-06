import React from "react";
import NavBarXs from "../components/NavBarXs";
import Club1 from "../assets/images/club1.png";

const Club = () => {
  return (
    <>
      <div className="club-container">
        <h2 className="club-title">F.C.V Taekwondo / Notre Club</h2>
        <div className="content-club">
          <div className="page-content">
            <div className="story-left">
              <h3>Notre Histoire</h3>
              <div className="signification">
                <p>
                  <strong>F</strong> comme la France et la Fidélité pour un
                  sport.
                </p>
                <p>
                  <strong>C</strong> comme la Corée pays d'origine de ce sport
                  et la Courtoisie indispensable entre adversaires.
                </p>
                <p>
                  <strong>V</strong> comme Viêt-nam où a grandi le maître et la
                  Vertue que doit posséder tout homme.
                </p>
                <p>
                  Maître Duong Van Hoaï a créé le F.C.V Taekwondo en 1981 à Lyon
                  et depuis 1991, après avoir entraîné pendant quelques mois
                  l'Amical Laïque de Décines il décide de créer un nouveau club
                  dans la commune.
                </p>
              </div>
            </div>
            <img src={Club1} className="story-right" alt="club1" />
          </div>
          <div className="page-content">
            <img src={Club1} alt="" />
            <div className="story-left">
              <h3>Nos Principes fondamentaux</h3>
              <p>
                Au F.C.V Taekwondo tu apprendras : LE RESPECT : tu apprendras à
                respecter tes professeurs, tes camarades et même le monde
                extérieur. LA DISCIPLINE : Sans discipline LA PERSEVERANCE : un
                bon disciple du taekwondo ne doit pas renoncer face aux
                difficultés pendant les entraînements, apprendre cet art martial
                peut prendre des années, c'est un long chemin alors il ne faut
                pas renoncer. LA MAITRISE DE SOI : LA COMBATIVITE : face à son
                adversaire, montrer que l'on a la volonté de combattre tout en
                se respectant
              </p>
            </div>
          </div>
          <div className="page-content">
            <div className="story-left">
              <h3>Nos Valeurs</h3>
              <p>
                Au F.C.V Taekwondo tu apprendras : LE RESPECT : tu apprendras à
                respecter tes professeurs, tes camarades et même le monde
                extérieur. LA DISCIPLINE : Sans discipline LA PERSEVERANCE : un
                bon disciple du taekwondo ne doit pas renoncer face aux
                difficultés pendant les entraînements, apprendre cet art martial
                peut prendre des années, c'est un long chemin alors il ne faut
                pas renoncer. LA MAITRISE DE SOI : LA COMBATIVITE : face à son
                adversaire, montrer que l'on a la volonté de combattre tout en
                se respectant
              </p>
            </div>

            <img src={Club1} alt="" />
          </div>
        </div>
        <NavBarXs />
      </div>
    </>
  );
};

export default Club;
