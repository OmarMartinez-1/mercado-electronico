import { View } from './Themed'
import {BrandLogoLight} from './BrandLogo'
import { StyleSheet, TouchableOpacity,  } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {  DrawerNavigationProp } from '@react-navigation/drawer/lib/typescript/src/types';
import {  ParamListBase, } from '@react-navigation/native';
import { router } from 'expo-router';



function Header(navigation: DrawerNavigationProp<ParamListBase>) {
    return (
        <View style={styles.header}>
            <BrandLogoLight />

            <View style={styles.rightContainer}>
                <TouchableOpacity>
                    <Ionicons name='ios-search-outline' size={32} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/modal')}>
                    <Ionicons name='ios-cart-outline' size={32} />
                </TouchableOpacity>

                <View style={styles.menu}>

                <TouchableOpacity onPress={()=>{
                    navigation.openDrawer()
                }}>
                    <Ionicons name='ios-menu-outline' size={32} />
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        alignItems: 'center',
        alignContent: 'center',
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        columnGap: 15,
    },
    menu:{
        marginLeft: 15,
    }
})

export default Header
