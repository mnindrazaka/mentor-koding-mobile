import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, H2 } from 'native-base'
import { TextIcon } from 'components'
import Moment from 'react-moment'

import styled from 'styled-components/native'

class CustomListItem extends Component {
  renderRole() {
    if (this.props.isMentor)
      return (
        <TextIcon text={'Sebagai Mentor'} icon={'teach'} color={'#656565'} />
      )
    else
      return (
        <TextIcon
          text={'Sebagai Murid'}
          icon={'book-open-variant'}
          color={'#656565'}
        />
      )
  }

  render() {
    return (
      <Container onPress={() => this.props.onPress()}>
        <DateContainer>
          <Moment format='DD' element={H2}>
            {this.props.datetime}
          </Moment>

          <Moment format='MMM' element={Text}>
            {this.props.datetime}
          </Moment>
          <Moment format='YYYY' element={Text}>
            {this.props.datetime}
          </Moment>
        </DateContainer>

        <MeetupContainer>
          <Title>{this.props.topic}</Title>
          <TextIcon
            text={this.props.detailPlace}
            icon={'map-marker'}
            color={'#656565'}
          />
          {this.renderRole()}
        </MeetupContainer>
      </Container>
    )
  }
}

const Container = styled.TouchableOpacity`
  border: solid 2px #d5d5d5;
  border-radius: 5px;
  margin-bottom: 15px;
  flex-direction: row;
`

const DateContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-right-width: 2px;
  border-right-color: #d5d5d5;
`

const MeetupContainer = styled.View`
  flex: 1;
  padding: 15px;
`

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`

CustomListItem.propTypes = {
  topic: PropTypes.string.isRequired,
  detailPlace: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isMentor: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
}

export default CustomListItem
