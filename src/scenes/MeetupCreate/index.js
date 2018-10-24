import React, { Component } from 'react'
import { user } from 'services'
import { Content, Input, Text, Button, Container } from 'native-base'
import { DatePickerAndroid, TimePickerAndroid } from 'react-native'

import { Header, Item } from 'components'

class MeetupCreate extends Component {
  state = {
    input: {
      topic: '',
      mentorId: '',
      date: '',
      time: '',
      detailPlace: ''
    }
  }

  changeInput(value, name) {
    let input = this.state.input
    input[name] = value
    this.setState({ input })
  }

  async openDatePicker() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      date: new Date()
    })

    if (action !== DatePickerAndroid.dismissedAction) {
      this.changeInput(`${day}-${month}-${year}`, 'date')
    }
  }

  async openTimePicker() {
    const { action, hour, minute } = await TimePickerAndroid.open({
      hour: 14,
      minute: 0,
      is24Hour: true
    })

    if (action !== TimePickerAndroid.dismissedAction) {
      this.changeInput(`${hour}:${minute}`, 'time')
    }
  }

  submit() {
    user.update(this.state.input).then(data => {})
  }

  render() {
    const { navigate } = this.props.navigation
    const mentor = this.props.navigation.getParam('profile')
    return (
      <Container>
        <Header navigation={this.props.navigation} title={'Buat Meetup'} />

        <Content padder>
          <Text>Nama Mentor</Text>
          <Item regular>
            <Input value={mentor.name} disabled={true} />
          </Item>

          <Text>Topik yang ingin dibahas</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Topik"
              value={this.state.input.topic}
              onChangeText={text => this.changeInput(text, 'topic')}
            />
          </Item>

          <Text>Tanggal Meetup</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Tanggal"
              value={this.state.input.date}
              onChangeText={text => this.changeInput(text, 'date')}
              onFocus={() => this.openDatePicker()}
            />
          </Item>

          <Text>Waktu Meetup</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Waktu"
              value={this.state.input.time}
              onChangeText={text => this.changeInput(text, 'time')}
              onFocus={() => this.openTimePicker()}
            />
          </Item>

          <Text>Tempat Meetup</Text>
          <Item regular>
            <Input
              placeholder="Masukkan Tempat"
              value={this.state.input.detailPlace}
              onChangeText={text => this.changeInput(text, 'detailPlace')}
            />
          </Item>
        </Content>

        <Button block success>
          <Text>Buat Meetup</Text>
        </Button>
      </Container>
    )
  }
}

export default MeetupCreate
