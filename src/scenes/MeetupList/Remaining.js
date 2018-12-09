import React, { Component } from 'react'
import { Container, Content, List } from 'native-base'
import { Loading } from 'components'
import ListItem from './ListItem'

import { Query } from 'react-apollo'
import { profileQuery } from '../../services/graphql'

class Remaining extends Component {
  isMentor(profileId, mentorId) {
    return profileId === mentorId
  }

  renderRows(meetups, profileId) {
    const { navigate } = this.props.navigation
    return meetups.map((row, index) => (
      <ListItem
        key={index}
        topic={row.topic}
        detailPlace={row.detailPlace}
        datetime={row.datetime}
        isMentor={this.isMentor(profileId, row.mentor._id)}
        onPress={() => navigate('MeetupDetail')}
      />
    ))
  }

  render() {
    return (
      <Query query={profileQuery}>
        {({ loading, error, data }) => (
          <Loading loading={loading} error={error}>
            <Container style={{ flex: 2 }}>
              <Content padder>
                <List>
                  {this.renderRows(this.props.meetups, data.profile._id)}
                </List>
              </Content>
            </Container>
          </Loading>
        )}
      </Query>
    )
  }
}

export default Remaining
