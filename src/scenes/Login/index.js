import React, { Component } from 'react'
import { Content, Icon, Input, Button, Text, Container } from 'native-base'
import Item from '../../components/Item'
import Logo from './Logo'

import material from '../../../native-base-theme/variables/material'

class Login extends Component {
  moveToDaftar() {
    this.props.navigation.navigate('Daftar')
  }

  render() {
    return (
      <Container>
        <Content padder justifyContent={'center'}>
          <Logo />

          <Item regular>
            <Icon name="account" style={{ color: material.brandPrimary }} />
            <Input placeholder="Username" />
          </Item>

          <Item regular>
            <Icon name="lock" style={{ color: material.brandPrimary }} />
            <Input placeholder="Password" />
          </Item>

          <Button block marginBottom={15}>
            <Text>Login</Text>
          </Button>

          <Button block bordered onPress={() => this.moveToDaftar()}>
            <Text>Daftar</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

Login.navigationOptions = {
  header: null
}

export default Login
