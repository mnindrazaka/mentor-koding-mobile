import React, { Component } from 'react'
import { Content, Container, Text, Grid, Col } from 'native-base'
import StarRating from 'react-native-star-rating'

import styled from 'styled-components/native'

class Review extends Component {
  render() {
    return (
      <Container marginTop={15}>
        <Title>Ulasan</Title>

        <StarRating
          iconSet={'MaterialCommunityIcons'}
          emptyStar={'star-outline'}
          maxStars={5}
          rating={4}
          starSize={20}
          disabled
          containerStyle={{ alignSelf: 'center', marginBottom: 15 }}
        />

        <Content>
          <Wrapper>
            <Grid>
              <Col>
                <Text>Fany Ervansyah</Text>
              </Col>
              <Col alignItems={'flex-end'}>
                <Text note>12/08/2018</Text>
              </Col>
            </Grid>
            <StarRating
              iconSet={'MaterialCommunityIcons'}
              emptyStar={'star-outline'}
              maxStars={5}
              rating={4}
              starSize={15}
              disabled
              containerStyle={{ alignSelf: 'flex-start', marginBottom: 15 }}
            />
            <Text note>Lorem ipsum dolor sit amet</Text>
          </Wrapper>

          <Wrapper>
            <Grid>
              <Col>
                <Text>Fany Ervansyah</Text>
              </Col>
              <Col alignItems={'flex-end'}>
                <Text note>12/08/2018</Text>
              </Col>
            </Grid>
            <StarRating
              iconSet={'MaterialCommunityIcons'}
              emptyStar={'star-outline'}
              maxStars={5}
              rating={4}
              starSize={15}
              disabled
              containerStyle={{ alignSelf: 'flex-start', marginBottom: 15 }}
            />
            <Text note>Lorem ipsum dolor sit amet</Text>
          </Wrapper>

          <Wrapper>
            <Grid>
              <Col>
                <Text>Fany Ervansyah</Text>
              </Col>
              <Col alignItems={'flex-end'}>
                <Text note>12/08/2018</Text>
              </Col>
            </Grid>
            <StarRating
              iconSet={'MaterialCommunityIcons'}
              emptyStar={'star-outline'}
              maxStars={5}
              rating={4}
              starSize={15}
              disabled
              containerStyle={{ alignSelf: 'flex-start', marginBottom: 15 }}
            />
            <Text note>Lorem ipsum dolor sit amet</Text>
          </Wrapper>

          <Wrapper>
            <Grid>
              <Col>
                <Text>Fany Ervansyah</Text>
              </Col>
              <Col alignItems={'flex-end'}>
                <Text note>12/08/2018</Text>
              </Col>
            </Grid>
            <StarRating
              iconSet={'MaterialCommunityIcons'}
              emptyStar={'star-outline'}
              maxStars={5}
              rating={4}
              starSize={15}
              disabled
              containerStyle={{ alignSelf: 'flex-start', marginBottom: 15 }}
            />
            <Text note>Lorem ipsum dolor sit amet</Text>
          </Wrapper>

          <Wrapper>
            <Grid>
              <Col>
                <Text>Fany Ervansyah</Text>
              </Col>
              <Col alignItems={'flex-end'}>
                <Text note>12/08/2018</Text>
              </Col>
            </Grid>
            <StarRating
              iconSet={'MaterialCommunityIcons'}
              emptyStar={'star-outline'}
              maxStars={5}
              rating={4}
              starSize={15}
              disabled
              containerStyle={{ alignSelf: 'flex-start', marginBottom: 15 }}
            />
            <Text note>Lorem ipsum dolor sit amet</Text>
          </Wrapper>

          <Wrapper>
            <Grid>
              <Col>
                <Text>Fany Ervansyah</Text>
              </Col>
              <Col alignItems={'flex-end'}>
                <Text note>12/08/2018</Text>
              </Col>
            </Grid>
            <StarRating
              iconSet={'MaterialCommunityIcons'}
              emptyStar={'star-outline'}
              maxStars={5}
              rating={4}
              starSize={15}
              disabled
              containerStyle={{ alignSelf: 'flex-start', marginBottom: 15 }}
            />
            <Text note>Lorem ipsum dolor sit amet</Text>
          </Wrapper>
        </Content>
      </Container>
    )
  }
}

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`

const Wrapper = styled.View`
  border: solid 2px #e1e1e1;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
`

export default Review
