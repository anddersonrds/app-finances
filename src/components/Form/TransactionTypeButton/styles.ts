import styled, { css, DefaultTheme } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

type WrapperProps = {
  isActive: boolean
  type: 'up' | 'down'
}

type IconProps = {
  type: 'up' | 'down'
}

const wrapperModifiers = {
  up: (theme: DefaultTheme) => css`
    background: ${theme.colors.successLight};
    border: 0;
  `,
  down: (theme: DefaultTheme) => css`
    background: ${theme.colors.attentionLight};
    border: 0;
  `
}

export const Wrapper = styled(TouchableOpacity)<WrapperProps>`
  ${({ theme, isActive, type }) => css`
    width: 48%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1.5px solid ${theme.colors.text};
    padding: 16px;

    ${isActive && wrapperModifiers[type](theme)}
  `}
`

export const Icon = styled(Feather)<IconProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
    color: ${type === 'up' ? theme.colors.success : theme.colors.attention};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `}
`
