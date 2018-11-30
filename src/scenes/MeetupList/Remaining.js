import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Container, Content, List } from 'native-base'

import ListItem from './ListItem'

class Remaining extends Component {
  state = {
    profile: {},
    data: [
      {
        topic: 'Async menggunakan nodejs',
        detailPlace: 'Polinema',
        date: '20181031',
        mentor: {
          _id: '5bc739af923a07278c691892'
        },
        student: {
          _id: 'rtfghyu35678ghjrtytyg25h'
        }
      },
      {
        topic: 'Belajar Angular',
        detailPlace: 'Polinema',
        date: '20181030',
        mentor: {
          _id: 'rtfghyu35678ghjrtytyg25h'
        },
        student: {
          _id: '5bc739af923a07278c691892'
        }
      }
    ]
  }

  componentDidMount() {
    this.getProfile()
  }

  getProfile() {
    AsyncStorage.getItem('profile').then(data => {
      this.setState({ profile: JSON.parse(data) })
    })
  }

  isMentor(id) {
    return this.state.profile._id == id
  }

  renderRows() {
    const { navigate } = this.props.navigation
    return this.state.data.map((row, index) => (
      <ListItem
        key={index}
        topic={row.topic}
        detailPlace={row.detailPlace}
        date={row.date}
        isMentor={this.isMentor(row.mentor._id)}
        onPress={() => navigate('MeetupDetail')}
      />
    ))
  }

  render() {
    return (
      <Container style={{ flex: 2 }}>
        <Content padder>
          <List>{this.renderRows()}</List>
        </Content>
      </Container>
    )
  }
}

export default Remaining
