import './announcement.css';
import React from 'react';
import { millisecond2Day } from '../utils/time.mjs';

export default function Announcement({ announcement }) {
  const getRemainingDays = (expiration_at) => {
    const timeDifference =
      new Date(expiration_at).getTime() - new Date().getTime();
    const daysDifference = Math.ceil(timeDifference / millisecond2Day(1));
    return daysDifference > 0 ? daysDifference : 0;
  };

  return (
    <li className="announcement">
      <strong>{announcement.title}</strong>
      <p>{announcement.content}</p>
      <p>{`Terveisin asunto ${announcement.apartment_number}.`}</p>
      <p className="remaining-days">
        {`(voimassa vielä ${getRemainingDays(
          announcement.expiration_at
        )} päivää)`}
      </p>
    </li>
  );
}
