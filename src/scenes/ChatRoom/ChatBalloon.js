import React, { Component } from 'react'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

import material from 'native-base-theme/variables/material'

class ChatBalloon extends Component {
  render() {
    return (
      <Wrapper mine={this.props.mine}>
        <Text message mine={this.props.mine}>
          {this.props.message}
        </Text>
        <Text mine={this.props.mine}>{this.props.time}</Text>
      </Wrapper>
    )
  }
}

ChatBalloon.propTypes = {
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  mine: PropTypes.bool.isRequired
}

const Wrapper = styled.View`
  border: solid 1px ${props => (props.mine ? 'transparent' : '#ececec')};
  border-radius: 10px;
  padding: 15px;
  background-color: ${props => (props.mine ? material.brandPrimary : 'white')};
  align-self: ${props => (props.mine ? 'flex-end' : 'flex-start')};
  margin-bottom: 15px;
`

const Text = styled.Text`
  color: ${props => (props.mine ? 'white' : '#2f2f2f')};
  font-size: ${props => (props.message ? '14px' : '12px')};
`

export default ChatBalloon
