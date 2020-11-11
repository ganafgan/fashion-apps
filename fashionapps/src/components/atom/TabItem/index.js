import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcAccountActive, IcAccountInactive, IcCartActive, IcCartInactive, IcHomeActive, IcHomeInactive, IcWishlistActive, IcWishlistInactive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {

    const Icon = () => {
        if(title === 'Home'){
            return active ? <IcHomeActive /> : <IcHomeInactive/>
        }
        if(title === 'Wishlist'){
            return active ? <IcWishlistActive /> : <IcWishlistInactive />
        }
        if(title === 'Cart'){
            return active ? <IcCartActive /> : <IcCartInactive />
        }
        if(title === 'Account'){
            return active ? <IcAccountActive /> : <IcAccountInactive />
        }
        return <IcHomeActive />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (active) => ({
        fontSize: 12,
        color: active ? colors.black : colors.white,
        fontFamily: fonts.primary[600],
        marginTop: 5
    })
})
