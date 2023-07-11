/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
  
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BudgetEntry from './components/BudgetEntry';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BudgetList from './components/BudgetList';

import { Provider } from 'react-redux';
import store from '../BudgetApp/store/store'



function App() {

  const Stack = createNativeStackNavigator();

  return (
    
      <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="Home"
        component={BudgetEntry}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen name="List" component={BudgetList}/>
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
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

export default App;
