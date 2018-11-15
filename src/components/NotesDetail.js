import React from 'react'
import { Modal, View, Text, Button, StyleSheet } from "react-native";

const noteDetail = props => {
  let modalContent = null; 
  if(props.selectedNote){
    modalContent = (
      <View>
        <Text>{props.selectedNote.value} </Text>
      </View>
    );
  }
  return (
    <Modal onRequestClose={props.onCloseModal} visible={props.selectedNote !== null}>
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.button}>
          <Button title="Delete" onPress={props.onDeleteItem}/>
          <Button title="Close" onPress={props.onCloseModal}/>
        </View>
      </View>
    </Modal>
    )

}; 

const styles = StyleSheet.create({
  button: {
    width: "100%",

  },
  modalContainer: {
    margin: 40,
    backgroundColor: "lightblue"
  }
});

export default noteDetail
