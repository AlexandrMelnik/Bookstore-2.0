import React from 'react';
import i18next from 'i18next';

const contacts = [
  {img: '/icon/marker.png', name: '3306 Arcadian Drive '},
  {img: '/icon/postcard.png', name: 'NY 10036'},
  {img: '/icon/country.png', name: 'United States'},
  {img: '/icon/phone.png', name: '+158971425335'},
  {img: '/icon/site.png', name: 'http://unione.me'},
];

const Contact = () => (
  <div className="contacts">
    <h4 className="md-4">
      {i18next.t('contacts')}
    </h4>
    <hr className='modern-hr' />
    {contacts.map((contact, index) => (
      <div key={index} className="mb-2">
        <img src={contact.img} alt={contact.name} />
        <span className="ml-1">{contact.name}</span>
      </div>
    ))}
  </div>
);

export default Contact;
