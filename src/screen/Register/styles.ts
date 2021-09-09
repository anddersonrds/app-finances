import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`

export const Header = styled.View`
  ${({theme}) => css`
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: ${RFValue(113)}px;
    padding-bottom: 19px;
    background-color: ${theme.colors.primary};
  `}
`

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.shape} 
  `}
`

export const Form = styled.View`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    justify-content: space-between;
    padding: 24px;
  `}
`

export const Fields = styled.View`
  ${({ theme }) => css``}
`

export const TransactionTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`