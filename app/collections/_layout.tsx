import { Slot } from 'expo-router'
import { StyleSheet } from 'react-native'


function _layout() {
  return (
    <Slot />
  )
}

const styles = StyleSheet.create({
  layout:{
    borderColor: 'red',
    borderWidth: 1,
  }
})

export default _layout
