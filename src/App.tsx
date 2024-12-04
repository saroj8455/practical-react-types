import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

import { useState } from 'react';
import Welcome from './components/Welcome';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Welcome />
    </>
  );
}

export default App;
