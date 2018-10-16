import { createStackNavigator } from 'react-navigation'
import Profile from '../scenes/Profile'
import ProfileSetting from '../scenes/ProfileSetting'

Profile.navigationOptions = {
  header: null
}

ProfileSetting.navigationOptions = {
  header: null
}

export default createStackNavigator({
  Profile,
  ProfileSetting
})
