import { Image, StyleSheet, TouchableOpacity } from "react-native"
import { View, Text } from "./Themed"


function ProductItem({ heightRes = 260, product }:  { heightRes?: number ,  product: any }) {
    return (
        <View style={Styles.productItem}>
            <TouchableOpacity>

                <Image
                    source={product.image}
                    style={[Styles.productImage, { height: heightRes }]}
                />

                <View style={Styles.colors}>
                    <Image
                        source={require('../assets/images/cropCenter.webp')}
                        style={Styles.imageColors}
                    />
                    <Image
                        source={require('../assets/images/cropCenter.webp')}
                        style={Styles.imageColors}
                    />
                    <Image
                        source={require('../assets/images/cropCenter.webp')}
                        style={Styles.imageColors}
                    />
                    <Image
                        source={require('../assets/images/cropCenter.webp')}
                        style={Styles.imageColors}
                    />
                    <Image
                        source={require('../assets/images/cropCenter.webp')}
                        style={Styles.imageColors}
                    />
                </View>
                <Text style={Styles.productName}>{product.name}</Text>
            </TouchableOpacity>
            <Text>From $ {product.price}.00</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    productItem: {
        paddingBottom: '10%',
    },
    productImage: {
        flexShrink: 1,
        width: '100%',
        objectFit: 'contain',
        marginBottom: 10,

    },
    colors: {
        flexDirection: "row",
        columnGap: 9,

    },
    imageColors: {
        width: 10,
        height: 10,
        objectFit: 'contain',
        borderRadius: 20,
    },
    productName: {
        fontSize: 20,
        fontWeight: '800',
    },

})

export default ProductItem
