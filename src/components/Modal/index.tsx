import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api';


import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTrasactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTrasactionModalProps) {
  const { transactions, createTransactions } = useTransactions();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const  [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

     await createTransactions({
      title, 
      amount,
      category,
      type,
    });

    setTitle('');
    setAmount(0);
    setType('deposit');
    setCategory('');
    onRequestClose();
  }



  return (
    <Modal isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close" >
        <img src={closeImg} alt="Fechar Modal"/>
        </button>

      <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar trasação</h2>

      <input 
      placeholder="Título"
      value={title}
      onChange={event => setTitle(event.target.value)}
      />
      <input type="number" value={amount}
      onChange={event =>{
        setAmount(Number(event.target.value))
        console.log(Number(event.target.value))
      }} />
      <input placeholder="Categoria" value={category}
      onChange={event => setCategory(event.target.value)} />
      <TransactionTypeContainer>
        <RadioBox isActive={type === 'deposit'} type="button" onClick={() => setType('deposit')}
        >
          <img src={incomeImg} />    
          <span>Entrada</span>
        </RadioBox>

        <RadioBox isActive={type === 'withdraw'} type="button" onClick={() => setType('withdraw')}>
          <img src={outcomeImg} />    
          <span>Saida</span>
        </RadioBox>

      </TransactionTypeContainer>
      <button type="submit">
        Cadastrar
      </button>
      </Container>
    </Modal>
  )
}