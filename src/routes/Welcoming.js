import { createStackNavigator } from 'react-navigation'
import {
  SignupCongratulation,
  SignupAdditionalInfo,
  SignupSocialMedia,
  SignupSelectSkill
} from 'scenes'

const Welcoming = createStackNavigator({
  SignupCongratulation,
  SignupAdditionalInfo,
  SignupSocialMedia,
  SignupSelectSkill
})

SignupCongratulation.navigationOptions = {
  header: null
}

SignupAdditionalInfo.navigationOptions = {
  header: null
}

SignupSocialMedia.navigationOptions = {
  header: null
}

SignupSelectSkill.navigationOptions = {
  header: null
}

Welcoming.navigationOptions = {
  header: null
}

export default Welcoming
