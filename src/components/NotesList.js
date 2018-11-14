import React from 'react'
import {View, StyleSheet} from 'react-native'

import ListItem from './ListItem';

const noteList = props=>{
   const outputNote = props.notes.map((note, i) => (
     <ListItem 
       key={i} 
       notesItem={note} 
       onDeleteButtonPress = {props.onPress}
     />
   ));
    return (
        <View style={styles.outputContainer}>      
           {outputNote}
        </View>
        )
      
}
const styles = StyleSheet.create({
  outputContainer: {
    width: "90%",
    backgroundColor: "pink",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    margin: 5
  }
});

export default noteList;