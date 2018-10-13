import React, { Component } from 'react'
import { ListItem, Left, Thumbnail, Body, Text, Right } from 'native-base'
import PropTypes from 'prop-types'

class CustomListItem extends Component {
  render() {
    return (
      <ListItem button thumbnail onPress={() => this.props.onPress()}>
        <Left>
          <Thumbnail source={{ uri: this.props.imageURL }} />
        </Left>
        <Body>
          <Text>{this.props.name}</Text>
          <Text note>{this.props.message}</Text>
        </Body>
        <Right>
          <Text note>{this.props.time}</Text>
        </Right>
      </ListItem>
    )
  }
}

CustomListItem.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default CustomListItem
