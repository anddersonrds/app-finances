import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

type TransactionTypeButtonProps = {
  type: 'up' | 'down'
  title: string
  isActive: boolean
} & TouchableOpacityProps

const TransactionTypeButton = ({ type, title, isActive, ...rest }: TransactionTypeButtonProps) => (
  <S.Wrapper { ...rest } type={type} isActive={isActive}>
    <S.Icon name={icons[type]} type={type} />
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default TransactionTypeButton
