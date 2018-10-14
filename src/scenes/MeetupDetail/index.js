import React, { Component } from 'react'
import {
  Container,
  Content,
  Text,
  ListItem,
  Left,
  Icon,
  Body,
  H3,
  Button
} from 'native-base'

import Header from '../../components/Header'

class MeetupDetail extends Component {
  render() {
    return (
      <Container>
        <Header title={'Detail Meetup'} navigation={this.props.navigation} />
        <Content padder>
          <H3>Asyncronous Node JS</H3>

          <ListItem icon marginVertical={15}>
            <Left>
              <Icon name={'calendar'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Text>Senin, 5 September 2018</Text>
              <Text note>6 PM</Text>
            </Body>
          </ListItem>

          <ListItem icon marginBottom={15}>
            <Left>
              <Icon name={'teach'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Text>Saya</Text>
              <Text note>Sebagai Mentor</Text>
            </Body>
          </ListItem>

          <ListItem icon marginBottom={15}>
            <Left>
              <Icon name={'book-open-variant'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Text>Herlina Prastiwi</Text>
              <Text note>Sebagai Murid</Text>
            </Body>
          </ListItem>

          <ListItem icon marginBottom={15}>
            <Left>
              <Icon name={'map-marker'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Text>Polinema</Text>
              <Text note>JL Soekarno Hatta</Text>
            </Body>
          </ListItem>
        </Content>
        <Button block success>
          <Text>Selesai</Text>
        </Button>
      </Container>
    )
  }
}

export default MeetupDetail
