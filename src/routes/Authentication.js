import { createStackNavigator } from 'react-navigation'
import Signin from '../scenes/Signin'
import Signup from '../scenes/Signup'
import SignupAdditionalInfo from '../scenes/SignupAdditionalInfo'
import SignupSelectSkill from '../scenes/SignupSelectSkill'

const Authentication = createStackNavigator({
  Signin,
  Signup,
  SignupAdditionalInfo,
  SignupSelectSkill
})

Signin.navigationOptions = {
  header: null
}

Signup.navigationOptions = {
  header: null
}

SignupAdditionalInfo.navigationOptions = {
  header: null
}

SignupSelectSkill.navigationOptions = {
  header: null
}

Authentication.navigationOptions = {
  header: null
}

export default Authentication
