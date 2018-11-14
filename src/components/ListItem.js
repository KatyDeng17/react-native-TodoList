import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
const listItem = (props)=>
 <View style = {styles.listItem}>  
    <Text>{props.notesItem}</Text> 
    <Button title='Delete' onPress={props.onDeleteButtonPress} />
 </View> 

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#eee"
  }
});
export default listItem