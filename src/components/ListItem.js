import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
const listItem = props => (
  <View style={styles.listItemContainer}>
    <View style={styles.note}>
      <Text>{props.notesItem}</Text>
    </View>
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
    width: "70%",
    padding: 10,
    margin: 5,
    backgroundColor: "#eee"
  }
});
export default listItem


