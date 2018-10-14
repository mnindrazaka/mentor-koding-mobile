import React, { Component } from 'react'
import { View } from 'react-native-animatable'
import { Badge, Icon, Text } from 'native-base'

class BadgeIcon extends Component {
  render() {
    return (
      <View>
        <Icon name={this.props.icon} style={{ color: 'white' }} />
        <Badge style={{ position: 'absolute', top: -15, left: -15 }}>
          <Text>{this.props.count}</Text>
        </Badge>
      </View>
    )
  }
}

export default BadgeIcon
