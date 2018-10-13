import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { H3, Text } from 'native-base'

class Logo extends Component {
  render() {
    return (
      <View marginBottom={30} alignItems={'center'}>
        <Image
          source={require('./images/logo.png')}
          style={{ width: 150, height: 170 }}
          resizeMode="stretch"
          marginBottom={15}
        />
        <H3>Mentor Koding</H3>
        <Text>Cara Cepat Belajar Koding</Text>
      </View>
    )
  }
}

export default Logo
