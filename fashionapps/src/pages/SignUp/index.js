import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Gap, Input } from '../../components/atom'
import { colors, dimension } from '../../utils'

const SignUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.wrapperLogo}>
                    <Image source={ILLogo} style={styles.logo} />
                </View>
                <View style={styles.wrapperForm}>
                    <Input 
                        label='Nama'
                    />
                    <Gap height={dimension.height * 0.012} />
                    <Input 
                        label='Email'
                    />
                    <Gap height={dimension.height * 0.012} />
                    <Input 
                        label='Telepon'
                    />
                    <Gap height={dimension.height * 0.012} />
                    <Input 
                        label='Alamat'
                        multiline
                        numberOfLines={4}
                    />
                    <Gap height={dimension.height * 0.012} />
                    <Input 
                        label='Password'
                    />
                    <Gap height={dimension.height * 0.012} />
                    <Input 
                        label='Konfirmasi Password'
                    />
                    <Gap height={dimension.height * 0.036} />
                    <Button 
                        title='SignUp'
                        onPress={() => navigation.replace('MainApp')}
                    />
                     <Gap height={dimension.height * 0.036} />
                </View>
            </ScrollView>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    wrapperForm: {
        paddingHorizontal: dimension.width * 0.048
    },
    wrapperLogo: {
        alignItems: 'center',
    },
    logo: {
        height: dimension.height * 0.24,
        width: dimension.width * 0.48,
        resizeMode: 'contain',
    }
})
