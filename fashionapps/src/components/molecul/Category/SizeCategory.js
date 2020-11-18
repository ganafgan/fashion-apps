import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { colors, fonts } from '../../../utils'

const SizeCategory = ({size, onPress, active}) => {
    return (
        <TouchableOpacity style={styles.container(active)} onPress={onPress} activeOpacity={1}>
            <Text style={styles.size(active)}>{size}</Text>
        </TouchableOpacity>
    )
}

export default SizeCategory

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: (active) => ({
        paddingHorizontal: windowWidth * 0.036,
        paddingVertical: windowHeight * 0.012,
        backgroundColor: active ? colors.black : colors.border,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 10,
        marginRight: 10
    }),
    size: (active) => ({
        fontSize: 16,
        fontFamily: fonts.primary[700],
        textAlign: 'center',
        color: active ? colors.white : colors.black
    })
})
