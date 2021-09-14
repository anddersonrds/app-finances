import React from 'react'

import * as S from './styles'

type SelectProps = {
  title: string
}

const Select = ({ title }: SelectProps) => (
  <S.Wrapper>
    <S.Category>{title}</S.Category>
    <S.Icon name="chevron-down" />
  </S.Wrapper>
)

export default Select
