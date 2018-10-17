import { createSwitchNavigator } from 'react-navigation'

import Authentication from './Authentication'
import Welcoming from './Welcoming'
import Main from './Main'

export default createSwitchNavigator({
  Authentication,
  Welcoming,
  Main
})
