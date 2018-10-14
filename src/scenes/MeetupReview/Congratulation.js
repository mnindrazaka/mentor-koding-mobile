import React, { Component } from 'react'
import styled from 'styled-components/native'
import { H3, Text, Icon } from 'native-base'

import material from '../../../native-base-theme/variables/material'

class Congratulation extends Component {
  render() {
    return (
      <View>
        <Icon
          name={'check-circle-outline'}
          style={{
            fontSize: 80,
            color: material.brandSuccess,
            marginBottom: 30
          }}
        />
        <H3>Meetup Selesai</H3>
        <Text style={{ textAlign: 'center' }}>
          Ceritakan pendapat anda mengenai meetup dengan mentor anda
        </Text>
      </View>
    )
  }
}

const View = styled.View`
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`

export default Congratulation
