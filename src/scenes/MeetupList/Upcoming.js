import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import material from 'native-base-theme/variables/material'
import styled from 'styled-components/native'

import { TextIcon } from 'components'
import { Grid, Col, View } from 'native-base'
import Moment from 'react-moment'

class Upcoming extends Component {
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

  renderRole() {
    if (this.isMentor(this.getUpcomingMeetup().mentor._id))
      return <TextIcon text={'Sebagai Mentor'} icon={'teach'} color={'#fff'} />
    else
      return (
        <TextIcon
          text={'Sebagai Murid'}
          icon={'book-open-variant'}
          color={'#fff'}
        />
      )
  }

  isMentor(id) {
    return this.state.profile._id == id
  }

  getUpcomingMeetup() {
    return this.state.data[0]
  }

  render() {
    return (
      <Container>
        <Grid>
          <Col paddingHorizontal={15} justifyContent={'center'}>
            <Title>{this.getUpcomingMeetup().topic}</Title>
            <TextIcon
              text={this.getUpcomingMeetup().detailPlace}
              icon={'map-marker'}
              color={'white'}
            />
            {this.renderRole()}
          </Col>
          <Col paddingHorizontal={15} justifyContent={'center'}>
            <Text>Meetup Akan Dimulai</Text>
            <TimeContainer marginTop={15}>
              <Moment element={TimeText} fromNow>
                {this.getUpcomingMeetup().date}
              </Moment>
            </TimeContainer>
          </Col>
        </Grid>
      </Container>
    )
  }
}

const Container = styled.View`
  background-color: ${material.brandPrimary};
  flex: 1;
`

const Title = styled.Text`
  color: white;
  font-size: 18px;
  margin-bottom: 15px;
`

const Text = styled.Text`
  color: white;
  font-size: 14px;
`
const TimeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const TimeText = styled.Text`
  color: white;
  font-size: 20px;
  margin-bottom: 5px;
`

export default Upcoming
