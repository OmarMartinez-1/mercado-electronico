import { Slot } from 'expo-router'
import { ScrollView, StyleSheet, Image } from 'react-native'
import Footer from '../../components/Footer'
import { View } from '../../components/Themed'
import CarruselBlog from '../../components/CarruselBlog'
import CarruselExploreMore from '../../components/CarruselExploreMore'


function _layout() {


  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.page}>
        <Slot />


        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/showCase.webp')}
            style={styles.image}
          />
        </View>
        <CarruselExploreMore />
        <CarruselBlog />

      </View>

      <Footer />
    </ScrollView >
  )

}

const styles = StyleSheet.create({
  page: {
    rowGap: 20,

  },
  imageContainer: {
    alignContent: 'center',
    marginHorizontal: 20,
    rowGap: 20,

  },
  image: {
    width: '100%',
    height: 260,
    objectFit: 'contain',
  },
})

export default _layout
