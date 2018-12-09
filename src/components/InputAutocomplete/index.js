import React, { Component, Fragment } from 'react'
import { Input, List, ListItem, Text } from 'native-base'
import { Item } from 'components'

import styled from 'styled-components/native'

class InputAutocomplete extends Component {
  state = {
    text: ''
  }

  changeText(text) {
    this.setState({ text })
  }

  getFilteredData(data) {
    const filteredData = data
      .filter(item => this.isDataMatchInput(item))
      .slice(0, 3)
    return this.state.text === '' ? [] : filteredData
  }

  isDataMatchInput(skill) {
    return skill.toLowerCase().includes(this.state.text.toLowerCase())
  }

  renderRow(row) {
    return (
      <ListItem
        key={row}
        button
        onPress={() => {
          this.props.onItemPress(row)
          this.changeText('')
        }}>
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
            value={this.state.text}
            onChangeText={text => this.changeText(text)}
          />
        </Item>
        <Suggestion
          dataArray={this.getFilteredData(this.props.data)}
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
