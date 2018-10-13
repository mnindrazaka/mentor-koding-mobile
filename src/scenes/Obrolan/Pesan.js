import React, { Component } from 'react'
import styled from 'styled-components/native'

import material from '../../../native-base-theme/variables/material'

const Wrapper = styled.View`
  border: solid 1px ${props => (props.mine ? 'transparent' : '#ececec')};
  border-radius: 10px;
  width: 50%;
  padding: 15px;
  background-color: ${props => (props.mine ? material.brandPrimary : 'white')};
  align-self: ${props => (props.mine ? 'flex-end' : 'flex-start')};
  margin-bottom: 15px;
`

const Text = styled.Text`
  color: ${props => (props.mine ? 'white' : '#2f2f2f')};
  font-size: ${props => (props.message ? '14px' : '12px')};
`

class Pesan extends Component {
  render() {
    return (
      <Wrapper mine={this.props.mine}>
        <Text message mine={this.props.mine}>
          Lorem ipsum dolor sit amet
        </Text>
        <Text mine={this.props.mine}>3 PM</Text>
      </Wrapper>
    )
  }
}

export default Pesan
