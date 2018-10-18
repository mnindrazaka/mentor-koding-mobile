import React, { Component } from 'react'
import { Container } from 'native-base'

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
