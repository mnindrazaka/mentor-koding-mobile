import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { user } from 'services'
import {
  Container,
  Tabs,
  ScrollableTab,
  Tab,
  Text,
  TabHeading,
  Button
} from 'native-base'

import { Header } from 'components'
import material from 'native-base-theme/variables/material'

import ProfileInfo from './ProfileInfo'
import Skill from './Skill'
import MentorSetting from './MentorSetting'
import SocialMedia from './SocialMedia'

class ProfileSettings extends Component {
  state = {
    input: {
      name: '',
      address: '',
      phone: '',
      education: '',
      job: '',
      description: '',
      isMentor: false,
      skills: [],
      socialMedia: {
        github: '',
        linkedin: '',
        facebook: '',
        instagram: ''
      }
    }
  }

  componentDidMount() {
    this.getProfile()
  }

  getProfile() {
    AsyncStorage.getItem('profile').then(value => {
      const profile = JSON.parse(value)
      this.setState({ input: { ...profile } })
    })
  }

  changeInput(name, value) {
    const { input } = this.state

    if (this.isSocialMediaInput(name)) input['socialMedia'][name] = value
    else input[name] = value

    this.setState({ input })
  }

  isSocialMediaInput(name) {
    return (
      name === 'github' ||
      name === 'linkedin' ||
      name === 'facebook' ||
      name === 'instagram'
    )
  }

  addSkill(skill) {
    let skills = this.state.input.skills
    skills.push(skill)

    let input = this.state.input
    input.skills = skills
    this.setState({ input })
  }

  removeSkill(skill) {
    let skills = this.state.input.skills.filter(item => item !== skill)

    let input = this.state.input
    input.skills = skills
    this.setState({ input })
  }

  submit() {
    const query = `mutation updateUser(
      $name: String,
      $address: String,
      $phone: String,
      $education: String,
      $job: String,
      $description: String,
      $isMentor: Boolean,
      $skills: [String],
      $socialMedia: SocialMediaInput
    )  {
      updateUser(
        user: {
          name: $name,     
          address: $address,     
          phone: $phone,     
          education: $education,     
          job: $job,     
          description: $description,     
          isMentor: $isMentor,
          skills: $skills,
          socialMedia: $socialMedia
        }
      ) { _id } 
    }`
    user(query, this.state.input).then(data => {
      this.setProfile()
    })
  }

  setProfile() {
    const query = `{
      myProfile {
        _id,
        name,
        profilePic,
        email,
        description,
        address,
        phone,
        job,
        isMentor,
        socialMedia {
          github,
          linkedin,
          facebook,
          instagram
        },
        education,
        skills
      }
    }`
    user(query).then(data => {
      AsyncStorage.setItem('profile', JSON.stringify(data.myProfile)).then(
        () => {
          this.props.navigation.navigate('Profile')
        }
      )
    })
  }

  render() {
    console.log(this.state.input)
    return (
      <Container>
        <Header
          title={'Pengaturan Profil'}
          navigation={this.props.navigation}
        />

        <Tabs renderTabBar={() => <ScrollableTab />} style={{ marginTop: -15 }}>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: material.brandPrimary }}>
                <Text>Informasi Profil</Text>
              </TabHeading>
            }>
            <ProfileInfo
              input={this.state.input}
              onChange={(name, value) => this.changeInput(name, value)}
            />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: material.brandPrimary }}>
                <Text>Kemampuan</Text>
              </TabHeading>
            }>
            <Skill
              skills={this.state.input.skills}
              onAddSkill={skill => this.addSkill(skill)}
              onRemoveSkill={skill => this.removeSkill(skill)}
            />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: material.brandPrimary }}>
                <Text>Pengaturan Mentor</Text>
              </TabHeading>
            }>
            <MentorSetting
              input={this.state.input}
              onChange={(name, value) => this.changeInput(name, value)}
            />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: material.brandPrimary }}>
                <Text>Media Sosial</Text>
              </TabHeading>
            }>
            <SocialMedia
              input={this.state.input}
              onChange={(name, value) => this.changeInput(name, value)}
            />
          </Tab>
        </Tabs>

        <Button block success borderRadius={0} onPress={() => this.submit()}>
          <Text>Simpan</Text>
        </Button>
      </Container>
    )
  }
}

export default ProfileSettings
