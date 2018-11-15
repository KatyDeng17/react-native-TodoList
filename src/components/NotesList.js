import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'

import ListItem from './ListItem';

const noteList = props=>{

  // alert(JSON.stringify(props.notes))
    return (
  
   <FlatList 
      style={styles.outputContainer}
      data={props.notes}
      renderItem={({item}) =>
        <ListItem 
          notesItem={item.value} 
          onPress = {()=>props.onDeleteButtonPress(item.key)}
        />
       } 
    />
   
    
    
        )
      
}
const styles = StyleSheet.create({
  outputContainer: {
    width: "90%",
    backgroundColor: "lightblue",
    margin: 5
  }
});

export default noteList;
