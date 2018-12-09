import React, { Component } from 'react'
import { Button, Text } from 'native-base'
import { Photo } from 'components'
import material from 'native-base-theme/variables/material'
import styled from 'styled-components/native'

class Identity extends Component {
  createMeetup() {
    this.props.navigation.navigate('MeetupCreate', {
      profile: this.props.profile
    })
  }

  chatRoom() {
    this.props.navigation.navigate('ChatRoom', { profile: this.props.profile })
  }

  render() {
    const { profile } = this.props
    return (
      <Container>
        <Photo large source={{ uri: profile.profilePic }} />
        <Name>{profile.name}</Name>
        <Headline>{profile.description}</Headline>

        <ButtonGroup>
          <Button light small onPress={() => this.createMeetup()}>
            <Text>Buat Meetup</Text>
          </Button>

          <Button light bordered small onPress={() => this.chatRoom()}>
            <Text>Kirim Pesan</Text>
          </Button>
        </ButtonGroup>
      </Container>
    )
  }
}

const Container = styled.View`
  background-color: ${material.brandPrimary};
  flex: 1.5;
  align-items: center;
`

const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 15px;
`

const Name = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
`

const Headline = styled.Text`
  color: #fff;
`

export default Identity
