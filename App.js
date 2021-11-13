import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Search from './components/Search';
export default function App() {

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.tasks}>
          <Text style={styles.title}>My List</Text>
          <Search />   
        </View>
      </ScrollView>
    </View>
  );
} 
//styling elements
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAFA',
  },
  tasks: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:'center',
  },

});
