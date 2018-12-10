import React, { Component } from 'react'
import material from 'native-base-theme/variables/material'
import styled from 'styled-components/native'

import { TextIcon, Loading } from 'components'
import { Grid, Col } from 'native-base'
import Moment from 'react-moment'

class Upcoming extends Component {
  renderRole(isMentor) {
    if (isMentor)
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

  getUpcomingMeetup() {
    return this.props.meetups[0]
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
            {this.renderRole(this.getUpcomingMeetup().isMentor)}
          </Col>
          <Col paddingHorizontal={15} justifyContent={'center'}>
            <Text>Meetup Akan Dimulai</Text>
            <TimeContainer marginTop={15}>
              <Moment element={TimeText} fromNow>
                {this.getUpcomingMeetup().datetime}
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
