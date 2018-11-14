import React,{Component} from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text
} from "react-native";



class noteInput extends Component {
  state = {
    inputValue: ''
  };
  onAddButtonPress = ()=>{
    if(this.state.inputValue ===''){
      return
    }
    this.props.onPressAddNote(this.state.inputValue)
    this.setState({ inputValue:'' });
    
    }
  
  render(){

    return (

     <View style={styles.inputContainer}>

        <TextInput 
          placeholder="> note" 
          value={this.state.inputValue} 
          onChangeText={userInput=>{
            this.setState({
              inputValue:userInput
            })
          }} 
          style={styles.inputArea} />

        <TouchableHighlight 
          style={styles.button} 
          onPress={this.onAddButtonPress} underlayColor="gray">
          <View style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableHighlight>
        
    </View>
    )
  }
}
 
    
     

const styles = StyleSheet.create({

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
  }
});

export default noteInput;
