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
    const { navigate } = this.props.navigation

    return (
      <Container>
        <Identity />
        <Tabs />

        <Fab
          active={this.state.active}
          direction="down"
          style={{ backgroundColor: '#FFF' }}
          position="topRight"
          onPress={() => this.setState({ active: !this.state.active })}>
          <Icon name="settings" style={{ color: material.brandPrimary }} />
          <Button style={{ backgroundColor: material.brandWarning }}>
            <Icon name="account-edit" />
          </Button>
          <Button
            style={{ backgroundColor: material.brandDanger }}
            onPress={() => navigate('Signin')}>
            <Icon name="logout-variant" />
          </Button>
        </Fab>
      </Container>
    )
  }
}

export default Profile
