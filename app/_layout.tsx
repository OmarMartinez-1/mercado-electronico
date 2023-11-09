// import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, DrawerNavigationState, ParamListBase, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useColorScheme, StyleSheet } from 'react-native';
import WoodenDesks from './collections/WoodenDesks';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import ModalScreen from './modal';
import { DrawerDescriptorMap, DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { View, Text } from '../components/Themed';
import { drawerMenu } from '../constants/constants';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import SubMenu from '../components/SubMenu';
import { Ionicons } from '@expo/vector-icons'
import { Svg, Path, G } from 'react-native-svg';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(modal)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}



const Drawer = createDrawerNavigator()
function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>


      <Drawer.Navigator

        screenOptions={{
          drawerType: 'slide',
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >


        <Drawer.Screen name="collections" component={WoodenDesks} />

        <Drawer.Screen name="modal" component={ModalScreen} />


      </Drawer.Navigator>


    </ThemeProvider>
  );
}


type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
}

const inicialState: number = -1
function CustomDrawer(props: Props) {

  const [menuIndex, setMenuIndex] = useState(inicialState)



  return (
    <View style={styles.drawer}>

      <DrawerContentScrollView
        contentContainerStyle={styles.drawerContainer}
      >
        <View style={styles.dropdawnContainer} >

          <View style={styles.iconClose}>
          <TouchableOpacity
          onPress={()=> { props.navigation.closeDrawer() }}
          >
            <Ionicons name='close' size={35} />
          </TouchableOpacity>
          </View>



          {drawerMenu.map((item, index) => {
            return (
              <View key={index} style={styles.drawerItem}>

                <TouchableNativeFeedback
                  style={styles.drawerItemView}
                  onPress={() => {
                    setMenuIndex(menuIndex === index ? inicialState : index)
                  }}
                >
                  <View style={styles.drawerItemTitle}>

                    <Text style={styles.title} >
                      {item.title}
                    </Text>
                  </View>


                  <Ionicons name={menuIndex === index ? 'chevron-up' : 'chevron-down'} size={22} style={styles.iconTitle} />

                </TouchableNativeFeedback>

                {
                  menuIndex === index && (
                    <View>
                      <SubMenu menuList={item.menuList} />
                    </View>
                  )
                }

              </View>

            )
          })}

        </View>


        {/* <DrawerItemList {...props} /> */}


        <View style={styles.drawerFooter}>

          <View>
            <TouchableOpacity >

              <Svg width="40" height="40" viewBox="0 0 120 120" ><G fill="none" fill-rule="evenodd"><Path d="M120 0v120H0V0h120ZM77.143 37.333H42.857l-.378.003C30.025 37.536 20 47.61 20 60.016c0 12.405 10.025 22.478 22.479 22.678l.378.003h11.429l22.857-45.364Zm22.857 0H77.143v45.364L100 37.333Z" fill="#1A1A1A"></Path></G></Svg>

            </TouchableOpacity>

          </View>

          <View style={styles.footerSocialMedia}>
            <TouchableOpacity >
              <Text>Instagram</Text>
            </TouchableOpacity>

            <TouchableOpacity >
              <Text>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity >
              <Text>Pinterest</Text>
            </TouchableOpacity>
          </View>


        </View>

      </DrawerContentScrollView>

    </View>
  )
}





const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  drawerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  dropdawnContainer: {
    minHeight: '60%',
    alignItems: 'center',
    width: '100%',

  },
  iconClose: {
    marginRight: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  drawerItem: {
    width: '94%',
    minHeight: '5%',
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
    marginVertical: 5,
    borderRadius: 4,
  },
  drawerItemView: {
    flexDirection: 'row',
    width: '95%',
    marginLeft: 15,

  },
  drawerItemTitle: {
    width: '80%',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: 30,
    color: '#222222',
  },
  iconTitle: {
    alignSelf: 'center',
  },

  drawerFooter: {
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    // marginBottom: 20,
    marginVertical: 10,
    borderRadius: 4,
    rowGap: 20,

  },
  footerSocialMedia: {
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },


})
