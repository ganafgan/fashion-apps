import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';



const SliderImage = () => {
    const images = [
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/manga-apps-36218.appspot.com/o/img1.jpg?alt=media&token=57847398-017f-4aea-82fa-d30a3bb78083',
            desc: 'Mailo Ltd'
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/manga-apps-36218.appspot.com/o/img2.jpg?alt=media&token=0fc4fa02-45e8-46d0-943d-06edcea587bf',
            desc: 'Mailo Ltd'
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/manga-apps-36218.appspot.com/o/img3.jpg?alt=media&token=e2823245-d986-4f80-8c53-114339354627',
            desc: 'Mailo Ltd'
        }
    ]

    
    return (
        <FlatListSlider 
                data={images}
                height={windowHeight * 0.26}
                timer={3000}
                onPress={() => null}
                contentContainerStyle={{paddingHorizontal: 0}}
                indicatorContainerStyle={{position:'absolute', bottom: 20}}
                indicatorActiveColor={'#000000'}
                indicatorInActiveColor={'#ffffff'}
                indicatorActiveWidth={30}
                animation
        />
        
    )
}

export default SliderImage

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({})
