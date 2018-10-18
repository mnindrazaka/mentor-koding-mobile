import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, H2, Button } from 'native-base'
import { TextIcon } from 'components'
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
          <H2>5</H2>
          <Text>September</Text>
          <Text>2018</Text>
        </DateContainer>

        <MeetupContainer>
          <Title>{this.props.title}</Title>
          <TextIcon
            text={this.props.location}
            icon={'map-marker'}
            color={'#656565'}
          />
          {this.renderRole()}

          <ButtonContainer marginTop={15}>
            <Button small onPress={() => alert('terima')}>
              <Text>Terima</Text>
            </Button>

            <Button small danger bordered onPress={() => alert('tolak')}>
              <Text>Tolak</Text>
            </Button>
          </ButtonContainer>
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

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
`

CustomListItem.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isMentor: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
}

export default CustomListItem
