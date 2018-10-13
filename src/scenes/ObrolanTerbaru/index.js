import React, { Component } from 'react'
import { Container, Content, List } from 'native-base'

import ListItem from './ListItem'

class ObrolanTerbaru extends Component {
  state = {
    data: [
      {
        name: 'Nama Mentor',
        message: 'Lorem ipsum dolor sit amet',
        time: '3:43 PM',
        imageURL:
          'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
      },
      {
        name: 'Nama Mentor',
        message: 'Lorem ipsum dolor sit amet',
        time: '3:43 PM',
        imageURL:
          'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
      },
      {
        name: 'Nama Mentor',
        message: 'Lorem ipsum dolor sit amet',
        time: '3:43 PM',
        imageURL:
          'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
      },
      {
        name: 'Nama Mentor',
        message: 'Lorem ipsum dolor sit amet',
        time: '3:43 PM',
        imageURL:
          'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
      }
    ]
  }

  renderRow(row) {
    const { navigate } = this.props.navigation
    return (
      <ListItem
        name={row.name}
        message={row.message}
        time={row.time}
        imageURL={row.imageURL}
        onPress={() => navigate('Obrolan')}
      />
    )
  }

  render() {
    return (
      <Container>
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

ObrolanTerbaru.navigationOptions = {
  header: null,
  title: 'Obrolan'
}

export default ObrolanTerbaru
