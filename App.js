import React, { Component } from 'react'
import { StyleProvider } from 'native-base'
import Routes from './src/routes'

import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'

import 'moment/locale/id'

import { ApolloProvider } from 'react-apollo'
import { client } from './src/services/graphql'

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <StyleProvider style={getTheme(material)}>
          <Routes />
        </StyleProvider>
      </ApolloProvider>
    )
  }
}
