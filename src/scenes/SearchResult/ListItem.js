import React, { Component } from 'react'
import { ListItem, Left, Body, Text } from 'native-base'
import { Photo } from 'components'
import PropTypes from 'prop-types'

class CustomListItem extends Component {
  render() {
    return (
      <ListItem button thumbnail onPress={() => this.props.onPress()}>
        <Left>
          <Photo source={{ uri: this.props.profilePic }} />
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
  description: PropTypes.string,
  profilePic: PropTypes.string
}

export default CustomListItem
