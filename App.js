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
        notes: prevState.notes.concat(userInputNote) 
      };
    });
  };
  handleDeleteButton = i => {
    let newNotes = this.state.notes;
    newNotes.splice(i, 1);
    this.setState({
      notes: newNotes
    });
  };
  render() {
  
  
    return <View style={styles.container}>
        <NotesInput onPressAddNote={this.handleAddNote} />
        <NotesList notes={this.state.notes} onPress={this.handleDeleteButton} />
      </View>;
    
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 40
  },


});
