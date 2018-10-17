import React, { Component } from 'react'
import { Content, Input, Text, Button, Container } from 'native-base'

import Item from '../../components/Item'
import Header from '../../components/Header'

class Signup extends Component {
  state = {
    input: {
      name: '',
      username: '',
      password: '',
      confirmPassword: '',
      address: '',
      phone: ''
    }
  }

  changeInput(value, name) {
    let input = this.state.input
    input[name] = value
    this.setState({ input })
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Header navigation={this.props.navigation} title={'Daftar'} />

        <Content padder>
          <Text>Nama</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Nama"
              value={this.state.input.name}
              onChangeText={text => this.changeInput(text, 'name')}
            />
          </Item>

          <Text>Username</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Username"
              value={this.state.input.username}
              onChangeText={text => this.changeInput(text, 'username')}
            />
          </Item>

          <Text>Password</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Password"
              secureTextEntry
              value={this.state.input.password}
              onChangeText={text => this.changeInput(text, 'password')}
            />
          </Item>

          <Text>Konfirmasi Password</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Password Kembali"
              secureTextEntry
              value={this.state.input.confirmPassword}
              onChangeText={text => this.changeInput(text, 'confirmPassword')}
            />
          </Item>

          <Text>Alamat</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Alamat"
              value={this.state.input.address}
              onChangeText={text => this.changeInput(text, 'address')}
            />
          </Item>

          <Text>Telepon</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Telepon"
              keyboardType={'numeric'}
              value={this.state.input.phone}
              onChangeText={text => this.changeInput(text, 'phone')}
            />
          </Item>
        </Content>
        <Button
          block
          success
          onPress={() => navigate('SignupCongratulation')}
          borderRadius={0}>
          <Text>Daftar</Text>
        </Button>
      </Container>
    )
  }
}

export default Signup
