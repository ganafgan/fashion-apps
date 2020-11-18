import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IcHoodie, IcPants, IcShirt, IcTshirt, IcWallet } from '../../../assets'
import { colors, fonts } from '../../../utils'
import SizeCategory from './SizeCategory'

const Category = ({cat, title, onPress, size, active}) => {
    const Icon = () => {
        if(cat === 'Tshirt') return <IcTshirt />

        if(cat === 'Shirt') return <IcShirt />

        if(cat === 'Hoodie') return <IcHoodie />

        if(cat === 'Pants') return <IcPants />

        if(cat === 'Accesories') return <IcWallet />

        return <IcTshirt />
    }
    if(cat === 'Size'){
        return <SizeCategory size={size} onPress={onPress} active={active} />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {!cat === 'size'}
            <Icon />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Category

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.border,
        height: windowHeight *  0.091,
        width: windowWidth * 0.182,
        borderRadius:10,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    title: {
        fontSize: 12,
        fontFamily: fonts.primary[700],
        textAlign: 'center'
    }
})
