import { createMaterialTopTabNavigator } from 'react-navigation'

import Search from './Search'
import Meetup from './Meetup'
import Chat from './Chat'

import material from '../../native-base-theme/variables/material'

const Main = createMaterialTopTabNavigator(
  {
    Search,
    Meetup,
    Chat
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: 'white'
      },
      style: {
        backgroundColor: material.brandPrimary
      }
    }
  }
)

Search.navigationOptions = {
  title: 'Pencarian'
}

Chat.navigationOptions = {
  title: 'Obrolan'
}

Main.navigationOptions = {
  header: null
}

export default Main
