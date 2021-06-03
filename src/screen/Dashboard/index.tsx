import React from 'react'

import { Hightlight } from '../../components/HighlightCards'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'

import {
  Container,
  Header,
  Wrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HightlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles'

export interface DataListProps extends TransactionCardProps {
  id: string
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'income',
      title: "Desenvolvimento de sites",
      amount: "R$ 3.750,00",
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: "25/02/2021"
    },
    {
      id: '2',
      type: 'outcome',
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      date: "13/04/2021"
    },
    {
      id: '3',
      type: 'outcome',
      title: "Aluguel do apartamento",
      amount: "R$ 1.200,00",
      category: {
        name: 'Casa',
        icon: 'shopping-bag',
      },
      date: "27/02/2021"
    }
  ]

  return (
    <Container>
      <Header>
        <Wrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/10183881?v=4' }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Anderson Rodrigues</UserName>
            </User>
          </UserInfo>
          
          <Icon name="power" />
        </Wrapper>
      </Header>
      
      <HightlightCards>
        <Hightlight 
          type="up"
          title="Entradas" 
          amount="R$ 3.750,00" 
          lastTransaction="Ontem" 
        />
        <Hightlight 
          type="down"
          title="Saídas" 
          amount="R$ 3.000,00" 
          lastTransaction="Nem sei mah!" 
        />
        <Hightlight 
          type="total"
          title="Total" 
          amount="R$ 750,00" 
          lastTransaction="Só isso  u.u" 
        />
      </HightlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TransactionCard data={item} />
          )}
        />
      </Transactions>
    </Container>
  )
}