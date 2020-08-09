import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TextInput } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {createAppContainer, createSwitchNavigator}from 'react-navigation';

export default class App extends React.Component {

  constructor(){
    super();
    this.state={
        text: "" ,
        isSearchPressed:true,
        lexialCategory:"",
        examples:[],
        defination:"",
        word:""
    }
}
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
})

const AppContainer = createAppContainer(AppNavigator)



const styles = StyleSheet.create({
  container: {
    flex: 1,   
  },
  inputBoxContainer: {
    flex:0.3,
    alignItems:"center",
    justifyContent:"center",
  },
  inputBox: {

  }
});
