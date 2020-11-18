import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ILProduct1, ILProduct2, ILProduct3, ILProduct4 } from '../../assets'
import { CartItem } from '../../components/molecul'
import { dimension } from '../../utils'
import { colors } from '../../utils/colors'

const Cart = () => {
    const [qty, setQty] = useState(0)

    const ClickPlus = () => {
        setQty(qty + 1)
    }

    const ClickMinus = () => {
        if(qty === 0)
        return 0
        else {
            setQty(qty - 1)
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CartItem 
                    img={ILProduct3}
                    qty={qty}
                    onPressPlus={ClickPlus}
                    onPressMinus={ClickMinus}
                />
                <CartItem 
                    img={ILProduct2}
                    qty={qty}
                    onPressPlus={ClickPlus}
                    onPressMinus={ClickMinus}
                />
                <CartItem 
                    img={ILProduct4}
                    qty={qty}
                    onPressPlus={ClickPlus}
                    onPressMinus={ClickMinus}
                />
                <CartItem 
                    img={ILProduct1}
                    qty={qty}
                    onPressPlus={ClickPlus}
                    onPressMinus={ClickMinus}
                />
            </ScrollView>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: dimension.width * 0.048,
        paddingVertical: dimension.width * 0.048
    }
})
