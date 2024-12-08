import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

import { useState } from 'react';
import Welcome from './components/Welcome';
import { greet, nameShort } from './common/index-string';
import Card from './components/Card';

import ProductsDashboard from './components/ProductsDashboard';
import Peoples from './components/Peoples';
import LatestNews from './components/LatestNews';
function App() {
  return (
    <>
      <Welcome />
      <Card />
      <LatestNews />
      <ProductsDashboard />
      <Peoples />
    </>
  );
}

export default App;
