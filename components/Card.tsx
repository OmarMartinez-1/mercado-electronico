import Button from "./Button"
import { View , Text} from "./Themed"
import { StyleSheet, Image } from 'react-native'
function Card() {
    return (
        <View style={Styles.card}>
            <Image
                source={require('../assets/images/cohesionIphone.webp')}
                style={Styles.image}
            />
            <View style={Styles.description} >

                <Text style={Styles.descriptionTitle}>iPhone — Cohesion with Apple design</Text>
                <Text>At Oakywood, we appreciate the sleekness of Apple design. With iPhone users in mind, we created stylish wooden accessories to help you store and charge your phone while optimizing your desk space.</Text>
            </View>
            
            <Button title='IPHONE ACCESSORIES' style={{marginHorizontal: 20,}}/>
        </ View>
    )
}

const Styles = StyleSheet.create({
    card: {
        backgroundColor: '#e5e5e5',
        width: 326,
        height: 518,
    },
    image: {
        width: '100%',
        height: 235,
        objectFit: 'contain',
    },
    description: {
        paddingVertical: 20,
        marginHorizontal: 20,
        marginBottom: 50,
        rowGap: 20,
        backgroundColor: '#e5e5e5',
    },
    descriptionTitle: {
        fontWeight: '800',
        fontSize: 22,
    },
})


export default Card
