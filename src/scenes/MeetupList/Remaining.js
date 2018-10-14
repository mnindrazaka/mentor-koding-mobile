import React, { Component } from 'react'
import { Container, Content, List } from 'native-base'

import ListItem from './ListItem'

class Remaining extends Component {
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
      <Container style={{ flex: 2 }}>
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

export default Remaining
