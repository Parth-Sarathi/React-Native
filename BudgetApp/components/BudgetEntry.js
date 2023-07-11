import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button
  } from 'react-native';
import { addTodo } from '../actions';

function BudgetEntry({navigation}) {

  const submit=()=>{
    navigation.navigate()

    const [inputData,setInputData] = React.useState('');
    const dispatch = useDispatch();
  }
  return (
    <View style={{alignItems:"center"}}><Text>Hello World</Text>
    <Text style={styles.heading}>Budget ENtry</Text>
    <TextInput
        style={styles.input}
       // onChangeText={onChangeNumber}
       // value={number}
        placeholder="Item Name"
        keyboardType="numeric"
        value={inputData}
        onChange={(event)=>setInputData(event.target.value)}
      />
      <TextInput
        style={styles.input}
       // onChangeText={onChangeNumber}
       // value={number}
        placeholder="Planned Amount"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
       // onChangeText={onChangeNumber}
       // value={number}
        placeholder="Actual Amount"
        keyboardType="numeric"
      />
      <Button
        onPress={() => {
          console.log('You tapped the button!');
          dispatch(addTodo(inputData)) ;
          }}
        title="Submit"
      />
    </View>
  )
}
const styles = StyleSheet.create({
    heading:{
      fontSize:20,
      fontWeight:"bold",
      marginBottom:70
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  });

export default BudgetEntry