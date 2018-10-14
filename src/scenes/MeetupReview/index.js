import React, { Component } from 'react'
import { Content, Container, View, H3, Text } from 'native-base'

import Congratulation from './Congratulation'
import Rating from './Rating'

class MeetupReview extends Component {
  render() {
    return (
      <Container>
        <Congratulation />
        <Rating navigation={this.props.navigation} />
      </Container>
    )
  }
}

export default MeetupReview
