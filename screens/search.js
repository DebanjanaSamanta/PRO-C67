import React, {Component} from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default class Searchscreen extends Component
 {
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search Screen</Text>
     
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white',
    fontSize:25
  }
});