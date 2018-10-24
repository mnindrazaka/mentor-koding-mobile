import React, { Component } from 'react'
import { Container } from 'native-base'

import Identity from './Identity'
import Tabs from './Tabs'

class Profile extends Component {
  state = {
    profile: {}
  }

  componentDidMount() {
    this.getProfile()
  }

  getProfile() {
    this.setState({ profile: this.props.navigation.getParam('profile') })
  }

  render() {
    return (
      <Container>
        <Identity
          profile={this.state.profile}
          navigation={this.props.navigation}
        />
        <Tabs navigation={this.props.navigation} profile={this.state.profile} />
      </Container>
    )
  }
}

export default Profile
