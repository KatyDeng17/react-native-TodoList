import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight
} from "react-native";
import NotesInput from './src/components/NotesInput'
import NotesList from "./src/components/NotesList";


export default class App extends Component {
    state = {
      notes: []
    };

  handleAddNote = (userInputNote) => {
 
    this.setState(prevState => {
      return { 
        notes: prevState.notes.concat({key:userInputNote+Math.random(),value:userInputNote}) 
      };
    });
  };
  handleDeleteButton = key => {
    // let newNotes = this.state.notes;
    // newNotes.splice(i, 1);
    // this.setState({
    //   notes: newNotes
    // });
    this.setState(prevState=>{
      alert(key)
      return{
        notes: prevState.notes.filter(note => {
          return note.key !== key;
        })
      }

    })
  };
  render() {
  
  
    return <View style={styles.container}>
        <NotesInput onPressAddNote={this.handleAddNote} />
        <NotesList notes={this.state.notes} onDeleteButtonPress={this.handleDeleteButton} />
      </View>;

    
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 40
  },


});
