import React from 'react'

import * as S from './styles'

type SelectProps = {
  title: string
  onPress: () => void
}

const Select = ({ title, onPress }: SelectProps) => (
  <S.Wrapper onPress={onPress}>
    <S.Category>{title}</S.Category>
    <S.Icon name="chevron-down" />
  </S.Wrapper>
)

export default Select
