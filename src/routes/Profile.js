import { createStackNavigator } from 'react-navigation'
import { Profile, ProfileSetting } from 'scenes'

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
