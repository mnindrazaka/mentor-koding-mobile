import React, { Component } from 'react'
import {
  Content,
  Text,
  ListItem,
  Left,
  Icon,
  Body,
  Container
} from 'native-base'

import styled from 'styled-components/native'

class SocialMedia extends Component {
  render() {
    return (
      <Container marginTop={15}>
        <Title>Media Sosial</Title>
        <Content>
          <ListItem icon marginBottom={15}>
            <Left>
              <Icon name={'github-circle'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Text>Github</Text>
              <Text note>mnindrazaka</Text>
            </Body>
          </ListItem>

          <ListItem icon marginBottom={15}>
            <Left>
              <Icon name={'linkedin-box'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Text>Linkedin</Text>
              <Text note>mnindrazaka</Text>
            </Body>
          </ListItem>

          <ListItem icon marginBottom={15}>
            <Left>
              <Icon name={'facebook-box'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Text>Facebook</Text>
              <Text note>mnindrazaka</Text>
            </Body>
          </ListItem>

          <ListItem icon marginBottom={15}>
            <Left>
              <Icon name={'instagram'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Text>Instagram</Text>
              <Text note>mnindrazaka</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    )
  }
}

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`

export default SocialMedia
