import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Category, Gap, ProductItem, Search, SliderImage } from '../../components'
import { colors, fonts } from '../../utils'

const Home = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                    <Text style={styles.title}>Categories</Text>
                </View>
                <Gap height={20} />
                <View style={styles.wrapperScroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.categories}>
                            <Gap width={40} />
                            <Category cat='Tshirt' title='Tshirt' />
                            <Category cat='Shirt' title='Shirt'/>
                            <Category cat='Hoodie' title='Hoodie'/>
                            <Category cat='Pants' title='Pants'/>
                            <Category cat='Accesories' title='Accesories'/>
                            <Gap width={20} />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.wrapperTitle}>
                    <Text style={styles.title}>All Product</Text>
                </View>
                <View style={styles.product}>
                    <ProductItem />
                    <ProductItem />
                </View>
                <View style={styles.product}>
                    <ProductItem />
                    <ProductItem />
                </View>
                <View style={styles.product}>
                    <ProductItem />
                    <ProductItem />
                </View>
                <Gap height={20} />
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
        paddingHorizontal: windowWidth * 0.048,
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
        marginTop: windowHeight * 0.024,
    },
    wrapperTitle: {
        paddingHorizontal: 20,
        marginTop: windowHeight * 0.024,
    },
    title: {
        fontSize: 18,
        fontFamily: fonts.primary[600]
    },
    wrapperScroll: {
        marginHorizontal: -20
    },
    categories: {
        flexDirection: 'row'
    },
    product: {
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: windowWidth * 0.048,
        justifyContent: 'space-between'
    }
})
