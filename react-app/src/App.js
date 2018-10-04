import React from 'react';
import Routes from './Routes';
import Header from './containers/HeaderContainer';
import Footer from './components/Footer';

const App = ({ location }) => (
  <div className="app">
    <Header />
    <Routes location={ location } />
    <Footer />
  </div>
);

export default App;
