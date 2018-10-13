import React, { Component } from 'react'
import { Container, Content, Input, Icon, List } from 'native-base'

import Header from '../../components/Header'
import Item from '../../components/Item'
import ListItem from './ListItem'

class HasilPencarian extends Component {
  state = {
    data: [
      {
        name: 'Nama Mentor',
        headline: 'Frontend Developer at WRI',
        imageURL:
          'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
      },
      {
        name: 'Nama Mentor',
        headline: 'Frontend Developer at WRI',
        imageURL:
          'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
      },
      {
        name: 'Nama Mentor',
        headline: 'Frontend Developer at WRI',
        imageURL:
          'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
      },
      {
        name: 'Nama Mentor',
        headline: 'Frontend Developer at WRI',
        imageURL:
          'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
      }
    ]
  }

  renderRow(row) {
    return (
      <ListItem
        name={row.name}
        headline={row.headline}
        imageURL={row.imageURL}
      />
    )
  }

  render() {
    return (
      <Container>
        <Header title={'Hasil Pencarian'} navigation={this.props.navigation} />
        <Content padder>
          <Item regular>
            <Icon name={'magnify'} />
            <Input placeholder={'Topik yang ingin dipelajari'} />
          </Item>
          <List
            dataArray={this.state.data}
            renderRow={row => this.renderRow(row)}
          />
        </Content>
      </Container>
    )
  }
}

HasilPencarian.navigationOptions = {
  header: null
}

export default HasilPencarian
