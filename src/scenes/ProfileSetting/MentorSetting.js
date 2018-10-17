import React, { Component } from 'react'
import { Container, Content, View, Text, Switch } from 'native-base'

class MentorSetting extends Component {
  state = {
    isMentor: false
  }

  changeStatus() {
    const newStatus = !this.state.isMentor
    this.setState({
      isMentor: newStatus
    })
  }

  render() {
    return (
      <Container>
        <Content padder>
          <View flexDirection={'row'} justifyContent={'space-around'}>
            <Text>Tampilkan saya pada pencarian mentor</Text>
            <Switch
              value={this.state.isMentor}
              onValueChange={() => this.changeStatus()}
            />
          </View>
        </Content>
      </Container>
    )
  }
}

export default MentorSetting
