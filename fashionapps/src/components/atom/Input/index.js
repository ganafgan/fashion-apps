import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors, fonts } from '../../../utils'

const Input = ({label, value, onChangeText, secureTextEntry, placeholder, numberOfLines, multiline}) => {

    const [border, setBorder] = useState(colors.border)

    const onFocusForm = () => {
        setBorder(colors.black)
    }

    const onBlurForm = () => {
        setBorder(colors.border)
    }

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                style={styles.input(border)}
                onFocus={onFocusForm}
                onBlur={onBlurForm}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                multiline={multiline}
                numberOfLines={numberOfLines}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: (border) => ({
        borderWidth: 1,
        borderColor: border,
        padding: 12,
        fontSize: 14,
        fontFamily: fonts.primary[600],
    }),
    label: {
        fontSize: 14,
        marginBottom: 5,
        fontFamily: fonts.primary[400],
        color: colors.black
    }
})
