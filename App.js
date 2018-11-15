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
import NotesDetail from "./src/components/NotesDetail"


export default class App extends Component {
    state = {
      notes: [],
      selectedNote: null
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
    // alert(key)
    // alert(JSON.stringify(this.state.notes))
    // this.setState(prevState=>{
    //   return{
    //    notes: prevState.notes.splice(key,1)

    //   } 
    // });
    this.setState(prevState=>{
      // alert(key)
      // alert(JSON.stringify(prevState.notes))
      return{
        notes: prevState.notes.filter(note => {
          return note.key !== key;
        })
      }

    })
  };
  handleNoteOnPress = note =>{
    alert(note)
  }
  render() {
  
  
    return <View style={styles.container}>
        <NotesDetail note /> 
        <NotesInput onPressAddNote={this.handleAddNote} />
        <NotesList 
            notes={this.state.notes} 
            onDeleteButtonPress={this.handleDeleteButton} 
            noteOnPress={this.handleNoteOnPress}
        />
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
