import React, { Component } from 'react'
import { Container } from 'native-base'

import Identity from './Identity'
import Tabs from './Tabs'

import { Query } from 'react-apollo'
import { profileQuery } from '../../services/graphql'

class Profile extends Component {
  render() {
    return (
      <Query query={profileQuery}>
        {({ loading, error, data }) => (
          <Container>
            <Identity profile={data.profile} />
            <Tabs navigation={this.props.navigation} profile={data.profile} />
          </Container>
        )}
      </Query>
    )
  }
}

export default Profile
