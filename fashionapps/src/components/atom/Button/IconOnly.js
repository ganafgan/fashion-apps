import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { IcArrowBack, IcSearch, IcWishlistActive } from '../../../assets'

const IconOnly = ({onPress, icon}) => {
    const Icon = () => {
        if(icon === 'wishlist'){
            return <IcWishlistActive />
        }
        if(icon === 'back'){
            return <IcArrowBack /> 
        }
        if(icon === 'search'){
            return <IcSearch />
        }
        return <IcWishlistActive />
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon />
        </TouchableOpacity>
    )
}

export default IconOnly

const styles = StyleSheet.create({})
