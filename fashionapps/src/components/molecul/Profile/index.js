import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ILUserNull } from '../../../assets'
import { colors, dimension, fonts } from '../../../utils'

const Profile = ({name, img}) => {
    return (
        <TouchableOpacity>
            <View style={styles.borderImg}>
                <Image source={img} style={styles.img} />
            </View>
            <Text style={styles.name}>Hello, {name}</Text>
        </TouchableOpacity>
    )
}

export default Profile

const styles = StyleSheet.create({
    borderImg: {
        height: dimension.height * 0.15,
        width: dimension.width * 0.31,
        borderWidth:1,
        borderColor: colors.border,
        borderRadius: 130/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: dimension.width * 0.26,
        height: dimension.height * 0.13,
    },
    name: {
        fontFamily:fonts.primary[600],
        fontSize: 16,
        textAlign: 'center',
        marginTop: dimension.height * 0.012
    }
})
