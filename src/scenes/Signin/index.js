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
    const { username, password } = this.state.input
    const query = `mutation {
      login(username: "${username}", password: "${password}")
    }`
    user(query).then(data => {
      if (this.isTokenValid(data.login)) {
        this.saveToken(data.login)
        this.setProfile()
        this.setSkills()
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
    const query = `{
      myProfile {
        _id,
        name,
        profilePic,
        email,
        description,
        address,
        phone,
        job,
        isMentor,
        socialMedia {
          github,
          linkedin,
          facebook,
          instagram
        },
        education,
        skills
      }
    }`
    user(query).then(data => {
      AsyncStorage.setItem('profile', JSON.stringify(data.myProfile))
    })
  }

  setSkills() {
    const query = `{
      skills {
        id,
        keyName
      }
    }`
    user(query).then(data => {
      AsyncStorage.setItem('skills', JSON.stringify(data.skills))
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
