import React, { Component } from 'react'
import { Thumbnail } from 'native-base'
import material from 'native-base-theme/variables/material'
import styled from 'styled-components/native'

class Identity extends Component {
  render() {
    return (
      <Container>
        <Photo
          source={{
            uri:
              'https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg'
          }}
        />
        <Name>M. Nindra Zaka</Name>
        <Headline>Web Developer at Workshop Riset Informatika</Headline>
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
  border: solid 2px white;
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
