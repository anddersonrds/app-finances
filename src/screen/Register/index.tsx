import React, { useState } from 'react'

import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input'
import TransactionTypeButton from '../../components/Form/TransactionTypeButton'

import * as S from './styles'

export const Register = () => {
  const [transactionType, setTransactionType] = useState('')

  const handleSelectButton = (button: 'up' | 'down'): void => {
    setTransactionType(button)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <S.TransactionTypes>
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handleSelectButton('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handleSelectButton('down')}
              isActive={transactionType === 'down'}
            />
          </S.TransactionTypes>
        </S.Fields>
        <Button title="Enviar" />
      </S.Form>
    </S.Wrapper>
  )
}

export default Register
