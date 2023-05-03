import React from 'react';
import AnnouncementBoard from '../components/AnnouncementBoard';
import './home.css';

/**
 * Home-komponentti luo sivuston kotisivun, joka sisältää alisivuja tai alikomponentteja,
 * kuten ilmoitustaulun (AnnouncementBoard).
 * @returns {JSX.Element} Home-komponentti.
 */

export default function Home() {
  return (
    <>
      <AnnouncementBoard />
    </>
  );
}
