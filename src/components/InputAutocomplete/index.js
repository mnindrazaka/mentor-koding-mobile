import React, { Component, Fragment } from 'react'
import { Input, List, ListItem, Text } from 'native-base'
import { Item } from 'components'

import styled from 'styled-components/native'

class InputAutocomplete extends Component {
  renderRow(row) {
    return (
      <ListItem key={row} button onPress={() => this.props.onItemPress(row)}>
        <Text>{row}</Text>
      </ListItem>
    )
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
        <Suggestion
          dataArray={this.props.data}
          renderRow={row => this.renderRow(row)}
        />
      </Fragment>
    )
  }
}

const Suggestion = styled(List)`
  border: ${props => (props.dataArray.length ? '#afafaf' : 'transparent')};
`

export default InputAutocomplete
