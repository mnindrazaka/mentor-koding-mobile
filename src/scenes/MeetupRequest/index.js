import React, { Component } from 'react'
import { Container, Content, List } from 'native-base'

import { Header, Loading } from 'components'
import ListItem from './ListItem'

import { Query } from 'react-apollo'
import { meetupsQuery } from '../../services/graphql'

class MeetupRequest extends Component {
  renderRow(row) {
    return (
      <ListItem
        topic={row.topic}
        detailPlace={row.detailPlace}
        datetime={row.datetime}
      />
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
