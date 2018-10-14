import React, { Component } from 'react'
import StarRating from 'react-native-star-rating'
import styled from 'styled-components/native'
import { Text, Textarea, Button } from 'native-base'

import material from '../../../native-base-theme/variables/material'

class Rating extends Component {
  state = {
    rating: 0
  }

  onStarRatingPress(rating) {
    this.setState({
      rating
    })
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
          rating={this.state.rating}
          selectedStar={rating => this.onStarRatingPress(rating)}
        />

        <Textarea rowSpan={5} bordered placeholder={'Berikan Ulasan'} />

        <Button block onPress={() => navigate('MeetupList')}>
          <Text>Kirim Ulasan</Text>
        </Button>
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
