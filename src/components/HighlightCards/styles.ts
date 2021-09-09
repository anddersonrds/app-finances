import styled, { css, DefaultTheme } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

import { HighlightProps } from '.'

type StyleProps = Pick<HighlightProps, 'type'>

export const Wrapper = styled.View<StyleProps>`
  ${({ theme, type }) => css`
    width: ${RFValue(300)}px;
    padding: 20px 24px;
    padding-bottom: ${RFValue(42)}px;
    border-radius: 5px;
    background-color: ${type === 'total'
      ? theme.colors.secondary
      : theme.colors.shape};
    margin-right: 16px;
  `}
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text<StyleProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${type === 'total' ? theme.colors.shape : theme.colors.textDark};
  `}
`

const colorModifiers = {
  up: (theme: DefaultTheme) => css`
    color: ${theme.colors.success};
  `,
  down: (theme: DefaultTheme) => css`
    color: ${theme.colors.attention};
  `,
  total: (theme: DefaultTheme) => css`
    color: ${theme.colors.shape};
  `
}

export const Icon = styled(Feather)<StyleProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(42)}px;
    ${colorModifiers[type](theme)};
  `}
`

export const Content = styled.View``

export const Amount = styled.Text<StyleProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    margin-top: 38px;
    color: ${type === 'total' ? theme.colors.shape : theme.colors.textDark};
  `}
`
export const LastTransaction = styled.Text<StyleProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${type === 'total' ? theme.colors.shape : theme.colors.textDark};
  `}
`
