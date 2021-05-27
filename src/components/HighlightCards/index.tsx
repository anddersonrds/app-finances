import React from 'react'

import { 
  Wrapper,
  Header,
  Title,
  Icon,
  Content,
  Amount,
  LastTransaction
} from './styles'

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

export const Hightlight = ({ type, title, amount, lastTransaction }: HighlightProps) => {
  return (
    <Wrapper type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Content>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Content>
    </Wrapper>
  )
}