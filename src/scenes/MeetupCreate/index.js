import React, { Component } from 'react'
import { Content, Input, Text, Button, Container } from 'native-base'
import { DatePickerAndroid, TimePickerAndroid } from 'react-native'
import { Header, Item } from 'components'

import { ApolloConsumer } from 'react-apollo'
import { createMeetupMutation } from 'services/graphql'

class MeetupCreate extends Component {
  state = {
    input: {
      topic: '',
      mentorId: '',
      datetime: new Date(),
      detailPlace: '',
      lat: 0,
      lng: 0
    }
  }

  componentDidMount() {
    this.setMentorId()
  }

  setMentorId() {
    const mentor = this.props.navigation.getParam('profile')
    const { input } = this.state
    input.mentorId = mentor._id
    this.setState({ input })
  }

  changeInput(value, name) {
    let input = this.state.input
    input[name] = value
    this.setState({ input })
  }

  async openDatePicker() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      minDate: new Date(),
      date: this.state.input.datetime
    })
    if (action !== DatePickerAndroid.dismissedAction) {
      const { datetime } = this.state.input
      datetime.setDate(day)
      datetime.setMonth(month)
      datetime.setFullYear(year)
      this.changeInput(datetime, 'datetime')
    }
  }

  async openTimePicker() {
    const { action, hour, minute } = await TimePickerAndroid.open({
      hour: this.state.input.datetime.getHours(),
      minute: this.state.input.datetime.getMinutes(),
      is24Hour: true
    })
    if (action !== TimePickerAndroid.dismissedAction) {
      const { datetime } = this.state.input
      datetime.setHours(hour)
      datetime.setMinutes(minute)
      this.changeInput(datetime, 'datetime')
    }
  }

  getDate() {
    return this.state.input.datetime.toLocaleDateString('id', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  }

  getTime() {
    return this.state.input.datetime.toLocaleTimeString('id', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  submit(client) {
    client
      .mutate({
        mutation: createMeetupMutation,
        variables: { meetup: this.state.input }
      })
      .then(() => this.props.navigation.navigate('MeetupList'))
  }

  render() {
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
              placeholder='Masukkan Topik'
              value={this.state.input.topic}
              onChangeText={text => this.changeInput(text, 'topic')}
            />
          </Item>

          <Text>Tanggal Meetup</Text>
          <Item regular>
            <Input
              placeholder='Masukkan Tanggal'
              value={this.getDate()}
              onFocus={() => this.openDatePicker()}
            />
          </Item>

          <Text>Waktu Meetup</Text>
          <Item regular>
            <Input
              placeholder='Masukkan Waktu'
              value={this.getTime()}
              onFocus={() => this.openTimePicker()}
            />
          </Item>

          <Text>Tempat Meetup</Text>
          <Item regular>
            <Input
              placeholder='Masukkan Tempat'
              value={this.state.input.detailPlace}
              onChangeText={text => this.changeInput(text, 'detailPlace')}
            />
          </Item>
        </Content>

        <ApolloConsumer>
          {client => (
            <Button block success onPress={() => this.submit(client)}>
              <Text>Buat Meetup</Text>
            </Button>
          )}
        </ApolloConsumer>
      </Container>
    )
  }
}

export default MeetupCreate
