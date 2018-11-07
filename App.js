

import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';


export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: '',
      notes: []
    }
  }

  handleAddNote = ()=>{
    if(this.state.userInput === ''){
      return;
    }
    this.setState((prevState) =>{
      return{
        notes: prevState.notes.concat(prevState.userInput),
        userInput: '',
      }
    })
  }
  handleDeleteButton =(i)=>{
    let newNotes = this.state.notes
    newNotes.splice(i,1); 
    this.setState({
      notes: newNotes
    })

  }
  render() {
    const outputNote = this.state.notes.map((item, i)=>(
      <View key={i}> 
        <Text>{item}</Text>
        <Button title ="delete" onPress = {()=>this.handleDeleteButton(i)}/>
      </View>
    )
  )
    return (
      <View style={styles.container}>
        <View >
            <TextInput 
                placeholder = '> note'
                value = {this.state.userInput}
                onChangeText={(userInput)=>{
                  this.setState({userInput})
                }}
            />
            <Button 
                title = 'Add'
                onPress = {this.handleAddNote}
            />
        </View>
       {outputNote}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
  },
 
 
});
