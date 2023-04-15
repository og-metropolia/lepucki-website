/* Tämä koodi on React-komponentti nimeltä "AnnouncementBoard". Se on yksinkertainen ilmoitustaulu-sovellus,
jossa käyttäjät voivat lisätä uusia ilmoituksia. Sovellus tallentaa jokaisen ilmoituksen otsikon, kuvauksen, lähettäjän ja päivämäärän.
Lisäksi sovellus näyttää kaikki tallennetut ilmoitukset luettelossa.

Komponentin tila muuttuu käyttäjän syöttämän tiedon perusteella.
Announcements-taulukko tallentaa kaikki ilmoitukset, kun taas title, description ja sender ovat muuttujia, jotka tallentavat käyttäjän syöttämät tiedot.

handleSubmit-funktio käsittelee lomakkeen lähetyksen, luo uuden ilmoituksen-objektin ja lisää sen announcements-taulukkoon. Sen jälkeen se nollaa syötteet ja näyttää päivitetyt ilmoitukset.

Renderöinnissä, komponentti sisältää otsikon "Ilmoitustaulu" ja lomake, jonka avulla käyttäjät voivat lisätä uusia ilmoituksia.
Ilmoitusten luettelo näytetään alapuolella käyttämällä map-funktiota, joka käy läpi jokaisen ilmoituksen announcements-taulukossa ja luo uuden li-elementin jokaiselle ilmoitukselle.
okaisen li-elementin sisällä näytetään ilmoituksen tiedot, kuten otsikko, lähettäjä ja päivämäärä.

 */
import React, { useState, useEffect } from 'react';
import Announcement from './Announcement';
import './AnnouncementBoard.css';

export default function AnnouncementBoard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [sender, setSender] = useState('');
  const [duration, setDuration] = useState('');

  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // fetchAnnouncements(); // Poista kommentti kun REST_api backupservice käytössä
    const interval = setInterval(() => {
      setAnnouncements((announcements) =>
        announcements.filter(
          (announcement) => new Date(announcement.expirationDate) > new Date()
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Poista kommentti kun REST_api backupservice käytössä
  // const fetchAnnouncements = async () => {
  //   try {
  //     const response = await fetch('/api/announcements');
  //     const data = await response.json();
  //     setAnnouncements(data);
  //   } catch (error) {
  //     console.error('Error fetching announcements:', error);
  //   }
  // };

  const validateFields = () => {
    if (!title || !description || !sender || !duration) {
      alert(
        'Täytä kaikki kentät: otsikko, teksti, lähettäjä ja voimassaoloaika.'
      );
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateFields()) {
      return;
    }

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + parseInt(duration));

    const newAnnouncement = {
      id: announcements.length + 1,
      title,
      description,
      sender,
      date: new Date().toLocaleDateString('fi-FI'),
      expirationDate,
    };

    // Poista kommentti kun REST_api backupservice käytössä
    // try {
    //   const response = await fetch('/api/announcements', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(newAnnouncement),
    //   });

    //   if (response.ok) {
    //     const savedAnnouncement = await response.json();
    //     setAnnouncements([...announcements, savedAnnouncement]);
    //   } else {
    //     console.error('Error saving announcement:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Error saving announcement:', error);
    // }

    setAnnouncements([...announcements, newAnnouncement]);
    setTitle('');
    setDescription('');
    setSender('');
    setDuration('');
  };

  return (
    <div className="announcement-board-container">
      <h2>Ilmoitustaulu</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Otsikko:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          Teksti:
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <br />
        <label>
          Lähettäjä:
          <input
            type="text"
            value={sender}
            onChange={(event) => setSender(event.target.value)}
          />
        </label>
        <br />
        <label>
          Voimassaoloaika (päivinä):
          <input
            type="number"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Lisää ilmoitus</button>
      </form>
      <hr />
      <h3>Ilmoitukset:</h3>
      <ul>
        {announcements.map((announcement) => (
          <Announcement key={announcement.id} announcement={announcement} />
        ))}
      </ul>
    </div>
  );
}
