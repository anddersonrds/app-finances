import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type ButtonProps = {
  title: string
} & TouchableOpacityProps

const Button = ({ title, ...rest }: ButtonProps) => (
  <S.Wrapper {...rest}>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default Button
