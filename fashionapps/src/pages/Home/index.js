import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILProduct1, ILProduct2, ILProduct3, ILProduct4 } from '../../assets'
import { Button, Category, Gap, ProductItem, Search, SliderImage } from '../../components'
import { colors, dimension, fonts } from '../../utils'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.wrapperSearch}>
                    <View style={styles.search}>
                        <Search placeholder='Cari item' />
                    </View>
                    <View style={styles.icon}>
                        <Button type='icon-only' icon='search' />
                        <Gap width={10} />
                        <Button type='icon-only' icon='wishlist'/>
                    </View>
                </View>
                <View style={styles.wrapperSlider}>
                    <SliderImage />
                </View>
                <View style={styles.wrapperTitle}>
                    <Text style={styles.title}>Categories</Text>
                </View>
                <Gap height={10} />
                <View style={styles.wrapperScroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.categories}>
                            <Gap width={dimension.width * 0.097} />
                            <Category cat='Tshirt' title='Tshirt' />
                            <Category cat='Shirt' title='Shirt'/>
                            <Category cat='Hoodie' title='Hoodie'/>
                            <Category cat='Pants' title='Pants'/>
                            <Category cat='Accesories' title='Accesories'/>
                            <Gap width={dimension.width * 0.048} />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.wrapperTitle}>
                    <Text style={styles.title}>All Product</Text>
                </View>
                <View style={styles.product}>
                    <ProductItem 
                        img={ILProduct1} 
                        title='Wild Journey about you and me'
                        price='120.000'
                        stock='Ada stock'
                        onPress={() => navigation.navigate('ProductDetail')}
                        
                        />
                    <ProductItem 
                        img={ILProduct2} 
                        title='Wild Journey'
                        price='120.000'
                        stock='Menipis'
                        onPress={() => navigation.navigate('ProductDetail')}
                        />
                    <ProductItem 
                        img={ILProduct3} 
                        title='Wild Journey'
                        price='120.000'
                        stock='Menipis'
                        onPress={() => navigation.navigate('ProductDetail')}
                        />
                    <ProductItem 
                        img={ILProduct4} 
                        title='Wild Journey'
                        price='120.000'
                        stock='Ada stock'
                        onPress={() => navigation.navigate('ProductDetail')}
                        />
                </View>
                <Gap height={20} />
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    wrapperSearch: {
        flexDirection: 'row',
        paddingHorizontal: dimension.width * 0.024,
        marginTop: dimension.height * 0.036,
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.border
        
    },
    search: {
        flex: 1,
        marginRight: 10
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    wrapperSlider: {
        marginTop: dimension.height * 0.024,
    },
    wrapperTitle: {
        paddingHorizontal: dimension.width * 0.048,
        marginTop: dimension.height * 0.024,
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[700]
    },
    wrapperScroll: {
        marginHorizontal: -dimension.width * 0.048
    },
    categories: {
        flexDirection: 'row'
    },
    product: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: dimension.width * 0.048,
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
})
