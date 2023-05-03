import React from 'react';
import { hallitus, huolto, isannointi } from '../data/people';
import Contact from '../components/contact';
import './yhteystiedot.css';

/**
 * Yhteystiedot()-funktio palauttaa sivun,
 * joka käyttää elementteinä People ja Contact moduulit
 * @component
 * @returns {JSX.Element} Yhteystiedot-komponentti.
 */

export default function Yhteystiedot() {
  return (
    <>
      <main>
        <header>
          <h1 className="login-text">Yhteystiedot</h1>
        </header>
        <People />
        <Contact />
      </main>
    </>
  );
}

/**
 * Taloyhtiän henkilöstö.
 * @component
 * @returns {JSX.Element} People-komponentti.
 */
function People() {
  return (
    <div className="yhteystiedot">
      <div className="hallitus">
        <h3 className="yhteystietoHeader">Hallitus</h3>
        <div className="hallitus-members">
          {hallitus.map((member) => (
            <div key={member.id} className="memebers-container">
              <img
                src={member.image}
                alt={member.name}
                className="memberImage"
              />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
              <a className="contact-link" href={`mailto:${member.email}`}>
                {member.email}
              </a>
              <p>
                <a className="contact-link" href={`tel:${member.phone}`}>
                  {member.phone}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="isannointiJaHuolto">
        <div className="isannointi">
          <h3 className="yhteystietoHeader">Isännöitsijä</h3>
          <img
            src={isannointi.image}
            alt="Isännöitsijä"
            className="isannointiImage"
          />
          <ul>
            <li>
              <p>{isannointi.name}</p>
              <p>{isannointi.address}</p>
              <p>
                <a className="contact-link" href={`mailto:${isannointi.email}`}>
                  {isannointi.email}
                </a>
              </p>
              <p>
                <a className="contact-link" href={`tel:${isannointi.phone}`}>
                  {isannointi.phone}
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="huolto">
          <h3 className="yhteystietoHeader">Huolto</h3>
          <img src={huolto.image} alt="Huolto" className="huoltoImage" />
          <ul>
            <li>
              <p>{huolto.name}</p>
              <p>{huolto.address}</p>
              <p>
                <a className="contact-link" href={`mailto:${huolto.email}`}>
                  {huolto.email}
                </a>
              </p>
              <p>
                <a className="contact-link" href={`tel:${huolto.phone}`}>
                  {huolto.phone}
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
