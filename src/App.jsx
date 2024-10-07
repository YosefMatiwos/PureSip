import React from 'react';
import './App.css'; // Om du har dina stilar här
import PreviewCard from './components/PreviewCard';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <PreviewCard />
      </main>
      <footer className="footer">
        <div className="subscription">
          <h3>Bli prenumerant hos PureSip!</h3>
          <p>Få drinkrecept och exklusiva erbjudanden direkt till din mail.</p>
          <form className="subscription-form">
            <input type="email" placeholder="E-postadress" />
            <input type="tel" placeholder="+46 Mobilnummer" />
            <button type="submit">Börja prenumerera</button>
          </form>
          <p>Genom att anmäla dig godkänner du PureSip:s <a href="#">allmänna villkor</a> och <a href="#">integritetspolicy</a>.</p>
        </div>
        <div className="footer-info">
          <div className="company-info">
            <img src="path_to_logo" alt="ITHS bild" className="logo" />
            <p>PureSip</p>
            <p>Trekantsvägen 1, 117 43 Stockholm</p>
            <p><a href="mailto:info@iths.se">info@iths.se</a></p>
          </div>
          <div className="footer-links">
            <a href="#">Om PureSip</a>
            <a href="#">Allmänna villkor</a>
            <a href="#">Personuppgiftspolicy</a>
          </div>
          <div className="social-media">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-instagram"></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;


