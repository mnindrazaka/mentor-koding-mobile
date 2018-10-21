import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Container } from 'native-base'

import Identity from './Identity'
import Tabs from './Tabs'

class Profile extends Component {
  state = {
    profile: {}
  }

  componentDidMount() {
    this.willFocusListener = this.props.navigation.addListener(
      'willFocus',
      () => {
        console.log('will focus')
        this.getProfile()
      }
    )
  }

  getProfile() {
    AsyncStorage.getItem('profile').then(value => {
      this.setState({ profile: JSON.parse(value) })
    })
  }

  componentWillUnmount() {
    this.this.willFocusListener.remove()
  }

  render() {
    return (
      <Container>
        <Identity profile={this.state.profile} />
        <Tabs navigation={this.props.navigation} profile={this.state.profile} />
      </Container>
    )
  }
}

export default Profile
