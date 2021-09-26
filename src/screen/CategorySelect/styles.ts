import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFValue(113)}px;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
    background-color: ${theme.colors.primary};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.shape};
  `}
`

type CategoryProps = {
  isActive: boolean
}

export const Category = styled.TouchableOpacity<CategoryProps>`
  ${({ theme, isActive }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: ${RFValue(15)}px;
    background-color: ${isActive
      ? theme.colors.secondaryLight
      : theme.colors.background};
  `}
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(14)}px;
  margin-right: 16px;
`

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `}
`

export const Divider = styled.View`
  ${({ theme }) => css`
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.text};
  `}
`

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`
