import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {useSelector} from 'react-redux'

const BudgetList = () => {

  const list = useSelector((state)=>state.budgetreducer.list)
  return (
    <View>
      <Text>BudgetList</Text>
      {list.map((elem)=>{
        <Text>{elem.data}</Text>
      })}
    </View>
  )
}

export default BudgetList

const styles = StyleSheet.create({})