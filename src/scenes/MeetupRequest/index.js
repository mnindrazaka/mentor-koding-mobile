import React, { Component } from 'react'
import { Container, Content, List } from 'native-base'

import { Header, Loading } from 'components'
import ListItem from './ListItem'

import { Query, ApolloConsumer } from 'react-apollo'
import {
  meetupsQuery,
  updateMeetupMutation,
  deleteMeetupMutation
} from 'services/graphql'

class MeetupRequest extends Component {
  acceptMeetup(client, meetupId) {
    client.mutate({
      mutation: updateMeetupMutation,
      variables: { meetup: { isConfirmed: true }, _id: meetupId }
    })
  }

  rejectMeetup(client, meetupId) {
    client.mutate({
      mutation: deleteMeetupMutation,
      variables: { _id: meetupId }
    })
  }

  renderRow(row) {
    return (
      <ApolloConsumer>
        {client => (
          <ListItem
            topic={row.topic}
            detailPlace={row.detailPlace}
            datetime={row.datetime}
            onAcceptMeetup={() => this.acceptMeetup(client, row._id)}
            onRejectMeetup={() => this.rejectMeetup(client, row._id)}
          />
        )}
      </ApolloConsumer>
    )
  }

  render() {
    return (
      <Container>
        <Header
          title={'Permintaan Meetup'}
          navigation={this.props.navigation}
        />
        <Query query={meetupsQuery} variables={{ isConfirmed: false }}>
          {({ loading, error, data }) => (
            <Loading loading={loading} error={error}>
              <Content padder>
                <List
                  dataArray={data.meetups}
                  renderRow={row => this.renderRow(row)}
                />
              </Content>
            </Loading>
          )}
        </Query>
      </Container>
    )
  }
}

export default MeetupRequest
