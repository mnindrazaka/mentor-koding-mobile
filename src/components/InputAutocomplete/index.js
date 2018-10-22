import React, { Component, Fragment } from 'react'
import { View, Input, List, ListItem, Text } from 'native-base'
import { Item } from 'components'

import styled from 'styled-components/native'

class InputAutocomplete extends Component {
  renderItems() {
    return this.props.data.map(item => (
      <ListItem
        key={item.id}
        button
        onPress={() => this.props.onItemPress(item)}>
        <Text>{item.keyName}</Text>
      </ListItem>
    ))
  }

  render() {
    return (
      <Fragment>
        <Item regular marginBottom={5}>
          <Input
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChangeText={text => this.props.onChangeText(text)}
          />
        </Item>
        <Suggestion>{this.renderItems()}</Suggestion>
      </Fragment>
    )
  }
}

const Suggestion = styled(List)``

export default InputAutocomplete
