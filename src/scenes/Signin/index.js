import React, { Component } from 'react'
import { AsyncStorage, ToastAndroid } from 'react-native'
import { Content, Icon, Input, Button, Text, Container } from 'native-base'
import Item from 'components/Item'
import Logo from './Logo'
import material from 'native-base-theme/variables/material'

import { ApolloConsumer } from 'react-apollo'
import { gql } from 'apollo-boost'

const LOGIN_QUERY = gql`
  query loginQuery($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`

class Signin extends Component {
  state = {
    input: {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    this.checkAuth()
  }

  checkAuth() {
    AsyncStorage.getItem('token').then(value => {
      if (value) this.props.navigation.navigate('Main')
    })
  }

  changeInput(value, name) {
    const { input } = this.state
    input[name] = value
    this.setState({ input })
  }

  clearInput() {
    const { input } = this.state
    input.password = ''
    this.setState({ input })
  }

  async login(client) {
    const { username, password } = this.state.input
    const { data } = await client.query({
      query: LOGIN_QUERY,
      variables: { username, password }
    })

    if (this.isTokenValid(data)) {
      this.saveToken(data)
      this.checkAuth()
    } else {
      this.clearInput()
      ToastAndroid.show('Login failed', ToastAndroid.SHORT)
    }
  }

  isTokenValid(token) {
    return token !== ''
  }

  saveToken(token) {
    AsyncStorage.setItem('token', token)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <ApolloConsumer>
        {client => (
          <Container>
            <Content padder justifyContent={'center'}>
              <Logo />

              <Item regular>
                <Icon name='account' style={{ color: material.brandPrimary }} />
                <Input
                  placeholder='Nama Pengguna'
                  value={this.state.input.username}
                  onChangeText={text => this.changeInput(text, 'username')}
                />
              </Item>

              <Item regular>
                <Icon name='lock' style={{ color: material.brandPrimary }} />
                <Input
                  placeholder='Kata Sandi'
                  value={this.state.input.password}
                  onChangeText={text => this.changeInput(text, 'password')}
                  secureTextEntry
                />
              </Item>

              <Button
                block
                marginBottom={15}
                onPress={() => this.login(client)}>
                <Text>Masuk</Text>
              </Button>

              <Button block bordered onPress={() => navigate('Signup')}>
                <Text>Daftar</Text>
              </Button>
            </Content>
          </Container>
        )}
      </ApolloConsumer>
    )
  }
}

export default Signin
