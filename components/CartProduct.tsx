import { View, Text, } from './Themed'
import { Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons'

function CartProduct() {
    return (
        <View style={styles.cartProduct}>
            <View style={[styles.directionRow, styles.top]}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/standingDesk.webp')}
                />

                <View style={styles.gap}>
                    <View style={[styles.directionRow, styles.namePrice]}>
                        <Text style={styles.name}>Standing Desk</Text>
                        <Text style={styles.price}>$1,200.00</Text>
                    </View>
                    <Text >Size: 120x60</Text>
                    <Text >Legs: Black</Text>
                    <Text >Shape: Sharp steep</Text>
                    <Text >Length: 129</Text>
                    <Text >Width: 66</Text>
                    <Text >Foot design: Standard</Text>

                </View>


            </View>


            <View style={[styles.directionRow, styles.bottom]}>

                <View style={[styles.directionRow, styles.counter]}>
                    <Entypo style={styles.icons} name='minus' size={20} />
                    <TextInput style={styles.input} value='1' />
                    <Entypo style={styles.icons} name='plus' size={20} />
                </View>
                <TouchableOpacity style={[styles.directionRow, styles.remove]}>
                    <Text style={styles.textRemove}>Remove</Text>
                    <Ionicons name='ios-trash-bin-outline' size={15} style={styles.textRemove}/>
                </TouchableOpacity>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    cartProduct: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
        paddingBottom: 16,
        marginBottom: 16,
    },
    directionRow: {
        flexDirection: 'row',
    },
    top: {
        columnGap: 20,
    },
    image: {
        objectFit: 'contain',
        width: 100,
        height: 75,
    },
    gap: {
        rowGap: 5
    },
    namePrice: {
        width: '69%',
        justifyContent: 'space-between',
    },
    name: {
        fontWeight: '800',
        fontSize: 16,
    },
    price:{
        fontWeight: '800',
        fontSize: 16,
        color:'#4500ff'
    },
    bottom: {
        width: '100%',
        height: 31,
        justifyContent: 'space-between',
        marginTop: 15,
    },
    input: {
        textAlign: 'center',
        height: 22,
        flex: 1
    },
    counter: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        width: 110,
        height: 32,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#e5e5e5',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'

    },
    remove: {
        alignItems: 'center',
        columnGap: 5,
        
    },
    icons:{
        height: 20,
    },
    textRemove:{
        fontWeight: '700',
        opacity: 0.5,
    }

})

export default CartProduct
