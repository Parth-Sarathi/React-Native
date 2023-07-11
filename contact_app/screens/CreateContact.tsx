import React, { useEffect, useState } from 'react';
import {View, Text ,StyleSheet,TextInput} from 'react-native';

export default function CreateContact() {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [phoneNumbers,setPhoneNumbers] = useState('');

    useEffect(()=>{

    })

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder='firstName'
                value={firstName}
                onChangeText={(text)=>setFirstName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='lasttName'
                value={lastName}
                onChangeText={(text)=>setLastName(text)}
            />
        </View>
        {phoneNumbers.map(phoneNumber,index)=>(
            
        )}
    </View>
  )
}

const styles = StyleSheet.create({

})
