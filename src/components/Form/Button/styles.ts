import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Wrapper = styled(TouchableOpacity)`
  ${({ theme }) => css`
    width: 100%;
    align-items: center;
    padding: 18px;
    border-radius: 5px;
    background-color: ${theme.colors.secondary};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.shape};
  `}
`