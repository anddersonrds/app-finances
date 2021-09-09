import React from 'react'

import * as S from './styles'

type Category = {
  name: string
  icon: string
}

export type TransactionCardProps = {
  type: 'income' | 'outcome'
  title: string
  amount: string
  category: Category
  date: string
}

type Props = {
  data: TransactionCardProps
}

export const TransactionCard = ({
  data: { type, title, amount, category, date }
}: Props) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Amount type={type}>
        {type === 'outcome' && '- '}
        {amount}
      </S.Amount>
      <S.Footer>
        <S.Category>
          <S.Icon name={category.icon} />
          <S.CategoryName>{category.name}</S.CategoryName>
        </S.Category>
        <S.Date>{date}</S.Date>
      </S.Footer>
    </S.Wrapper>
  )
}

export default TransactionCard
