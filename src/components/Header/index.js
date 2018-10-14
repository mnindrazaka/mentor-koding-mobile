import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Left, Button, Icon, Title, Right, Body } from 'native-base'

class CustomHeader extends Component {
  renderRightComponent() {
    if (this.props.rightComponent)
      return <Right>{this.props.rightComponent}</Right>
  }

  render() {
    return (
      <Header marginBottom={15}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="chevron-left" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        {this.renderRightComponent()}
      </Header>
    )
  }
}

CustomHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default CustomHeader
