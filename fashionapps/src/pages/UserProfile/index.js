import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ILLogo, ILUserNull } from '../../assets'
import { Gap } from '../../components/atom'
import { Profile } from '../../components/molecul'
import { colors, dimension } from '../../utils'

const UserProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapperLogo}>
                <Image source={ILLogo} style={styles.logo}/>
            </View>
            <View style={styles.wrapperImage}>
                <Profile 
                    img={ILUserNull}
                    name='Afgan'
                />
            </View>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    wrapperImage: {
        alignItems: 'center'
    },
    wrapperLogo: {
        alignItems: 'center'
    },
    logo: {
       height: dimension.height * 0.24,
       width: dimension.width * 0.5,
      
    }
})
