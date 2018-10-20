import React, { Component } from 'react'
import { ListItem, Left, Icon, Body, Text } from 'native-base'

class ListIcon extends Component {
  render() {
    if (this.props.text) {
      return (
        <ListItem icon marginBottom={15}>
          <Left>
            <Icon name={this.props.icon} />
          </Left>
          <Body style={{ borderBottomColor: 'transparent' }}>
            <Text>{this.props.label}</Text>
            <Text note>{this.props.text}</Text>
          </Body>
        </ListItem>
      )
    } else {
      return null
    }
  }
}

export default ListIcon
