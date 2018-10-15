import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'

import Identity from './Identity'
import Tabs from './Tabs'

class Profile extends Component {
  render() {
    return (
      <Container>
        <Identity />
        <Tabs />
      </Container>
    )
  }
}

export default Profile
