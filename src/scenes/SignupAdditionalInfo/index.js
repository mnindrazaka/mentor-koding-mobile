import React, { Component } from 'react'
import {
  Content,
  Input,
  Text,
  Button,
  Container,
  Textarea,
  View
} from 'native-base'

import { Header, Item } from 'components'

class SignupAdditionalInfo extends Component {
  state = {
    input: {
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
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Header
          navigation={this.props.navigation}
          title={'Informasi Tambahan'}
        />

        <Content padder>
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

          <View flexDirection={'row'} justifyContent={'space-between'}>
            <Button success block onPress={() => navigate('SignupSocialMedia')}>
              <Text>Simpan</Text>
            </Button>

            <Button
              danger
              bordered
              block
              onPress={() => navigate('SignupSocialMedia')}>
              <Text>Lewati</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

export default SignupAdditionalInfo
