import React, { Component } from 'react'
import { StyleProvider } from 'native-base'
import Routes from './src/routes'

import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Routes />
      </StyleProvider>
    )
  }
}
