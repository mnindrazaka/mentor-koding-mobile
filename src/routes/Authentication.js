import { createStackNavigator } from 'react-navigation'
import Signin from '../scenes/Signin'
import Signup from '../scenes/Signup'
import SignupCongratulation from '../scenes/SignupCongratulation'
import SignupAdditionalInfo from '../scenes/SignupAdditionalInfo'
import SignupSocialMedia from '../scenes/SignupSocialMedia'
import SignupSelectSkill from '../scenes/SignupSelectSkill'

const Authentication = createStackNavigator({
  Signin,
  Signup,
  SignupCongratulation,
  SignupAdditionalInfo,
  SignupSocialMedia,
  SignupSelectSkill
})

Signin.navigationOptions = {
  header: null
}

Signup.navigationOptions = {
  header: null
}

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

Authentication.navigationOptions = {
  header: null
}

export default Authentication
