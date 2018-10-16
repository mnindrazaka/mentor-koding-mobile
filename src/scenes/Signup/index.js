import React, { Component } from 'react'
import { Content, Input, Text, Button, Container } from 'native-base'

import Item from '../../components/Item'
import Header from '../../components/Header'

class Signup extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Header navigation={this.props.navigation} title={'Daftar'} />

        <Content padder>
          <Text>Nama</Text>
          <Item regular>
            <Input placeholder="Masukkan Nama" />
          </Item>

          <Text>Username</Text>
          <Item regular>
            <Input placeholder="Masukkan Username" />
          </Item>

          <Text>Password</Text>
          <Item regular>
            <Input placeholder="Masukkan Password" secureTextEntry />
          </Item>

          <Text>Konfirmasi Password</Text>
          <Item regular>
            <Input placeholder="Masukkan Password Kembali" secureTextEntry />
          </Item>

          <Text>Alamat</Text>
          <Item regular>
            <Input placeholder="Masukkan Alamat" />
          </Item>

          <Text>Telepon</Text>
          <Item regular>
            <Input placeholder="Masukkan Telepon" keyboardType={'numeric'} />
          </Item>
        </Content>
        <Button block success onPress={() => navigate('SignupAdditionalInfo')}>
          <Text>Simpan</Text>
        </Button>
      </Container>
    )
  }
}

export default Signup
