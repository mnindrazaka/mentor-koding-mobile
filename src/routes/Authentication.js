import { createStackNavigator } from 'react-navigation'
import Signin from '../scenes/Signin'
import Signup from '../scenes/Signup'

const Authentication = createStackNavigator({
  Signin,
  Signup
})

Signin.navigationOptions = {
  header: null
}

Signup.navigationOptions = {
  header: null
}

Authentication.navigationOptions = {
  header: null
}

export default Authentication
