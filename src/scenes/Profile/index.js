import React, { Component } from 'react'
import { Container } from 'native-base'

import Identity from './Identity'
import Tabs from './Tabs'

class Profile extends Component {
  state = {
    active: false
  }

  render() {
    return (
      <Container>
        <Identity />
        <Tabs navigation={this.props.navigation} />
      </Container>
    )
  }
}

export default Profile
