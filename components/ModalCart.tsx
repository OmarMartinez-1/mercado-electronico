import { Ionicons } from "@expo/vector-icons"
import { View, Text } from "./Themed"
import { TouchableOpacity, StyleSheet } from "react-native"
import { router } from "expo-router"
import Button from "./Button"
import { ScrollView } from "react-native"
import CartProduct from "./CartProduct"

function ModalCart() {
    return (
        <View style={styles.modal}>

            <View style={styles.directionRow}>
                <Text style={styles.title}>Your cart</Text>
                <TouchableOpacity onPress={router.back}><Ionicons name="ios-close-outline" size={32} /></TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.main}
            >
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />

            </ScrollView>

            <View style={styles.toCheckout}>
                <View style={styles.directionRow}>
                    <Text style={styles.label}>Subtotal</Text>
                    <Text style={styles.total}>$1,500.00</Text>
                </View>
                <View style={styles.directionRow}>
                    <Text style={styles.label}>Shipping</Text>
                    <Text style={styles.total}>Shipping & taxes calculated at checkout</Text>
                </View>
                <Button title='Checkout' style={styles.button} />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    modal: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderTopWidth: 1,
        borderTopColor: '#e5e5e5',

    },
    directionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',

    },
    toCheckout: {
        borderTopWidth: 1,
        borderTopColor: '#e5e5e5',
    },
    label: {
        color: '#999999',
        fontWeight: '700',
        fontSize: 16
    },
    total: {
        fontWeight: '800',
        fontSize: 16
    },
    button: {
        width: '100%',
        paddingVertical: 8,
        marginTop: 30,
    },
    main: {
        flex: 1,

    }
})


export default ModalCart
