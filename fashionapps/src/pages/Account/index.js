import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts } from '../../utils'

const Account = () => {
    return (
        <View>
            <Text style={styles.text}>Halaman Account</Text>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: fonts.primary[800]
    }
})
