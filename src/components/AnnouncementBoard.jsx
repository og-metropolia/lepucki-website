import './announcement-board.css';
import React, { useState, useEffect } from 'react';
import Announcement from './Announcement';
import { ENDPOINTS, BASE_URL } from '../constants/api.mjs';
import { millisecond2Day } from '../utils/time.mjs';

/**
 * AnnouncementBoard-komponentti, joka sisältää ilmoitustaulun,
 * jossa käyttäjät voivat lisätä ilmoituksia. Komponentti hakee ilmoitukset
 * palvelimelta useEffect-hookin avulla ja käyttää sisäistä tilaa ilmoitusten
 * ja lomakkeen kenttien säilyttämiseen. handleSubmit-funktio käsittelee
 * uuden ilmoituksen lisäämisen ja tallentamisen palvelimelle.
 *
 * @component
 * @returns {JSX.Element} AnnouncementBoard-komponentti.
 */


export default function AnnouncementBoard() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [apartment_number, setApartment_number] = useState(undefined);
  const [duration, setDuration] = useState('');

  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchAnnouncements((announcements) =>
        announcements.filter((announcement) => {
          new Date(announcement.expiration_at).getTime() > new Date().getTime();
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch(`${BASE_URL}/${ENDPOINTS.announcements}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setAnnouncements(data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const validateFields = () => {
    if (!title || !content || !apartment_number || !duration) {
      alert(
        'Täytä kaikki kentät: otsikko, teksti, asuntunumero ja voimassaoloaika.'
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

    const newAnnouncement = {
      title,
      content,
      apartment_number,
      expiration_at: new Date(
        new Date().getTime() + millisecond2Day(parseInt(duration))
      )
        .toISOString()
        .slice(0, 19)
        .replace('T', ' '),
    };

    try {
      const response = await fetch(`${BASE_URL}/${ENDPOINTS.announcements}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAnnouncement),
      });

      if (response.ok) {
        const savedAnnouncement = await response.json();
        setAnnouncements([...announcements, savedAnnouncement]);
      } else {
        console.error('Error saving announcement:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving announcement:', error);
    }

    setAnnouncements([...announcements, newAnnouncement]);
    setTitle('');
    setContent('');
    setApartment_number('');
    setDuration('');
  };

  return (
    <div className="announcement-board-container">
      <h1 className="announcement-header">Ilmoitustaulu</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Otsikko:
          <textarea
            className="announcement-input"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          Teksti:
          <textarea
            className="announcement-input input-announcement-content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </label>
        <br />
        <label>
          Asuntonumero:
          <input
            className="announcement-input"
            type="number"
            value={apartment_number}
            onChange={(event) => setApartment_number(event.target.value)}
          />
        </label>
        <br />
        <label>
          Voimassaoloaika (päivinä):
          <input
            className="announcement-input"
            type="number"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
          />
        </label>
        <br />
        <button className="btn-announcement" type="submit">
          Lisää ilmoitus
        </button>
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
