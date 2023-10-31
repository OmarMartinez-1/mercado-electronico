// import 'react-native-gesture-handler';
import { useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import {  useColorScheme } from 'react-native';
import WoodenDesks from './collections/WoodenDesks';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ModalScreen from './modal';
import Index from './index';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(index)',
};
 
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
      

        <Drawer.Navigator>
          <Drawer.Screen name="index" component={Index} />
          <Drawer.Screen name="collections" component={WoodenDesks} />
          <Drawer.Screen name="modal" component={ModalScreen} />
        </Drawer.Navigator>

      
    </ThemeProvider>
  );
}
