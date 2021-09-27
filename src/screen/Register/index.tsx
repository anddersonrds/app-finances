import React, { useState } from 'react'
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native'
import { useForm } from 'react-hook-form'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Button from '../../components/Form/Button'
import InputForm from '../../components/Form/InputForm'
import Select from '../../components/Form/Select'
import TransactionTypeButton from '../../components/Form/TransactionTypeButton'
import CategorySelect from '../CategorySelect'

import * as S from './styles'

type FormData = {
  name: string
  amount: string
}

const schemaValidation = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number()
    .typeError('Informe o valor numérico')
    .positive('O valor não pode ser negativo')
})

export const Register = () => {
  const [transactionType, setTransactionType] = useState('')
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaValidation)
  })

  const handleSelectButton = (button: 'up' | 'down'): void => {
    setTransactionType(button)
  }

  const handleCloseCategoryModal = (): void => {
    setIsCategoryModalOpen(false)
  }

  const handleOpenCategoryModal = (): void => {
    setIsCategoryModalOpen(true)
  }

  const handleRegister = (form: FormData) => {
    if (!transactionType) return Alert.alert('Selecione o tipo de transação')

    if (category.key === 'category')
      return Alert.alert('Selecione uma categoria')

    console.log(form)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Wrapper>
        <S.Header>
          <S.Title>Cadastro</S.Title>
        </S.Header>

        <S.Form>
          <S.Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

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

            <Select title={category.name} onPress={handleOpenCategoryModal} />
          </S.Fields>
          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </S.Form>

        <Modal visible={isCategoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseCategoryModal}
          />
        </Modal>
      </S.Wrapper>
    </TouchableWithoutFeedback>
  )
}

export default Register
