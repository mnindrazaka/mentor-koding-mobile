import React, { Component } from 'react'
import { Content, Container, Text, Input, Textarea } from 'native-base'

import Item from '../../components/Item'

class ProfileInfo extends Component {
  state = {
    input: {
      name: '',
      address: '',
      phone: '',
      education: '',
      job: '',
      description: ''
    }
  }

  changeInput(value, name) {
    let input = this.state.input
    input[name] = value
    this.setState({ input })
  }

  render() {
    return (
      <Container marginTop={15}>
        <Content padder>
          <Text>Nama</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Nama"
              value={this.state.input.name}
              onChangeText={text => this.changeInput(text, 'name')}
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

          <Text>Pendidikan Terakhir</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Pendidikan Terakhir"
              value={this.state.input.education}
              onChangeText={text => this.changeInput(text, 'education')}
            />
          </Item>

          <Text>Pekerjaan</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Pekerjaan"
              value={this.state.input.job}
              onChangeText={text => this.changeInput(text, 'job')}
            />
          </Item>

          <Text>Deskripsi</Text>
          <Item regular>
            <Textarea
              placeholder="Ceritakan tentang anda"
              value={this.state.input.description}
              onChangeText={text => this.changeInput(text, 'description')}
            />
          </Item>
        </Content>
      </Container>
    )
  }
}

export default ProfileInfo
