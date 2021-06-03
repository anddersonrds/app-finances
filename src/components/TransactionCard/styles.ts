import styled, { css, DefaultTheme } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

type TrasactionStyleProps = {
  type: 'income' | 'outcome'
}

const colorModifiers = {
  income: (theme: DefaultTheme) => css`
    color: ${theme.colors.success};
  `,
  outcome: (theme: DefaultTheme) => css`
    color: ${theme.colors.attention};
  `,
}

export const Wrapper = styled.View`
  ${({ theme }) => css`
    padding: 16px 24px;
    border-radius: 5px;
    margin-bottom: 16px;
    background-color: ${theme.colors.shape};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `}
`

export const Amount = styled.Text<TrasactionStyleProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    margin-top: 2px;
    ${colorModifiers[type](theme)}
  `}
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.text};
  `}
`

export const CategoryName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    margin-left: 16px;
    color: ${theme.colors.text};
  `}
`

export const Date = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
  `}
`
