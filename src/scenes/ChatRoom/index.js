import React, { Component } from 'react'
import { Container, Content, Button, Icon } from 'native-base'
import { Header } from 'components'

import ChatBalloon from './ChatBalloon'
import ChatInput from './ChatInput'

class ChatRoom extends Component {
  state = {
    messageInput: '',
    messages: [
      {
        message: 'Halo Apa Kabar',
        time: '3:43 AM',
        mine: false
      }
    ]
  }

  changeMessageInput(text) {
    this.setState({
      messageInput: text
    })
  }

  clearMessageInput() {
    this.setState({
      messageInput: ''
    })
  }

  submitMessage() {
    let message = {
      message: this.state.messageInput,
      time: new Date().toLocaleTimeString(),
      mine: true
    }
    let messages = this.state.messages
    messages.push(message)
    this.setState({ messages }, () => this.clearMessageInput())
  }

  renderChats() {
    return this.state.messages.map((item, index) => (
      <ChatBalloon message={item.message} time={item.time} mine={item.mine} />
    ))
  }

  render() {
    const user = this.props.navigation.getParam('profile')
    return (
      <Container>
        <Header
          title={user.name}
          navigation={this.props.navigation}
          rightComponent={
            <Button
              transparent
              onPress={() =>
                this.props.navigation.navigate('SearchDetail', {
                  profile: user
                })
              }>
              <Icon name={'account'} />
            </Button>
          }
        />
        <Content padder>{this.renderChats()}</Content>
        <ChatInput
          value={this.state.messageInput}
          onChangeText={text => this.changeMessageInput(text)}
          onSubmit={() => this.submitMessage()}
        />
      </Container>
    )
  }
}

export default ChatRoom
