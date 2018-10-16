import React, { Component } from 'react'
import {
  Content,
  Input,
  Text,
  Button,
  Container,
  View,
  Icon
} from 'native-base'

import styled from 'styled-components/native'

import Item from '../../components/Item'

class Skill extends Component {
  state = {
    data: ['React Native', 'React', 'Angular', 'Node JS', 'Graphql']
  }

  renderItems() {
    return this.state.data.map((item, index) => (
      <Wrapper key={index}>
        <View
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Text>{item}</Text>
          <Button danger bordered small>
            <Icon name={'close'} />
          </Button>
        </View>
      </Wrapper>
    ))
  }

  render() {
    return (
      <Container>
        <View padding={15}>
          <Item regular>
            <Input placeholder="Masukkan kemampuan yang dikuasai" />
          </Item>

          <Button block>
            <Text>Tambahkan Kemampuan</Text>
          </Button>
        </View>

        <Content padder>{this.renderItems()}</Content>
      </Container>
    )
  }
}

const Wrapper = styled.View`
  border: solid 2px #e1e1e1;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
`

export default Skill
