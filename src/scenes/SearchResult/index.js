import React, { Component } from 'react'
import { Container, Content, Input, Icon, List } from 'native-base'
import { Header, Item } from 'components'
import ListItem from './ListItem'

class SearchResult extends Component {
  state = {
    searchText: '',
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

  changeSearchText(text) {
    this.setState({
      searchText: text
    })
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
            <Input
              placeholder={'Topik yang ingin dipelajari'}
              value={this.state.searchText}
              onChangeText={text => this.changeSearchText(text)}
            />
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

export default SearchResult
