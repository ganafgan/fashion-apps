import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View, Text } from 'react-native'
import { ILCat1, ILCat2, ILCat3, ILCat4 } from '../../assets'
import { Button, Category, Search, SliderImage } from '../../components'
import { colors, fonts } from '../../utils'

const Home = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.wrapperSearch}>
                    <View style={styles.search}>
                        <Search placeholder='Cari item' />
                    </View>
                    <View style={styles.wishlist}>
                        <Button type='icon-only' icon='wishlist'/>
                    </View>
                </View>
                <View style={styles.wrapperSlider}>
                    <SliderImage />
                </View>
                <View style={styles.wrapperTitle}>
                    <Text style={styles.title}>Category</Text>
                </View>
                <View style={styles.wrapperCategory}>
                    <Category img={ILCat1} title='Aksesoris'/>
                    <Category img={ILCat2} title='Jaket'/>
                </View>
                <View style={styles.wrapperCategory}>
                    <Category img={ILCat3} title='Celana'/>
                    <Category img={ILCat4} title='Kaos' />
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    wrapperSearch: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginTop: windowHeight * 0.036,
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.border
        
    },
    search: {
        flex: 1,
        marginRight: 10
    },
    wrapperSlider: {
        marginTop: windowHeight * 0.024
    },
    wrapperTitle: {
        paddingHorizontal: 30,
        marginTop: windowHeight * 0.024,
    },
    title: {
        fontSize: 18,
        fontFamily: fonts.primary[700]
    },
    wrapperCategory: {
        flexDirection:'row',
        paddingHorizontal: 30
    }
})
