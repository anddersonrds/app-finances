import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Dashboard from '../screen/Dashboard'
import Register from '../screen/Register'

const { Navigator, Screen } = createBottomTabNavigator()

const AppRoutes = () => (
  <Navigator>
    <Screen name="Listagem" component={Dashboard} />
    <Screen name="Cadastrar" component={Register} />
  </Navigator>
)

export default AppRoutes
