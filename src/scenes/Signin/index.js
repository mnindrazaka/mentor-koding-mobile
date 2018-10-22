import React, { Component } from 'react'
import { AsyncStorage, ToastAndroid } from 'react-native'
import { Content, Icon, Input, Button, Text, Container } from 'native-base'
import Item from 'components/Item'
import Logo from './Logo'
import material from 'native-base-theme/variables/material'
import { user } from 'services'

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
      if (value) {
        this.props.navigation.navigate('Main')
      }
    })
  }

  changeInput(value, name) {
    let input = this.state.input
    input[name] = value
    this.setState({ input })
  }

  clearInput() {
    const { input } = this.state
    input.password = ''
    this.setState({ input })
  }

  login() {
    user.login(this.state.input).then(data => {
      if (this.isTokenValid(data)) {
        this.saveToken(data)
        this.setProfile()
        this.checkAuth()
      } else {
        this.clearInput()
        ToastAndroid.show(
          'Login failed : wrong username or password',
          ToastAndroid.LONG
        )
      }
    })
  }

  isTokenValid(token) {
    return token !== ''
  }

  saveToken(token) {
    AsyncStorage.setItem('token', token)
  }

  setProfile() {
    user.profile().then(data => {
      AsyncStorage.setItem('profile', JSON.stringify(data))
    })
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Content padder justifyContent={'center'}>
          <Logo />

          <Item regular>
            <Icon name="account" style={{ color: material.brandPrimary }} />
            <Input
              placeholder="Nama Pengguna"
              value={this.state.input.username}
              onChangeText={text => this.changeInput(text, 'username')}
            />
          </Item>

          <Item regular>
            <Icon name="lock" style={{ color: material.brandPrimary }} />
            <Input
              placeholder="Kata Sandi"
              value={this.state.input.password}
              onChangeText={text => this.changeInput(text, 'password')}
              secureTextEntry
            />
          </Item>

          <Button block marginBottom={15} onPress={() => this.login()}>
            <Text>Masuk</Text>
          </Button>

          <Button block bordered onPress={() => navigate('Signup')}>
            <Text>Daftar</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default Signin
