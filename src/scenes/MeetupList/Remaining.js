import React, { Component } from 'react'
import { Container, Content, List } from 'native-base'
import ListItem from './ListItem'

class Remaining extends Component {
  renderRows(meetups) {
    const { navigate } = this.props.navigation
    return meetups.map((row, index) => (
      <ListItem
        key={index}
        topic={row.topic}
        detailPlace={row.detailPlace}
        datetime={row.datetime}
        isMentor={row.isMentor}
        onPress={() => navigate('MeetupDetail', { meetup: row })}
      />
    ))
  }

  render() {
    return (
      <Container style={{ flex: 2 }}>
        <Content padder>
          <List>{this.renderRows(this.props.meetups)}</List>
        </Content>
      </Container>
    )
  }
}

export default Remaining
