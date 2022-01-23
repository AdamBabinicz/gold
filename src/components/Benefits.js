import React, { useState } from "react";
import img from "../assets/2.jpg";
import img1 from "../assets/4.jpg";
import img2 from "../assets/5.jpg";
import img3 from "../assets/7.jpg";
import img4 from "../assets/8.jpg";
import img5 from "../assets/budda.jpg";
import "./styles/Benefits.css";
import Modal from "../components/Portal/Modal";
import Modal1 from "../components/Portal/Modal";
import Modal2 from "../components/Portal/Modal";
import Modal3 from "../components/Portal/Modal";
import Modal4 from "../components/Portal/Modal";
import Modal5 from "../components/Portal/Modal";

const Benefits = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);
  const Toggle2 = () => setModal2(!modal2);
  const Toggle3 = () => setModal3(!modal3);
  const Toggle4 = () => setModal4(!modal4);
  const Toggle5 = () => setModal5(!modal5);

  return (
    <section className="benefits" id="historia">
      <div className="benefits__content">
        <h2>Złoto na Ziemi</h2>
        <p>
          Złoto jest znane i używane przez rzemieślników co najmniej od
          <b> chalkolitu</b>. Złote wyroby na Bałkanach pojawiają się w
          wykopaliskach archeologicznych datowanych na IV milenium p.n.e.,
          takich jak nekropolia Warny. Złote artefakty, takie jak złote
          kapelusze czy dysk z Nebry, pojawiały się w Europie Środkowej od
          drugiego tysiąclecia p.n.e. w epoce brązu.
        </p>
      </div>
      <div className="benefits__container">
        <div className="card">
          <img src={img} alt="..." />
          <button onClick={() => Toggle()}>Więcej</button>
          <Modal show={modal} close={Toggle} title="Złoto w Rzymie">
            <p>
              W metalurgii Starożytnego Rzymu zostały wprowadzone nowe metody
              wydobycia złota na dużą skalę, wykorzystujące urabianie
              hydrauliczne, od 25 roku p.n.e. wykorzystywane w Hiszpanii, a od
              106 roku n.e. w Dacji. Do największych kopalń należały te w Las
              Médulas, w prowincji León, gdzie siedem długich akweduktów
              pozwalało przemywać duże złoża aluwialne. Dużymi kopalniami były
              także te położone w Roşia Montană w Transylwanii (Siedmiogród),
              które do niedawna były wciąż eksploatowane przy użyciu metod
              odkrywkowych.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Złoto</em>
            </p>
          </Modal>
        </div>
        <div className="card">
          <img src={img1} alt="..." />
          <button onClick={() => Toggle1()}>Więcej</button>
          <Modal1 show={modal1} close={Toggle1} title="Złoto w imperium Mali">
            <p>
              Imperium Mali w Afryce słynęło w Starym Świecie ze swojego
              bogactwa w złoto. Mansa Musa, władca imperium (1312–1337) stał się
              sławny w całym Starym Świecie ze względu na jego hadżdż do Mekki w
              1324. Kiedy przechodził przez Kair w lipcu 1324 roku, towarzyszyła
              mu podobno karawana składająca się z ponad tysiąca ludzi i około
              setki wielbłądów. Wydał tyle złota, że obniżyło to jego cenę w
              Egipcie na ponad 10 lat. Szacuje się, że obszary dzisiejszej Ghany
              dostarczały 5-8 ton złota rocznie.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Złoto</em>
            </p>
          </Modal1>
        </div>
        <div className="card">
          <img src={img2} alt="..." />
          <button onClick={() => Toggle2()}>Więcej</button>
          <Modal2 show={modal2} close={Toggle2} title="Złoto w Ameryce">
            <p>
              Europejska eksploracja Ameryki była w dużej mierze napędzana
              doniesieniami o złotych ozdobach obficie pokazywanych przez
              Indian, szczególnie w Ameryce Centralnej, Peru, Ekwadorze i
              Kolumbii. Aztecy dosłownie traktowali złoto jako produkt bogów,
              nazywając je „boskimi odchodami” (nah. teocuitlatl). Jednakże dla
              ludów tubylczych Ameryki Północnej złoto było bezużyteczne,
              większą wartość widzieli w innych minerałach, które były
              bezpośrednio związane z ich zastosowaniem, takie jak obsydian,
              krzemień i łupek. Szacuje się, że eksplorowane obszary Ameryki
              Południowej łącznie z afrykańskim Złotym Wybrzeżem w XVI
              dostarczały około 10–12 ton złota rocznie.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Złoto</em>
            </p>
          </Modal2>
        </div>
        <div className="card">
          <img src={img3} alt="..." />
          <button onClick={() => Toggle3()}>Więcej</button>
          <Modal3 show={modal3} close={Toggle3} title="Parytet złota">
            <p>
              Chociaż cena metali z grupy platynowców może być znacznie wyższa,
              złoto przez długi czas było uważane za najbardziej pożądany metal
              szlachetny, a jego wartość w historii była używana jako standard
              dla wielu walut (parytet złota). Złoto było używane jako symbol
              czystości, wartości, królewskości, i szczególnie ról, które
              łączyły te cechy. Złoto jako symbol bogactwa i prestiżu zostało
              wyśmiane przez Thomasa More’a w traktacie Utopia. Na tej
              wymyślonej wyspie złoto było tak powszechne, że było używane do
              robienia łańcuchów dla niewolników, zastawy stołowej i desek
              klozetowych. Kiedy przybyli ambasadorzy z innych krajów, ubrani w
              złoto i odznaki, Utopianie wzięli ich za zwykłe sługi, składając
              hołdy najskromniej ubranym spośród ich grupy.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Złoto</em>
            </p>
          </Modal3>
        </div>
        <div className="card">
          <img src={img4} alt="..." />
          <button onClick={() => Toggle4()}>Więcej</button>
          <Modal4 show={modal4} close={Toggle4} title="Test na złoto">
            <p>
              Istnieje archaiczna tradycja gryzienia złota w celu sprawdzenia
              jego autentyczności. Chociaż nie jest to profesjonalna metoda
              badania złota, to „test gryzienia” nadaje się do oceny złota
              ponieważ złoto jest miękkim metalem (do 3 w skali Mohsa). Im
              czystsze złoto tym łatwiej je odkształcić. Malowany ołów może
              oszukać ten test ponieważ ołów jest bardziej miękki niż złoto
              (istnieje małe ryzyko zachorowania na ołowicę na skutek przyjęcia
              dawki ołowiu).
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Złoto</em>
            </p>
          </Modal4>
        </div>
        <div className="card">
          <img src={img5} alt="..." />
          <button onClick={() => Toggle5()}>Więcej</button>
          <Modal5 show={modal5} close={Toggle5} title="Kamień filozoficzny">
            <p>
              Jednym z głównych celów alchemików było przekształcenie różnych
              substancji, głównie ołowiu, w złoto. Miało odbyć się to w wyniku
              kontaktu danej substancji z mityczną substancją zwaną kamieniem
              filozoficznym. Chociaż im nigdy się to nie udało, alchemicy
              rozpowszechnili zainteresowanie tym co można robić z substancjami,
              przez co położyli podwaliny pod naukę, którą dzisiaj nazywamy
              chemią. Alchemicznym symbolem złota był okrąg z punktem w środku
              (☉), który był również symbolem astrologicznym i starożytnym
              chińskim znakiem oznaczającym słońce. Obecnie otrzymywanie złota z
              innych substancji jest możliwe m.in. przez przekształcenie rtęci
              na drodze wychwytu neutronu przez 196Hg.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Złoto</em>
            </p>
          </Modal5>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
