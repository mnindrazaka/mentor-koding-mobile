import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Container, Button, Text, View } from 'native-base'
import styled from 'styled-components/native'

class Setting extends Component {
  logout() {
    AsyncStorage.removeItem('token').then(() => {
      this.props.navigation.navigate('Signin')
    })
  }

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

          <Button danger block bordered onPress={() => this.logout()}>
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
