import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight
} from "react-native";
import ListItem from './src/components/ListItem'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      notes: []
    };
  }

  handleAddNote = () => {
    if (this.state.userInput === "") {
      return;
    }
    this.setState(prevState => {
      return {
        notes: prevState.notes.concat(prevState.userInput),
        userInput: ""
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
    // const outputNote = this.state.notes.map((item, i) => (
    //   <View key={i} style={styles.outputContainer}>
    //     <Text>{item}</Text>
    //     <Button title="delete" onPress={() => this.handleDeleteButton(i)} />
    //   </View>
    // ));
    const outputNote = this.state.notes.map((note,i) => (
        <ListItem key={i} notesItem = {note} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="> note"
            value={this.state.userInput}
            onChangeText={userInput => {
              this.setState({ userInput });
            }}
            style={styles.inputArea}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleAddNote}
            underlayColor="gray"
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style ={styles.outputContainer}>{outputNote}</View>
      </View>
    );
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
  inputContainer: {
    width: "90%",
    // backgroundColor:'#4f52',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputArea: {
    width: "80%",
    backgroundColor: "lightgray",
    height: 60
  },
  button: {
    backgroundColor: "pink",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100
  },
  buttonText: {
    color: "white",
    fontSize: 40,
    alignItems: "center"
  },
  outputContainer: {
    width: "90%",
    backgroundColor: "pink",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    margin: 5
  }
});
