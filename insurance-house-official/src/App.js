import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';

import './App.scss';

function App () {
  return (
    <div>
      <Header/>
      <Banner/>
      <Services/>
    </div>
  );
}

export default App;
