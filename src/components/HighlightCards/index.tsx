import React from 'react'

import * as S from './styles'

export type HighlightProps = {
  type: 'up' | 'down' | 'total'
  title: string
  amount: string
  lastTransaction: string
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export const Hightlight = ({
  type,
  title,
  amount,
  lastTransaction
}: HighlightProps) => {
  return (
    <S.Wrapper type={type}>
      <S.Header>
        <S.Title type={type}>{title}</S.Title>
        <S.Icon name={icon[type]} type={type} />
      </S.Header>

      <S.Content>
        <S.Amount type={type}>{amount}</S.Amount>
        <S.LastTransaction type={type}>{lastTransaction}</S.LastTransaction>
      </S.Content>
    </S.Wrapper>
  )
}

export default Hightlight
