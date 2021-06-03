import React from 'react'

import { 
  Wrapper,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from './styles'

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

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export const TransactionCard = ({ data: { type, title, amount, category, date } }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Amount type={type}>
        {type === 'outcome' && '- '}
        {amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Wrapper>
  )
}