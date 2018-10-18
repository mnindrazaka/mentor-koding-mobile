import React, { Component } from 'react'
import material from 'native-base-theme/variables/material'
import styled from 'styled-components/native'

import { TextIcon } from 'components'
import { Grid, Col, View } from 'native-base'

class Upcoming extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Col paddingHorizontal={15} justifyContent={'center'}>
            <Title>Asyncronous Node JS</Title>
            <TextIcon text={'Polinema'} icon={'map-marker'} color={'white'} />
            <TextIcon text={'Sebagai Mentor'} icon={'teach'} color={'white'} />
          </Col>
          <Col paddingHorizontal={15} justifyContent={'center'}>
            <Text>Meetup Akan Dimulai Dalam</Text>
            <TimeContainer marginTop={15}>
              <View>
                <TimeText>5</TimeText>
                <Text>Jam</Text>
              </View>

              <View>
                <TimeText>10</TimeText>
                <Text>Menit</Text>
              </View>

              <View>
                <TimeText>25</TimeText>
                <Text>Detik</Text>
              </View>
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
  font-size: 30px;
  margin-bottom: 5px;
`

export default Upcoming
