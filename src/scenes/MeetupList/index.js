import React, { Component } from 'react'
import { Container, Fab } from 'native-base'

import { BadgeIcon, Loading } from 'components'
import Upcoming from './Upcoming'
import Remaining from './Remaining'

import { Query } from 'react-apollo'
import { meetupsQuery } from '../../services/graphql'

class MeetupList extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Query query={meetupsQuery} variables={{ isConfirmed: true }}>
        {({ loading, error, data }) => (
          <Loading loading={loading} error={error}>
            <Container>
              <Upcoming
                navigation={this.props.navigation}
                meetups={data.meetups}
              />

              <Remaining
                navigation={this.props.navigation}
                meetups={data.meetups}
              />

              <Fab
                style={{ backgroundColor: '#5067FF' }}
                onPress={() => navigate('MeetupRequest')}>
                <BadgeIcon icon={'calendar'} />
              </Fab>
            </Container>
          </Loading>
        )}
      </Query>
    )
  }
}

export default MeetupList
