import React from 'react';
import i18next from 'i18next';

const socials = [
  {img: '/social/google.svg', name: 'Google plus'},
  {img: '/social/facebook.svg', name: 'Facebook'},
  {img: '/social/instagram.svg', name: 'Instagram'},
  {img: '/social/tumblr.svg', name: 'Tumblr'},
];

const Social = () => (
  <div className="social">
    <h4 style={{marginTop: '40px'}}>
      {i18next.t('socials')}
    </h4>
    <hr className='modern-hr' />
    {socials.map((social, index) => (
      <div key={index} style={{marginBottom: '20px'}}>
        <img src={social.img} alt={social.name} />
        <span style={{marginLeft: '20px'}}>{social.name}</span>
      </div>
    ))}
  </div>
);

export default Social;
