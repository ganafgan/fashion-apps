import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ILProduct1 } from '../../assets'
import { WishlistItem } from '../../components'
import { colors, dimension } from '../../utils'

const Wishlist = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <WishlistItem img={ILProduct1} />
            </ScrollView>
        </View>
    )
}

export default Wishlist


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: dimension.width * 0.048,
        paddingTop: dimension.height * 0.024
    },
    wrapperButton: {
        flexDirection: 'row'
    },
    wrapperChartButton: {
        flex: 1,
        marginLeft: dimension.width * 0.024
    }
})
