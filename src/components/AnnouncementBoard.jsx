import React, { useState } from 'react';

function AnnouncementBoard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [sender, setSender] = useState('');

  const [announcements, setAnnouncements] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAnnouncement = {
      id: announcements.length + 1,
      title,
      description,
      sender,
      date: new Date().toLocaleDateString(),
    };
    setAnnouncements([...announcements, newAnnouncement]);
    setTitle('');
    setDescription('');
    setSender('');
  };

  return (
    <div>
      <h2>Ilmoitustaulu</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Otsikko:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Teksti:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Lähettäjä:
          <input
            type="text"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Lisää ilmoitus</button>
      </form>
      <hr />
      <h3>Ilmoitukset:</h3>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.id}>
            <strong>{announcement.title}</strong> - {announcement.sender} -{' '}
            {announcement.date}
            <p>{announcement.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnnouncementBoard;
