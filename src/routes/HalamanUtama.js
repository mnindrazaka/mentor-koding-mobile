import { createMaterialTopTabNavigator } from 'react-navigation'

import Pencarian from '../scenes/Pencarian'
import ObrolanTerbaru from '../scenes/ObrolanTerbaru'

import material from '../../native-base-theme/variables/material'

const HalamanUtama = createMaterialTopTabNavigator(
  {
    Pencarian,
    ObrolanTerbaru
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
