import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const Search = ({value, onChangeText, placeholder}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.search}
                value={value}
                onChangeText={onChangeText} 
                placeholder={placeholder}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.border,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 10

    },
    search: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        flex: 1,
    }
})
