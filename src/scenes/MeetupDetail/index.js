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
import Moment from 'react-moment'
import { Header } from 'components'

class MeetupDetail extends Component {
  render() {
    const { navigate } = this.props.navigation
    const meetup = this.props.navigation.getParam('meetup')
    return (
      <Container>
        <Header title={'Detail Meetup'} navigation={this.props.navigation} />
        <Content padder>
          <H3>{meetup.topic}</H3>

          <ListItem icon marginVertical={15}>
            <Left>
              <Icon name={'calendar'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Moment format='dddd, DD MMMM YYYY' element={Text}>
                {meetup.datetime}
              </Moment>
              <Moment format='hh:mm a' element={Text}>
                {meetup.datetime}
              </Moment>
            </Body>
          </ListItem>

          <ListItem icon marginBottom={15}>
            <Left>
              <Icon name={'teach'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Text>{meetup.mentor.name}</Text>
              <Text note>Sebagai Mentor</Text>
            </Body>
          </ListItem>

          <ListItem icon marginBottom={15}>
            <Left>
              <Icon name={'book-open-variant'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Text>{meetup.student.name}</Text>
              <Text note>Sebagai Murid</Text>
            </Body>
          </ListItem>

          <ListItem icon marginBottom={15}>
            <Left>
              <Icon name={'map-marker'} />
            </Left>
            <Body style={{ borderBottomColor: 'transparent' }}>
              <Text>{meetup.detailPlace}</Text>
            </Body>
          </ListItem>
        </Content>

        {!meetup.isMentor ? (
          <Button block success onPress={() => navigate('MeetupReview')}>
            <Text>Selesai</Text>
          </Button>
        ) : null}
      </Container>
    )
  }
}

export default MeetupDetail
