import React, { Component } from 'react'
import { Content, Container, Text, Input, Textarea } from 'native-base'

import { Item } from 'components'

class ProfileInfo extends Component {
  render() {
    return (
      <Container marginTop={15}>
        <Content padder>
          <Text>Nama</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Nama"
              value={this.props.input.name}
              onChangeText={text => this.props.onChange('name', text)}
            />
          </Item>

          <Text>Alamat</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Alamat"
              value={this.props.input.address}
              onChangeText={text => this.props.onChange('address', text)}
            />
          </Item>

          <Text>Telepon</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Telepon"
              keyboardType={'numeric'}
              value={this.props.input.phone}
              onChangeText={text => this.props.onChange('phone', text)}
            />
          </Item>

          <Text>Pendidikan Terakhir</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Pendidikan Terakhir"
              value={this.props.input.education}
              onChangeText={text => this.props.onChange('education', text)}
            />
          </Item>

          <Text>Pekerjaan</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Pekerjaan"
              value={this.props.input.job}
              onChangeText={text => this.props.onChange('job', text)}
            />
          </Item>

          <Text>Deskripsi</Text>
          <Item regular>
            <Textarea
              placeholder="Ceritakan tentang anda"
              value={this.props.input.description}
              onChangeText={text => this.props.onChange('description', text)}
            />
          </Item>
        </Content>
      </Container>
    )
  }
}

export default ProfileInfo
