import { ScrollView, StyleSheet } from "react-native"
import { Text } from "./Themed"
import Card from "./Card"


function CarruselExploreMore() {
    return (
        <>
            <Text style={styles.titleExploreMore}>Explore more possibilities.</Text>
            <ScrollView
                style={styles.carrusel}
                contentContainerStyle={styles.carruselContentContainer}
                horizontal
                pagingEnabled
                bounces={false}
                showsHorizontalScrollIndicator={false}
                snapToInterval={346}

            >

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    titleExploreMore: {
        marginLeft: 20,
        marginTop: 20,
        fontWeight: '800',
        fontSize: 22,
    },
    carrusel: {
        marginLeft: 20,
        flexDirection: 'row',
    },
    carruselContentContainer: {
        columnGap: 20,
        alignItems: 'flex-start',
    },
})

export default CarruselExploreMore
