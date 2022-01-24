import React, { useState } from "react";
import "./styles/Section.css";
import Header from "./Header";
import img from "../assets/3.png";
import Modal from "../components/Portal/Modal";
import Modal1 from "../components/Portal/Modal";

const Section = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

  return (
    <section className="section">
      <Header />
      <div className="section__box">
        <div className="section__content">
          <h1 className="content__header">
            Złoto (Au, łac. aurum) – pierwiastek chemiczny o liczbie atomowej
            79.
          </h1>
          <p>
            Złoto jest ciężkim, miękkim i błyszczącym metalem, najbardziej
            kowalnym i ciągliwym spośród wszystkich znanych metali. Czyste złoto
            ma jasnożółty kolor i wyraźny połysk, nie utlenia się w wodzie czy
            powietrzu.
          </p>
          <p className="small__p">
            Chemicznie złoto należy do metali przejściowych i pierwiastków grupy
            11.
          </p>
          <button onClick={() => Toggle()}>Więcej</button>
          <Modal show={modal} close={Toggle} title="Złoto w Egipcie">
            <p>
              Egipskie hieroglify z okresu około 2600 lat p.n.e. opisują, że
              król Mitannii Tuszratta miał złota „więcej, niż brudu” w Egipcie.
              Egipt, a szczególnie Nubia, miały wystarczające zasoby, by uczynić
              je obszarami, gdzie wydobywało się najwięcej złota przez długi
              okres historii. Najstarszą znaną mapą jest mapa znana jako
              papirusowa mapa z Turynu (ok. 1100 lat p.n.e.), która pokazuje
              plan kopalni złota w Nubii, wraz z ukazaniem lokalnej geologii.
              Prymitywne metody wydobycia, włączając w to technikę podkładania
              ognia, zostały opisane przez Strabona i Diodora Sycylijskiego.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Złoto</em>
            </p>
          </Modal>
          <button onClick={() => Toggle1()}>Czytaj</button>
          <Modal1 show={modal1} close={Toggle1} title="Złoto w Biblii">
            <p>
              Mit o złotym runie może nawiązywać do używania w starożytności
              owczych skór do wychwytywania złotego pyłu ze złóż okruchowych.
              Złoto jest często wspominane w Starym Testamencie, rozpoczynając
              od Księgi Rodzaju 2, 11 (o Havilah) oraz jest jednym z darów
              mędrców (Trzech Królów) w pierwszych rozdziałach Nowego
              Testamentu, w Ewangelii według Mateusza. Południowo-wschodni
              obszar Morza Czarnego był znany ze swojego złota. Wydobycie złota
              datuje się tam od czasu króla Midasa i tamtejsze złoto
              prawdopodobnie było wykorzystane w pierwszym na świecie biciu
              monet w Lidii, tzw. „lwów lidyjskich” około 610 r. p.n.e.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Złoto</em>
            </p>
          </Modal1>
        </div>
        <div className="section__img">
          <img src={img} alt="..." />
        </div>
      </div>
    </section>
  );
};

export default Section;
