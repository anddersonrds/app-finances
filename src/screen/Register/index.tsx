import React, { useState } from 'react'
import { Modal } from 'react-native'

import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input'
import Select from '../../components/Form/Select'
import TransactionTypeButton from '../../components/Form/TransactionTypeButton'
import CategorySelect from '../CategorySelect'

import * as S from './styles'

export const Register = () => {
  const [transactionType, setTransactionType] = useState('')
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)

  const handleSelectButton = (button: 'up' | 'down'): void => {
    setTransactionType(button)
  }

  const handleCloseCategoryModal = (): void => {
    setIsCategoryModalOpen(false)
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

          <Select title="Categoria" />
        </S.Fields>
        <Button title="Enviar" />
      </S.Form>

      <Modal visible={isCategoryModalOpen}>
        <CategorySelect
          category=""
          setCategory={}
          closeSelectCategory={handleCloseCategoryModal}
        />
      </Modal>
    </S.Wrapper>
  )
}

export default Register
