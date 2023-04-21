import React from 'react';
import './etusivu.css';

export default function Etusivu() {
  return (
    <>
      <h1>Tervetuloa Lepuckiin!</h1>
      <div className="etusivu-container">
        <div className="etusivu-content">
          <h2>Yhteisöllistä asumista Leppävaarassa</h2>
          <p>
            Lepucki tarjoaa asukkailleen monipuolista ja viihtyisää asumista
            modernissa ympäristössä. Taloyhtiössämme on paljon kivaa tekemistä
            ja nähtävää, joten asukkaidemme ei tarvitse koskaan tylsistyä.
          </p>
          <p>
            Haluatko aloittaa aamusi energisesti? Lepuckin kuntosalilla voit
            treenata omalla tahdillasi ja pitää huolta hyvinvoinnistasi.
            Kuntosali on aina auki ja varustettu laadukkailla laitteilla, joten
            voit nauttia treenaamisesta milloin tahansa.
          </p>
          <p>
            Kaipaatko yhteisöllisyyttä? Lepuckin monitoimitila on täydellinen
            paikka tavata naapureita ja järjestää yhteisiä tapahtumia. Voit
            esimerkiksi järjestää elokuvailtoja tai peli-iltoja ystäviesi
            kanssa.
          </p>
          <p>
            Lepucki tarjoaa asukkailleen myös monia muita palveluita, kuten
            autopaikkoja, lasten leikkipaikkoja ja pyörävarastoja. Tule
            tutustumaan Lepuckiin ja nauti upeasta asumisesta Leppävaarassa!
          </p>
          <p>
            Lepucki sijaitsee erinomaisella paikalla Leppävaarassa, sillä
            taloyhtiön läheisyydessä on sekä bussi- että juna-asemat, jotka
            tarjoavat kätevän tavan liikkua paikasta toiseen. Junayhteyksien
            avulla pääset helposti Helsingin keskustaan ja muihin lähialueisiin,
            kun taas bussiyhteydet tuovat lisämukavuutta päivittäiseen
            liikkumiseen. Alueella on myös hyvät pyöräilyreitit ja kävelytiet,
            joten liikkuminen onnistuu monin eri tavoin ja helposti.
          </p>
        </div>
        <img
          className="frontpage-image"
          src="https://media.kodinkuvat.fi/cdn-cgi/image/width=1440,quality=100/images/kDkYzK2Ze9PtpFrbinoHIYrf23hQoxxPLriTX9LO.jpg"
          alt="Aurinkoinen Leppävaarankatu 23."
        />
      </div>
      <div className="etusivu-container">
        <img
          className="frontpage-image"
          src="https://c1.staticflickr.com/5/4424/36362397355_62c51c217f_b.jpg"
          alt="Panorama Leppävaaran urheilupuistosta."
        />
        <div className="etusivu-content">
          <h2>Urheilu ja Liikkuminen</h2>
          <p>
            Leppävaaran urheilupuisto on monipuolinen liikuntakeskus Espoon
            Leppävaarassa. Urheilupuistossa on erilaisia
            liikuntamahdollisuuksia, kuten kuntorata, juoksurata, jalkapallo- ja
            pesäpallokentät, sekä sisä- ja ulkoliikuntapaikkoja. Alueella on
            myös uimahalli ja jäähalli.
          </p>
          <p>
            Lisäksi Leppävaaran urheilupuiston yhteydessä sijaitsee Espoonlahden
            ulkoilualue, joka tarjoaa hyvät mahdollisuudet erilaisiin
            ulkoiluaktiviteetteihin. Alueella on useita erilaisia kävely- ja
            pyöräilyreittejä, joita voi käyttää vuoden ympäri. Talvella
            Espoonlahdessa on hiihtolatuja, joita pitkin voi hiihtää kauniissa
            talvisessa maisemassa.
          </p>
          <p>
            Lisäksi Leppävaaran urheilupuistosta on hyvät yhteydet muihin
            ulkoilualueisiin, kuten Nuuksion kansallispuistoon, joka sijaitsee
            noin 20 kilometrin päässä Leppävaarasta. Nuuksiossa on lukuisia
            patikointi- ja pyöräilyreittejä, jotka sopivat eri tasoisille
            ulkoilijoille.
          </p>
        </div>
      </div>
    </>
  );
}
