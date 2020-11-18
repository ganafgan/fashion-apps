import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import { colors, fonts } from '../../utils';

const IntroSlider = ({navigation}) => {
    
    const [showApp, setShowApp] = useState(false)

    const slides = [
        {
          id: 1,
          title: 'Intro 1',
          text: 'Amazing White',
          image: require('../../assets/image/intro1.jpeg'),
        },
        {
          id: 2,
          title: 'Intro 2',
          text: 'Other cool stuff',
          image: require('../../assets/image/intro2.jpeg'),
         
        },
        {
          id: 3,
          title: 'Intro 3',
          text: 'Black Journey',
          image: require('../../assets/image/intro3.jpeg'),
         
        }
      ];

    const renderItem = ({item, index}) => {
        return (
        <View style={styles.container} key={index.toString()}>
          <Text style={styles.title}>{item.title}</Text>
          <Image source={item.image} style={styles.img} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
        )
    }

    const onDone = () => {
        setShowApp(true)
        navigation.replace('MainApp')
    }

    return (
      <AppIntroSlider 
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        activeDotStyle={{width: 30, height: 8, backgroundColor: colors.black}}
        showSkipButton
      />
    )
}

export default IntroSlider

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  img : {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.white
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.white,
    textAlign: 'center'
  }
})
