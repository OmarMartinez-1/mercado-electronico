import React from 'react'
import { View, Text } from './Themed'
import { StyleSheet, Image, ScrollView } from 'react-native'

function CarruselBlog() {
    return (

        <>
            <Text style={styles.titleExploreMore}>Blog</Text>
            <ScrollView
                style={styles.carrusel}
                contentContainerStyle={styles.carruselContentContainer}
                horizontal
                pagingEnabled
                bounces={false}
                showsHorizontalScrollIndicator={false}
                snapToInterval={346}

            >

                <View style={styles.card}>
                    <Image
                        source={require('../assets/images/blog.webp')}
                        style={styles.imageBlog}
                    />
                    <View style={styles.descriptionBlog} >

                        <Text style={styles.descriptionTitle}>How the past and the present shape the future of design?</Text>
                        <Text>Artists taking inspiration from old styles and reinterpreting them in the modern key, the ever repeating trend cycle, bold or subtle callbacks to the bygone eras, and combining the ‘old’ with the ‘new’ - are common themes in design, fashion, architecture, or art. Why...</Text>
                        <Text>Sep 21, 2023</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image
                        source={require('../assets/images/blog.webp')}
                        style={styles.imageBlog}
                    />
                    <View style={styles.descriptionBlog} >

                        <Text style={styles.descriptionTitle}>How the past and the present shape the future of design?</Text>
                        <Text>Artists taking inspiration from old styles and reinterpreting them in the modern key, the ever repeating trend cycle, bold or subtle callbacks to the bygone eras, and combining the ‘old’ with the ‘new’ - are common themes in design, fashion, architecture, or art. Why...</Text>
                        <Text>Sep 21, 2023</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image
                        source={require('../assets/images/blog.webp')}
                        style={styles.imageBlog}
                    />
                    <View style={styles.descriptionBlog} >

                        <Text style={styles.descriptionTitle}>How the past and the present shape the future of design?</Text>
                        <Text>Artists taking inspiration from old styles and reinterpreting them in the modern key, the ever repeating trend cycle, bold or subtle callbacks to the bygone eras, and combining the ‘old’ with the ‘new’ - are common themes in design, fashion, architecture, or art. Why...</Text>
                        <Text>Sep 21, 2023</Text>
                    </View>
                </View>

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
    card: {
        width: 326,
        height: 518,
    },
    imageBlog: {
        width: '100%',
        height: 235,
        objectFit: 'contain',
    },
    descriptionBlog: {
        paddingVertical: 20,
        marginBottom: 50,
        rowGap: 20,
    },
    descriptionTitle: {
        fontWeight: '800',
        fontSize: 22,
    },

})

export default CarruselBlog
