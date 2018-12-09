import React, { Component } from 'react'
import material from 'native-base-theme/variables/material'
import { Photo } from 'components'
import styled from 'styled-components/native'

class Identity extends Component {
  render() {
    const { profile } = this.props
    return (
      <Container>
        <Photo
          large
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
