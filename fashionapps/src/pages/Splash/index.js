import React, { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { ILLogo } from '../../assets'
import { dimension } from '../../utils'

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: dimension.width * 0.54,
        height: dimension.height * 0.184
    }
})
