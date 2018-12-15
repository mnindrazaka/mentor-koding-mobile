import React, { Component } from 'react'
import StarRating from 'react-native-star-rating'
import styled from 'styled-components/native'
import { Text, Textarea, Button } from 'native-base'

import material from 'native-base-theme/variables/material'

import { ApolloConsumer } from 'react-apollo'
import { updateMeetupMutation } from '../../services/graphql'

class Rating extends Component {
  state = {
    input: {
      rating: 0,
      review: ''
    }
  }

  changeInput(value, name) {
    let input = this.state.input
    input[name] = value
    this.setState({ input })
  }

  submit(client) {
    const meetupId = this.props.navigation.getParam('meetupId')
    client
      .mutate({
        mutation: updateMeetupMutation,
        variables: { meetup: { ...this.state.input }, _id: meetupId }
      })
      .then(() => this.props.navigation.navigate('MeetupList'))
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <StarRating
          iconSet={'MaterialCommunityIcons'}
          emptyStar={'star-outline'}
          fullStarColor={material.brandPrimary}
          maxStars={5}
          rating={this.state.input.rating}
          selectedStar={value => this.changeInput(value, 'rating')}
        />

        <Textarea
          rowSpan={5}
          bordered
          placeholder={'Berikan Ulasan'}
          value={this.state.input.review}
          onChangeText={text => this.changeInput(text, 'review')}
        />

        <ApolloConsumer>
          {client => (
            <Button block onPress={() => this.submit(client)}>
              <Text>Kirim Ulasan</Text>
            </Button>
          )}
        </ApolloConsumer>
      </View>
    )
  }
}

const View = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 30px;
`

export default Rating
