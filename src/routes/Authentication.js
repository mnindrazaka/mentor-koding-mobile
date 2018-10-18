import { createStackNavigator } from 'react-navigation'
import { Signin, Signup } from 'scenes'

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
