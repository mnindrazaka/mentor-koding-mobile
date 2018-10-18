import React, { Component } from 'react'
import {
  Container,
  Content,
  H2,
  Text,
  View,
  Input,
  Button,
  Icon
} from 'native-base'

import { Item } from 'components'

class Search extends Component {
  state = {
    searchText: ''
  }

  changeSearchText(text) {
    this.setState({
      searchText: text
    })
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Content padder justifyContent={'center'}>
          <View alignItems={'center'} marginBottom={30}>
            <H2>Temukan Mentormu</H2>
            <Text style={{ textAlign: 'center' }}>
              Mentor dapat membantu anda mempelajari topik pemrograman yang
              ingin dipelajari
            </Text>
          </View>

          <Item regular>
            <Input
              placeholder={'Topik yang ingin dipelajari'}
              value={this.state.searchText}
              onChangeText={text => this.changeSearchText(text)}
            />
          </Item>

          <Button iconLeft block onPress={() => navigate('SearchResult')}>
            <Icon name={'magnify'} />
            <Text>Cari Mentor</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default Search
