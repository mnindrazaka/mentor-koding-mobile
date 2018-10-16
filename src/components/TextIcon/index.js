import React, { Component } from 'react'
import { Icon } from 'native-base'
import styled from 'styled-components/native'

class TextIcon extends Component {
  render() {
    return (
      <View>
        <CustomIcon
          name={this.props.icon}
          color={this.props.color}
          size={this.props.size}
        />
        <Text color={this.props.color} size={this.props.size}>
          {this.props.text}
        </Text>
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
  font-size: ${props => (props.size ? props.size : 14)}px;
`
const CustomIcon = styled(Icon)`
  color: ${props => (props.color ? props.color : '#000')};
  font-size: ${props => (props.size ? props.size + 6 : 20)}px;
  margin-right: 8px;
`

export default TextIcon
