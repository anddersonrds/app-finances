import React from 'react'
import { Hightlight } from '../../components/HighlightCards'

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
} from './styles'

export function Dashboard() {
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
    </Container>
  )
}