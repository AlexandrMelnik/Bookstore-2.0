import React from 'react';
import i18next from 'i18next';
import MapComponent from '../MapComponent';
import { Col } from 'react-bootstrap';
import Social from './Social';
import Contact from './Contact';

const AboutUsPage = () => (
  <div className="about-page">
    <h4>
      {i18next.t('about')}
    </h4>
    <hr className='modern-hr' />
    <Col xs={12} md={6}>
      <MapComponent isMarkerShow />
    </Col>
    <Col xs={12} md={6}>
      <h4>
        {i18next.t('bookstore_help')}
      </h4>
      <hr className='modern-hr' />
      <p>
         {i18next.t('bookstore_desc')}
      </p>
      <Col xs={12} md={6}>
        <Contact />
      </Col>
      <Col xs={12} md={6}>
        <Social />
      </Col>
    </Col>
  </div>
);

export default AboutUsPage;
