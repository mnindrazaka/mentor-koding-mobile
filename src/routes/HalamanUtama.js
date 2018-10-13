import { createMaterialTopTabNavigator } from 'react-navigation'

import Pencarian from './Pencarian'
import Obrolan from './Obrolan'

import material from '../../native-base-theme/variables/material'

const HalamanUtama = createMaterialTopTabNavigator(
  {
    Pencarian,
    Obrolan
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: material.brandPrimary
      }
    }
  }
)

HalamanUtama.navigationOptions = {
  header: null
}

export default HalamanUtama
