import React, { Component } from 'react'
import { Container, Content, List } from 'native-base'

import { Header } from 'components'
import ListItem from './ListItem'

class MeetupRequest extends Component {
  state = {
    data: [
      {
        title: 'Async menggunakan nodejs',
        location: 'Polinema',
        date: '02 September 2018',
        isMentor: true
      },
      {
        title: 'Topik Meetup',
        location: 'Polinema',
        date: '02 September 2018',
        isMentor: false
      },
      {
        title: 'Topik Meetup',
        location: 'Polinema',
        date: '02 September 2018',
        isMentor: false
      },
      {
        title: 'Topik Meetup',
        location: 'Polinema',
        date: '02 September 2018',
        isMentor: true
      }
    ]
  }

  renderRow(row) {
    const { navigate } = this.props.navigation
    return (
      <ListItem
        title={row.title}
        location={row.location}
        date={row.date}
        isMentor={row.isMentor}
        onPress={() => navigate('MeetupDetail')}
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
        <Content padder>
          <List
            dataArray={this.state.data}
            renderRow={row => this.renderRow(row)}
          />
        </Content>
      </Container>
    )
  }
}

export default MeetupRequest
