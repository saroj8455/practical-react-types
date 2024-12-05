import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';
import { greet } from './common/index-string';
import Card from './components/Card';
import CodeSnippet from './components/CodeSnippet';
import Container from './components/Container';
import { TechnolgiesProps } from './components/Technolgies';

function App() {
  // const greetMessage = greet('Hi, how are you?');
  // const test = JSON.stringify('   hello'.trim());

  return (
    <>
      <Welcome />
      <Card />
      <Container>
        <CodeSnippet />
      </Container>
    </>
  );
}

export default App;
