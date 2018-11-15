import React from 'react'
import {Modal,View, Text,Button} from 'react-native'

const noteDetail = props =>(

  <Modal>
      <View> 
        <Text>{props.note} </Text> 
        <View>
          <Button title = 'close'/> 
        </View> 
      </View>

  </Modal>
); 

export default noteDetail
