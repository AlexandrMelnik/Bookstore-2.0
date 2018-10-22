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
    <h4 style={{marginTop: '40px'}}>
      {i18next.t('contacts')}
    </h4>
    <hr className='modern-hr' />
    {contacts.map((contact, index) => (
      <div key={index} style={{marginBottom: '20px'}}>
        <img src={contact.img} alt={contact.name} />
        <span style={{marginLeft: '10px'}}>{contact.name}</span>
      </div>
    ))}
  </div>
);

export default Contact;
