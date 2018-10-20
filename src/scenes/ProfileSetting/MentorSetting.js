import React, { Component } from 'react'
import { Container, Content, View, Text, Switch } from 'native-base'

class MentorSetting extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <View flexDirection={'row'} justifyContent={'space-around'}>
            <Text>Tampilkan saya pada pencarian mentor</Text>
            <Switch
              value={this.props.input.isMentor}
              onValueChange={value => this.props.onChange('isMentor', value)}
            />
          </View>
        </Content>
      </Container>
    )
  }
}

export default MentorSetting
