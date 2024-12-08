import React from 'react';
import Container from './Container';
import { calculateAge, people } from '../common/index-date';
import { calcAge } from '../common';

export default function Peoples() {
  console.log(calculateAge('2000-12-09'));
  // console.log(calcAge('2000-12-09'));

  return (
    <Container>
      <h1>Manage People Data</h1>
    </Container>
  );
}
