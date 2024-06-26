import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Alert, Modal,   Pressable, } from 'react-native';
import NavigationIcon from './NavigationIcon';

const Model = (p) => {

    // const stack = p.navigation;

    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
        <View style={styles.centeredView}>
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
        
      </View>
      <NavigationIcon />
    </View>
  )
}

export default Model

const styles = StyleSheet.create({
    // centeredView: {
    //     flex:1,
    //     height:200,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor:'blue',
    //   },
    //   modalView: {
    //     margin: 20,
    //     backgroundColor: 'white',
    //     borderRadius: 20,
    //     padding: 35,
    //     alignItems: 'center',
    //     shadowColor: '#000',
    //     shadowOffset: {
    //       width: 0,
    //       height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 4,
    //     elevation: 5,
    //   },
    //   button: {
    //     borderRadius: 20,
    //     padding: 10,
    //     elevation: 2,
    //   },
    //   buttonOpen: {
    //     backgroundColor: '#F194FF',
    //   },
    //   buttonClose: {
    //     backgroundColor: '#2196F3',
    //   },
    //   textStyle: {
    //     color: 'white',
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //   },
    //   modalText: {
    //     marginBottom: 15,
    //     textAlign: 'center',
    //   },
})