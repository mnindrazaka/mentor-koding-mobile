import React, { Component } from 'react'
import { Content, Input, Text, H3, Button, Container } from 'native-base'

import Item from '../../components/Item'
import Header from '../../components/Header'

class Daftar extends Component {
  render() {
    return (
      <Container>
        <Header navigation={this.props.navigation} title={'Daftar'} />

        <Content padder>
          <H3 style={{ marginBottom: 15 }}>Informasi Profil</H3>

          <Text>Nama</Text>
          <Item regular>
            <Input placeholder="Masukkan Nama" />
          </Item>

          <Text>Headline</Text>
          <Item regular>
            <Input placeholder="Masukkan Headline" />
          </Item>

          <Text>Alamat</Text>
          <Item regular>
            <Input placeholder="Masukkan Alamat" />
          </Item>

          <Text>Telepon</Text>
          <Item regular>
            <Input placeholder="Masukkan Telepon" />
          </Item>

          <Button block>
            <Text>Simpan</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

Daftar.navigationOptions = {
  header: null
}

export default Daftar
