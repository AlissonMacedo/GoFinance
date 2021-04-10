import React from 'react';
import { Container } from './styles';
import { Summary } from '../Summary/index';
import { TrasactionsTable } from '../TransationsTable/index';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TrasactionsTable />
    </Container>
  )
}