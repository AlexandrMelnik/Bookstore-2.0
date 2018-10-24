import React from 'react';
import i18next from 'i18next';

const socials = [
  {img: '/social/google.svg', name: 'Google plus', link: 'https://plus.google.com/discover'},
  {img: '/social/facebook.svg', name: 'Facebook', link: 'https://www.facebook.com'},
  {img: '/social/instagram.svg', name: 'Instagram', link: 'https://www.instagram.com/?hl=ru'},
  {img: '/social/tumblr.svg', name: 'Tumblr', link: 'https://www.tumblr.com'},
];

const Social = () => (
  <div className="social">
    <h4 className="md-4">
      {i18next.t('socials')}
    </h4>
    <hr className='modern-hr' />
    {socials.map((social, index) => (
      <a key={index} href={social.link} target="_blank">
        <div key={index} className="mb-2">
          <img src={social.img} alt={social.name} />
          <span className="ml-1">{social.name}</span>
        </div>
      </a>
    ))}
  </div>
);

export default Social;
