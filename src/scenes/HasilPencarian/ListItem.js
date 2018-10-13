import React, { Component } from 'react'
import { ListItem, Left, Thumbnail, Body, Text } from 'native-base'
import PropTypes from 'prop-types'

class CustomListItem extends Component {
  render() {
    return (
      <ListItem button thumbnail onPress={() => alert('goto mentor profile')}>
        <Left>
          <Thumbnail source={{ uri: this.props.imageURL }} />
        </Left>
        <Body>
          <Text>{this.props.name}</Text>
          <Text note>{this.props.headline}</Text>
        </Body>
      </ListItem>
    )
  }
}

CustomListItem.propTypes = {
  name: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired
}

export default CustomListItem
