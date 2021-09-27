import React from 'react'
import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'

import Input from '../Input'

import * as S from './styles'

export type InputFormProps = {
  control: Control
  name: string
  error?: string
} & TextInputProps

const InputForm = ({ control, name, error, ...rest }: InputFormProps) => (
  <S.Wrapper>
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input onChangeText={onChange} value={value} {...rest} />
      )}
    />
    {!!error && <S.Error>{error}</S.Error>}
  </S.Wrapper>
)

export default InputForm
