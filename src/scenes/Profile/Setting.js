import React, { Component } from 'react'
import { Container, Button, Text, View } from 'native-base'

import styled from 'styled-components/native'

class Setting extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container marginTop={15}>
        <Title>Pengaturan</Title>
        <View>
          <Button
            block
            marginBottom={15}
            onPress={() => navigate('ProfileSetting')}>
            <Text>Pengaturan Profil</Text>
          </Button>

          <Button danger block bordered onPress={() => navigate('Signin')}>
            <Text>Keluar</Text>
          </Button>
        </View>
      </Container>
    )
  }
}

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`

export default Setting
