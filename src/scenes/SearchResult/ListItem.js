import React, { Component } from 'react'
import { ListItem, Left, Thumbnail, Body, Text } from 'native-base'
import PropTypes from 'prop-types'

class CustomListItem extends Component {
  render() {
    return (
      <ListItem button thumbnail onPress={() => this.props.onPress()}>
        <Left>
          <Thumbnail source={{ uri: this.props.profilePic }} />
        </Left>
        <Body>
          <Text>{this.props.name}</Text>
          <Text note>{this.props.description}</Text>
        </Body>
      </ListItem>
    )
  }
}

CustomListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired
}

export default CustomListItem
