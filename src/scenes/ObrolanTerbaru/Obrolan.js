import React, { Component } from 'react'
import { ListItem, Left, Thumbnail, Body, Text, Right } from 'native-base'
import PropTypes from 'prop-types'

class Obrolan extends Component {
  render() {
    return (
      <ListItem button thumbnail onPress={() => alert('goto chat')}>
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

Obrolan.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired
}

export default Obrolan
