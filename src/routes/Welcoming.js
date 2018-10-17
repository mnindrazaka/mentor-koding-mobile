import { createStackNavigator } from 'react-navigation'

import SignupCongratulation from '../scenes/SignupCongratulation'
import SignupAdditionalInfo from '../scenes/SignupAdditionalInfo'
import SignupSocialMedia from '../scenes/SignupSocialMedia'
import SignupSelectSkill from '../scenes/SignupSelectSkill'

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
