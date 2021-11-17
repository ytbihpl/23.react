import React,{Component} from "react";
import {View,Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

// 导入轮播图组件
import Swiper from 'react-native-swiper'
// 轮播图样式
// 轮播图样式
var styles = StyleSheet.create({
  box: {
    width: '33.33%',
    alignItems: 'center',
    marginTop: 15
  }
})

// Actions 表示要进行路由的JS操作了，可以跳转到新路由
import { Actions } from 'react-native-router-flux'

export default class Home extends Component{
  constructor(props) {
    super(props)
    this.state = {
      lunbotu: [
        {'img':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F1Z9292320153V8-0-lp.jpg'},
        {'img':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F191002130K234M-0-lp.jpg'},
        {'img':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1207%2F24%2Fc2%2F12516314_12516314_1343096689531.jpg'}
      ] // 轮播图数组
    }
  }
  // componentDidMount() {
  //   fetch('http://vue.studyit.io/api/getlunbo')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.warn(data)
  //       // this.setState({
  //       //   lunbotu: data.message
  //       // })
  //     })
  // }
  render(){
    return <View>
      {/* 轮播图外边必须包上view标签 */}
      <View style={{height:220}}>
        <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} loop={true}>
          {this.state.lunbotu.map((item,i)=>{
            return <View key={i}>
              <Image source={{uri:item.img}} style={{width:'100%',height:'100%'}}></Image>
            </View>
          })}
        </Swiper>
      </View>
         {/* 在 RN 中，默认，就已经为 所有的 View 启用了弹性和模型，同时，默认的主轴是 纵向的 */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

        <View style={styles.box}>
          <Image source={require('../../images/menu1.png')} style={{ width: 60, height: 60 }}></Image>
          <Text>新闻资讯</Text>
        </View>

        <View style={styles.box}>
          <Image source={require('../../images/menu2.png')} style={{ width: 60, height: 60 }}></Image>
          <Text>图片分析</Text>
        </View>

        <View style={styles.box}>
          <Image source={require('../../images/menu3.png')} style={{ width: 60, height: 60 }}></Image>
          <Text>商品购买</Text>
        </View>

        <View style={styles.box}>
          <Image source={require('../../images/menu4.png')} style={{ width: 60, height: 60 }}></Image>
          <Text>视频专区</Text>
        </View>

        <TouchableHighlight onPress={this.goMovieList} underlayColor="white" style={styles.box}>
          {/* 在 TouchableHighlight 内部，只能放置唯一的一个元素 */}
          <View>
            <Image source={require('../../images/menu5.png')} style={{ width: 60, height: 60 }}></Image>
            <Text>热映电影</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.box}>
          <Image source={require('../../images/menu6.png')} style={{ width: 60, height: 60 }}></Image>
          <Text>联系我们</Text>
        </View>

      </View>
    </View>
  }
    // 去电影列表页面
    goMovieList = () => {
      // 在这里要跳转到电影列表，需要使用 编程式导航
      // this.props.history.push
      Actions.movielist()
    }
}

