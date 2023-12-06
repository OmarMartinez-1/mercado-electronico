import { Link } from 'expo-router'
import { Text, View } from '../components/Themed'

function Index() {
  return (
    <View>
        <Text>index pagehh</Text>
        <Link  href="/collections/deskOrganization" />
    </View>
  )
}

export default Index
