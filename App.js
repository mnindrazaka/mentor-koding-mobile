import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { user } from 'services'
import { StyleProvider } from 'native-base'
import Routes from './src/routes'

import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'

export default class App extends Component {
  componentDidMount() {
    this.setSkills()
  }

  setSkills() {
    user.skills().then(data => {
      AsyncStorage.setItem('skills', JSON.stringify(data.skills))
    })
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Routes />
      </StyleProvider>
    )
  }
}
