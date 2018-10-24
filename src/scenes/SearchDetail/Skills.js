import React, { Component } from 'react'
import { Content, Container, Text } from 'native-base'

import styled from 'styled-components/native'

class Skills extends Component {
  renderItems() {
    return this.props.profile.skills.map((skill, index) => (
      <Wrapper key={index}>
        <Text>{skill}</Text>
      </Wrapper>
    ))
  }

  render() {
    return (
      <Container marginTop={15}>
        <Title>Keahlian yang dimiliki</Title>
        <Content>{this.renderItems()}</Content>
      </Container>
    )
  }
}

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`

const Wrapper = styled.View`
  border: solid 2px #e1e1e1;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
`

export default Skills
