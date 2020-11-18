import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { IcArrowBack, IcCartActive, IcMinus, IcPlus, IcSearch, IcTrash, IcWishlistActive } from '../../../assets'

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
        if(icon === 'trash'){
            return <IcTrash />
        }
        if(icon === 'chart'){
            return <IcCartActive />
        }
        if(icon == 'plus'){
            return <IcPlus />
        }
        if(icon === 'minus'){
            return <IcMinus />
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
