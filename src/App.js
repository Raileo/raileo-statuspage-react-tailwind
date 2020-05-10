import React from 'react';
import Layout from './components/Layout'
import { StoreContainer } from './store';
import 'boxicons';

function App() {
  return (
    <StoreContainer.Provider>
      <Layout />
    </StoreContainer.Provider>
  );
}

export default App;
