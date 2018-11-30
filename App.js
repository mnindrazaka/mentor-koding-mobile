import React, { Component } from 'react'
import { StyleProvider } from 'native-base'
import Routes from './src/routes'

import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'

import 'moment/locale/id'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'https://mentor-microservice-gateway.herokuapp.com/graphql'
})

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
