import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { colors, dimension, fonts } from '../../utils'

const SignIn = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.wrapperLogo}>
                    <Image source={ILLogo} style={styles.logo} />
                </View>
                <View style={styles.form}>
                    <Input 
                        label='Email Address'
                        placeholder='ganafgan@gmail.com'
                    />
                    <Gap height={dimension.width * 0.072} />
                    <Input 
                        label='Password'
                        placeholder='password'
                        secureTextEntry
                    />
                <Gap height={dimension.height * 0.06} />
                <Button 
                    title='Login'
                />
                <Gap height={dimension.height * 0.024} />
                <Button 
                    type='google-btn'
                />
                </View>
                <Gap height={dimension.height * 0.048} />
                <View style={styles.wrapperLink}>
                    <Text style={styles.label}>Don't have an account ? </Text>
                    <Link 
                        title='SignUp' 
                        onPress={ () => navigation.navigate('SignUp')}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.white
    },
    wrapperLogo: {
        alignItems: 'center',
    },
    logo: {
        height: dimension.height * 0.24,
        width: dimension.width * 0.48,
        resizeMode: 'contain',
    },
    form: {
        paddingHorizontal: dimension.width * 0.072
    },
    wrapperLink: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 14,
        fontFamily: fonts.primary[600]
    }
})
