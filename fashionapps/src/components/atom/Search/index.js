import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atom'

const Search = ({value, onChangeText, placeholder}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                value={value}
                onChangeText={onChangeText} 
                style={styles.search}
                placeholder={placeholder}
            />
             <Button type='icon-only' icon='search' />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.border,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15

    },
    search: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        flex: 1,
    }
})
