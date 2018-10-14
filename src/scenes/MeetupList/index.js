import React, { Component } from 'react'
import { Container, Fab } from 'native-base'

import BadgeIcon from '../../components/BadgeIcon'
import Upcoming from './Upcoming'
import Remaining from './Remaining'

class MeetupList extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Upcoming navigation={this.props.navigation} />
        <Remaining navigation={this.props.navigation} />
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          onPress={() => navigate('MeetupRequest')}>
          <BadgeIcon icon={'calendar'} count={'3'} />
        </Fab>
      </Container>
    )
  }
}

export default MeetupList
