import React, { useState, useEffect } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

import Modal from 'react-modal';
import { NewTransactionModal } from './components/Modal';
import { TransactionsProvider } from './hooks/useTransactions';




function App() {
  const [isNewTransactionModalOpen, setIsNewTransaction] = useState(true);


  function handleOpenNewTransactionModal() {
    setIsNewTransaction(true);
  }

  function handleCloseNewTransaction() {
    setIsNewTransaction(false);
  }


  useEffect(() => {
    setTimeout(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
      }
    }, 2000)
  
  }, []);

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransaction}  />
      <Dashboard />
    </TransactionsProvider>
  );
}

export default App;
