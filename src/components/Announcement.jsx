import './announcement.css';
import React from 'react';
import { millisecond2Day } from '../utils/time.mjs';

/**
 * Announcement-komponentti esittää ilmoituksen tiedot.
 *
 * @component
 * @param {Object} props - Komponentin propsit.
 * @param {Object} props.announcement - Ilmoituksen tiedot.
 * @param {string} props.announcement.title - Ilmoituksen otsikko.
 * @param {string} props.announcement.content - Ilmoituksen sisältö.
 * @param {string} props.announcement.apartment_number - Ilmoituksen jättäneen asunnon numero.
 * @param {string} props.announcement.expiration_at - Ilmoituksen voimassaolon päättymispäivä.
 * @returns {JSX.Element} Announcement-komponentti.
 */

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
