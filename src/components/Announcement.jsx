import React from 'react';

const Announcement = ({ announcement }) => {
  const getRemainingDays = (expirationDate) => {
    const timeDifference = new Date(expirationDate) - new Date();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference > 0 ? daysDifference : 0;
  };

  return (
    <li className="announcement">
      <strong>{announcement.title}</strong> - {announcement.sender} -{' '}
      {announcement.date}
      <p>{announcement.description}</p>
      <p className="remaining-days">
        Ilmoitus on voimassa vielä{' '}
        {getRemainingDays(announcement.expirationDate)} päivää
      </p>
    </li>
  );
};

export default Announcement;
