/**
 * Tiedosto sisältää hallituksen, isännöintitoimiston ja huoltoliikkeen tiedot.
 * @module contactData
 * @component
 */

/**
 * Hallituksen jäsenten tiedot.
 * @type {Array<{id: number, name: string, role: string, email: string, phone: string, image: string}>}
 */

export const hallitus = [
  {
    id: 1,
    name: 'Matti Meikäläinen',
    role: 'Puheenjohtaja',
    email: 'matti.meikalainen@lepucki.fi',
    phone: '+358401234567',
    image:
      'https://img.ilcdn.fi/bwjPIs-IYxKmDzcNS6rLhTYxbZA=/full-fit-in/612x0/img-s3.ilcdn.fi/67210d3592f41e76a8f93bc2f244d9ae8a87f80a13cfe2b69db829a0ae3f56f2.jpg',
  },
  {
    id: 2,
    name: 'Liisa Lammassaari',
    role: 'Varapuheenjohtaja',
    email: 'liisa@lepucki.fi',
    phone: '+358401234568',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/Edan_lepucki_2014.jpg',
  },
  {
    id: 3,
    name: 'Pekka Peltola',
    role: 'Sihteeri',
    email: 'pekka.peltola@lepucki.fi',
    phone: '+358401234569',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Victormigisha.png/88px-Victormigisha.png',
  },
  {
    id: 4,
    name: 'Anna Aalto',
    role: 'Jäsen',
    email: 'anna.aalto@lepucki.fi',
    phone: '+358401234570',
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 5,
    name: 'Jari Jokinen',
    role: 'Jäsen',
    email: 'jari.jokinen@lepucki.fi',
    phone: '+358401234571',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Anny5436.png/93px-Anny5436.png',
  },
  {
    id: 6,
    name: 'Markku Kuivanen',
    role: 'Jäsen',
    email: 'markku.kuivanen@lepucki.fi',
    phone: '+358405062100',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Markku_L%C3%B6yt%C3%B6nen-FIG_2001.jpg/640px-Markku_L%C3%B6yt%C3%B6nen-FIG_2001.jpg',
  },
];

export const isannointi = {
  name: 'Isännöinti Oy',
  address: 'Esimerkkikatu 1 A 1, 00100 Helsinki',
  email: 'isannointi@isanta.fi',
  phone: '+358101234567',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/City_Central_Tower_8.png/640px-City_Central_Tower_8.png ',
};

export const huolto = {
  name: 'Huoltomiehet Oy',
  address: 'Huoltajankatu 1',
  email: 'toimisto@huoltomiehet.fi',
  phone: '+358321123525',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Kehitysvammaliitto_Lepp%C3%A4vaara.jpg/640px-Kehitysvammaliitto_Lepp%C3%A4vaara.jpg',
};
