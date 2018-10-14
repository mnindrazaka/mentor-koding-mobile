import React, { Component } from 'react'
import { Icon } from 'native-base'
import styled from 'styled-components/native'

class TextIcon extends Component {
  render() {
    return (
      <View>
        <CustomIcon name={this.props.icon} color={this.props.color} />
        <Text color={this.props.color}>{this.props.text}</Text>
      </View>
    )
  }
}

const View = styled.View`
  flex-direction: row;
  align-items: center;
`
const Text = styled.Text`
  color: ${props => (props.color ? props.color : '#000')};
`
const CustomIcon = styled(Icon)`
  color: ${props => (props.color ? props.color : '#000')};
  font-size: 20px;
  margin-right: 5px;
`

export default TextIcon
