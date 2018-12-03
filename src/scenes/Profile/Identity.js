import React, { Component } from 'react'
import { Thumbnail } from 'native-base'
import material from 'native-base-theme/variables/material'
import styled from 'styled-components/native'

class Identity extends Component {
  render() {
    const { profile } = this.props
    return (
      <Container>
        <Photo
          source={{
            uri: profile.profilePic
          }}
        />
        <Name>{profile.name}</Name>
        <Headline>{profile.description}</Headline>
      </Container>
    )
  }
}

const Container = styled.View`
  background-color: ${material.brandPrimary};
  flex: 1.5;
  justify-content: center;
  align-items: center;
`

const Photo = styled(Thumbnail)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border-width: 2px;
  border-color: white;
  margin-bottom: 10px;
`

const Name = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`

const Headline = styled.Text`
  color: #fff;
`

export default Identity
