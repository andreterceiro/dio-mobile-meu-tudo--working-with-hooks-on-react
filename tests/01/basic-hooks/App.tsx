import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [count, modifyCount] = useState(0);

  const increment = function() {
      modifyCount(count + 1)
  }

  const decrement = function() {
      modifyCount(count - 1)
  }

  return (
    <View style={styles.container}>
      <Text>{count}{'\n'}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
