import React, { Component } from 'react'
import { Content, Container, Text, Input, Textarea } from 'native-base'

import Item from '../../components/Item'

class ProfileInfo extends Component {
  render() {
    return (
      <Container marginTop={15}>
        <Content padder>
          <Text>Nama</Text>
          <Item regular>
            <Input placeholder="Masukkan Nama" />
          </Item>

          <Text>Alamat</Text>
          <Item regular>
            <Input placeholder="Masukkan Alamat" />
          </Item>

          <Text>Telepon</Text>
          <Item regular>
            <Input placeholder="Masukkan Telepon" keyboardType={'numeric'} />
          </Item>

          <Text>Pendidikan Terakhir</Text>
          <Item regular>
            <Input placeholder="Masukkan Pendidikan Terakhir" />
          </Item>

          <Text>Pekerjaan</Text>
          <Item regular>
            <Input placeholder="Masukkan Pekerjaan" />
          </Item>

          <Text>Deskripsi</Text>
          <Item regular>
            <Textarea placeholder="Ceritakan tentang anda" />
          </Item>
        </Content>
      </Container>
    )
  }
}

export default ProfileInfo
