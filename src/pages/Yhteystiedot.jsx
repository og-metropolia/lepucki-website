import React from 'react';
import { hallitus, huolto, isannointi } from '../data/people';
import Contact from '../components/contact';
import './yhteystiedot.css';

export default function Yhteystiedot() {
  return (
    <>
      <main>
        <header>
          <h1 className="login-text">Yhteystiedot</h1>
        </header>
        <People />
        {<Contact />}
      </main>
    </>
  );
}

function People() {
  return (
    <div>
      <h3>Hallitus</h3>
      <ul>
        {hallitus.map((member) => (
          <li key={member.id}>
            <h4>{member.name}</h4>
            <p>{member.role}</p>
            <p>{member.email}</p>
            <p>{member.phone}</p>
          </li>
        ))}
      </ul>
      <h3>Isännöitsijä</h3>
      <ul>
        <li>
          <p>{isannointi.name}</p>
          <p>{isannointi.address}</p>
          <p>{isannointi.email}</p>
          <p>{isannointi.phone}</p>
        </li>
      </ul>
      <h3>Huolto</h3>
      <ul>
        <li>
          <p>{huolto.name}</p>
          <p>{huolto.address}</p>
          <p>{huolto.email}</p>
          <p>{huolto.phone}</p>
        </li>
      </ul>
    </div>
  );
}
