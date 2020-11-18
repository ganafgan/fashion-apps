import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { colors, dimension } from '../../utils'

const ImageDetail = ({route}) => {

    const val = route.params

    return (
        <View style={styles.container}>
            <Image source={{uri: val.img}} style={styles.img} />
        </View>
    )
}

export default ImageDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        justifyContent: 'center'
       
    },
    img: {
        height: dimension.height * 0.5
    }
})
