import React, { Component } from 'react'
import styled from 'styled-components/native'
import { Text, Icon, Container, H2, H1, Button } from 'native-base'

import material from '../../../native-base-theme/variables/material'

class SignupCongratulation extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <View>
          <Icon
            name={'emoticon-excited'}
            style={{
              fontSize: 100,
              color: material.brandPrimary,
              marginBottom: 30
            }}
          />

          <H1>Selamat Datang</H1>
          <Text style={{ textAlign: 'center', marginBottom: 30 }}>
            Anda telah terdaftar sebagai pengguna mentor koding
          </Text>

          <Button
            success
            block
            onPress={() => navigate('SignupAdditionalInfo')}>
            <Text>Lanjutkan</Text>
          </Button>
        </View>
      </Container>
    )
  }
}

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 15px;
`

export default SignupCongratulation
