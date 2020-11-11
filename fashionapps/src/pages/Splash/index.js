import React, { useEffect } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'

const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('MainApp')
        }, 3000)
    },[])
    
    return (
        <View style={styles.container}>
            <Image source={ILLogo} style={styles.logo} />
        </View>
    )
}

export default Splash

const windowHeight =  Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: windowWidth * 0.54,
        height: windowHeight * 0.184
    }
})
