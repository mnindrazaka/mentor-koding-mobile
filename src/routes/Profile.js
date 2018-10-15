import { createStackNavigator } from 'react-navigation'
import Profile from '../scenes/Profile'

Profile.navigationOptions = {
  header: null
}

export default createStackNavigator({
  Profile
})
