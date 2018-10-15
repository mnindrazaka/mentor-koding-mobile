import { createMaterialTopTabNavigator } from 'react-navigation'

import Search from './Search'
import Meetup from './Meetup'
import Chat from './Chat'
import Profile from './Profile'
import material from '../../native-base-theme/variables/material'

import React from 'react'
import { Icon } from 'native-base'

const Main = createMaterialTopTabNavigator(
  {
    Search,
    Meetup,
    Chat,
    Profile
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
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
  tabBarIcon: <Icon name={'magnify'} style={{ color: 'white' }} />
}

Meetup.navigationOptions = {
  tabBarIcon: <Icon name={'calendar'} style={{ color: 'white' }} />
}

Chat.navigationOptions = {
  tabBarIcon: <Icon name={'message-text'} style={{ color: 'white' }} />
}

Profile.navigationOptions = {
  tabBarIcon: <Icon name={'account'} style={{ color: 'white' }} />
}

Main.navigationOptions = {
  header: null
}

export default Main
