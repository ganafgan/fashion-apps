import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';
import { Button, Category, Gap } from '../../components';
import { colors, dimension, fonts } from '../../utils';

const ProductDetail = ({navigation}) => {

    const [sizeChart, setSizeChart] = useState('')

    const images = [
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/manga-apps-36218.appspot.com/o/30b7eb77623309376eadfbaa933b9b66_1595414098660..jpeg?alt=media&token=64838155-96a8-4fa2-ade7-572bb0868972',
            desc: 'Mailo Ltd'
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/manga-apps-36218.appspot.com/o/90eb91e9c7b064c486377f85f7c6502b_1595414098835..jpeg?alt=media&token=ca1a1174-d1c3-43dd-8323-aaa2f10bf545',
            desc: 'Mailo Ltd'
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/manga-apps-36218.appspot.com/o/49b4def1847c34ee100f7a1581190600_1595414098992..jpeg?alt=media&token=a3e5f3f7-bf20-44de-8ac9-382fef898c4c',
            desc: 'Mailo Ltd'
        }
    ]
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.wrapperHeader}>
                    <Button  
                        type='icon-only'
                        icon='back'
                        onPress={ () => navigation.goBack()}
                    />
                    <View style={styles.wrapperTitle}> 
                        <Text style={styles.headerTitle}>Tshirt Air Terjun</Text>
                    </View>
                    <Gap width={25} />
                </View>
                <FlatListSlider 
                data={images}
                height={dimension.height * 0.48}
                timer={0}
                contentContainerStyle={{paddingHorizontal: 0}}
                indicatorContainerStyle={{position:'absolute', bottom: 10}}
                indicatorActiveColor={colors.black}
                indicatorInActiveColor={colors.blue}
                indicatorActiveWidth={30}
                animation
                autoscroll={false}
                onPress={() => navigation.navigate('ImageDetail', {img: images[0].image})}
                />
                <View style={styles.wrapperPrice}>
                    <Text style={styles.price}>Rp 120.000</Text>
                    <Button type='icon-only' icon='wishlist'/>
                </View>
                <Gap height={dimension.height * 0.012}/>
                <View style={styles.wrapperDeskripsiProduk}>
                    <Text style={styles.title}>Deskripsi produk</Text>
                    <Gap height={dimension.height * 0.012}/>
                    <Text style={styles.deskripsi}>Kaos ini adalah perpaduan jiwa anak muda yang senang dengan petualangan</Text>
                </View>
                <Gap height={dimension.height * 0.012}/>
                <View style={styles.wrapperInformasiProduk}>
                    <Text style={styles.title}>Informasi produk</Text>
                    <Gap height={dimension.height * 0.012}/>
                    <View style={styles.wrapperDetail}>
                        <View>
                            <Text style={styles.informasiProduk}>Berat</Text>
                            <Text style={styles.informasiProduk}>Kondisi</Text>
                            <Text style={styles.informasiProduk}>Pesanan Min</Text>
                            <Text style={styles.informasiProduk}>Model</Text>
                        </View>
                        <View>
                            <Text style={styles.informasiValue}>300 Gram</Text>
                            <Text style={styles.informasiValue}>Baru</Text>
                            <Text style={styles.informasiValue}>1 Buah</Text>
                            <Text style={styles.informasiValue}>Tshirt</Text>
                        </View>
                    </View>
                </View>
                <Gap height={dimension.height * 0.012}/>
                <View style={styles.wrapperSize}>
                    <Text style={styles.title}>Size</Text>
                    <Gap height={dimension.height * 0.012}/>
                    <View style={styles.wrapperBoxSize}>
                        <Category 
                            cat='Size'
                            size='S'
                            onPress={ () => setSizeChart('S')}
                            active={sizeChart === 'S' ? true : false}
                        />
                        <Category 
                            cat='Size'
                            size='M'
                            onPress={ () => setSizeChart('M')}
                            active={sizeChart == 'M' ? true : false}
                        />
                        <Category 
                            cat='Size'
                            size='L'
                            onPress={ () => setSizeChart('L')}
                            active={sizeChart == 'L' ? true : false}
                        />
                        <Category 
                            cat='Size'
                            size='XL'
                            onPress={ () => setSizeChart('XL')}
                            active={sizeChart == 'XL' ? true : false}
                        />
                    </View>
                    <Gap height={dimension.height * 0.024} />
                </View>
            </ScrollView>
            <View style={styles.wrapperButton}>
                <View style={{flex: 1}}>
                    <Button 
                        title='Beli Langsung'
                        type='secondary'
                    />
                </View>
                <Gap width={10} />
                <View style={{flex: 1}}>
                    <Button 
                        title='+ Keranjang'
                    />    
                </View>
            </View>
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.border
    },
    wrapperHeader: {
        flexDirection: 'row',
        paddingTop: dimension.height * 0.024,
        paddingHorizontal: dimension.width * 0.048,
        alignItems: 'center',
        backgroundColor: colors.white
    },
    wrapperTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 16,
        fontFamily: fonts.primary[700]
    },
    wrapperPrice: {
        paddingHorizontal: dimension.width * 0.048,
        backgroundColor: colors.white,
        paddingVertical: dimension.height * 0.012,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    price: {
        fontSize: 18,
        fontFamily: fonts.primary[700]
    },
    wrapperDeskripsiProduk: {
        paddingHorizontal: dimension.width * 0.048,
        backgroundColor: colors.white,
        paddingVertical: dimension.height * 0.012
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[700]
    },
    deskripsi: {
        fontSize: 14,
        fontFamily: fonts.primary.normal
    },
    wrapperInformasiProduk: {
        paddingHorizontal: dimension.width * 0.048,
        backgroundColor: colors.white,
        paddingVertical: dimension.height * 0.012
    },
    wrapperDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    informasiProduk: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        textAlign: 'left',
        marginBottom: 5
    },
    informasiValue: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        textAlign: 'right',
        marginBottom: 5
    },
    wrapperSize:{
        paddingHorizontal: dimension.width * 0.048,
        backgroundColor: colors.white,
        paddingVertical: dimension.height * 0.012
    },
    wrapperBoxSize: {
        flexDirection: 'row',
    },
    wrapperButton: {
        paddingHorizontal: dimension.width * 0.048,
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20
    }
})
