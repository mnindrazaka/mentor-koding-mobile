import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'

import Upcoming from './Upcoming'
import Remaining from './Remaining'

class MeetupList extends Component {
  render() {
    return (
      <Container>
        <Upcoming navigation={this.props.navigation} />
        <Remaining navigation={this.props.navigation} />
      </Container>
    )
  }
}

export default MeetupList
