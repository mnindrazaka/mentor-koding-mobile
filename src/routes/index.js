import { createStackNavigator } from 'react-navigation'

import Masuk from '../scenes/Masuk'
import Daftar from '../scenes/Daftar'
import HalamanUtama from './HalamanUtama'

export default createStackNavigator({
  Masuk,
  Daftar,
  HalamanUtama
})
