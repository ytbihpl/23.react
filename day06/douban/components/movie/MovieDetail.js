import React, { Component } from 'react'

import { View, Image, Text, ActivityIndicator, ScrollView } from 'react-native'

export default class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieInfo: {}, // 电影信息
      isloading: true
    }
  }

  // componentWillMount() {
  //   fetch('https://api.douban.com/v2/movie/subject/' + this.props.id)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         movieInfo: data,
  //         isloading: false
  //       })
  //     })
  // }
  componentWillMount(){
    this.setState({
        isloading: false
    })
  }

  render() {
    return <View>
      {this.renderInfo()}
    </View>
  }

  renderInfo = () => {
    if (this.state.isloading) {
      return <ActivityIndicator size="large"></ActivityIndicator>
    }
    return <View>
      <Text>标题---{this.props.id}</Text>
    </View>
  }
}