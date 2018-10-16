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

import Item from '../../components/Item'
import Header from '../../components/Header'

class SignupAdditionalInfo extends Component {
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

          <View flexDirection={'row'} justifyContent={'space-between'}>
            <Button success block onPress={() => navigate('SignupSelectSkill')}>
              <Text>Simpan</Text>
            </Button>

            <Button
              danger
              bordered
              block
              onPress={() => navigate('SignupSelectSkill')}>
              <Text>Lewati</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

export default SignupAdditionalInfo
