import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    PermissionsAndroid
} from 'react-native';

import Ionicons from 'react-native-vector-icons';
import Contacts from 'react-native-contacts';
import {useIsFocused} from '@react-navigation/native';
import ContactCard from '../component/ContactCard';

function MyContact({navigation}) {

    const [MyContacts,SetMyContacts] = useState([]);

    const isFocused = useIsFocused();

    useEffect(()=>{
        getAllContacts()
    },[isFocussed])

    async function getAllContacts(){
        try{
            const permission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
            if(permission==="granted"){
                const contacts = await Contacts.getAll();
                console.log(contacts);
                SetMyContacts(contacts);
            }
        }
        catch(error){
            console.log("Error");
        }
    }
  return (
    <View>
        <Ionicons
            name='add-circle'
            size={62}
            color='green'
            styles={styles.addIcon}
            onPress={()=> navigation.navigate('CreateContact')}
        />

        <FlatList
            data={MyContacts}
            keyExtractor={(item)=>item.recordID}
            renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile',{contactInfo:{id:item.recordID}})}>
                        <ContactCard contactInfo={item}   />
                    </TouchableOpacity>
            )}
        
        />

        
        
    </View>
  )
}

const styles = StyleSheet.create({

})

export default MyContact