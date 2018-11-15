import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
const listItem = props => (

  <View style={styles.listItemContainer}>
    <TouchableOpacity style={styles.note} onPress = {props.noteOnPress}>
      <View >
        <Text>{props.notesItem}</Text>
      </View>
    </TouchableOpacity>
    <Button title="Delete" onPress={props.onPress} />
  </View>

); 

const styles = StyleSheet.create({
  listItemContainer: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 5,
    backgroundColor: "pink"
  },
  note: {
    width: "75%",
    padding: 10,
    margin: 5,
    backgroundColor: "#eee"
  }
});
export default listItem


