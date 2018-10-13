import React, { Component } from 'react'
import { Content, Icon, Input, Button, Text, Container } from 'native-base'
import Item from '../../components/Item'
import Logo from './Logo'

import material from '../../../native-base-theme/variables/material'

class Signin extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Content padder justifyContent={'center'}>
          <Logo />

          <Item regular>
            <Icon name="account" style={{ color: material.brandPrimary }} />
            <Input placeholder="Nama Pengguna" />
          </Item>

          <Item regular>
            <Icon name="lock" style={{ color: material.brandPrimary }} />
            <Input placeholder="Kata Sandi" />
          </Item>

          <Button block marginBottom={15} onPress={() => navigate('Main')}>
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
