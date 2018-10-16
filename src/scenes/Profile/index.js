import React, { Component } from 'react'
import { Container, Content, Text, Fab, Icon, Button } from 'native-base'

import material from '../../../native-base-theme/variables/material'

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
