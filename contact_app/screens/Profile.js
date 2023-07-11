import React, { useEffect, useState } from 'react';
import { View,Text,StyleSheet,Dimensions,ImageBackground,StatusBar,FlatList,ActivityIndicator,Linking} from 'react-native';
import Contacts from 'react-native-contacts';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Profile({navigation,route}) {

  const [contactInfo,SetContactInfo] = useState(null);

  //useEffect(()=>{
   //   getContact
  //})

  /*function getContact(id){
      Contacts.getContactById(id)
      .then((contact)=>
        SetContactInfo({
          ...contact,
          color:'green'

        })
      )
      .catch((error)=>console.log(error) )
  } */

  function makeCall(phoneNumber){
    Linking.openURL('tel:${phoneNumber}')
  }

  function deleteContact(contact){
      Contacts.deleteContact(contact)
        .then(()=>navigation.navigate('MyContacts'))
        .catch((error)=>console.log(error))
  }

  if(!contactInfo){
    return <ActivityIndicator size={32}/>
  }

  return (
    <View style={styles.container}>
      <ImageBackground
      source={{uri: contactInfo.hasThumbnail ? contactInfo.thumbnailpath :null }}
      style={{...styles.backgroundImage, backgroundColor:contactInfo.color}}>

            {
                !contactInfo.hasThumbnail
                ?
                    <FontAwesome5 name='user-alt' size={28} color="white"></FontAwesome5>
                    : null
            }
            <AntDesign
            name='delete' size={125} color='white'
            style={{position:'absolute',top: StatusBar.currentHeight, right:20}}
            />
            <Text style={styles.mainText}>{contactInfo.displayName}</Text>
      </ImageBackground>
      <View style={{flex:1, marginTop:20}}>
        <FlatList
            data={contactInfo.phoneNumbers}     
            keyExtractor={(item)=>item.id}   
            renderItem={({item})=>(
                <View style={styles.phoneNumnerContainer}>
                    <Text style={{marginLeft:10,fontSize:16}}>{item.number}</Text>
                    <MaterialIcons name='call' size={28} color='green'
                    onPress={()=>makeCall(item.number)} />
                </View>    
            )}
        />

      </View>
        <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height/3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainText:{
      position: 'absolute',
      bottom: 20,
      left: 20,
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold'
    },
    phonenNumberContainer: {
      flex: 1,
      marginHorizontal: 10,
      marginBottom: 20,
      paddingHorizontal: 10,
      elevation: 5,
      paddingVertical: 20,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  })
export default Profile