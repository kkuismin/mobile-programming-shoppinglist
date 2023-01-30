import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const add = () => {
    setData([...data, {key: text}]);
    setText('');
  }

  const clear = () => {
    setData([]);
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
      />
      <View style={styles.buttons}>
        <Button onPress={add} title="add"/>
        <Button onPress={clear} title="clear"/>
      </View>
      <Text style={styles.text}>Shopping List</Text>
      <FlatList 
        style={styles.flatlist} 
        data={data}
        renderItem={({ item }) => <Text>{ item.key }</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
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
  input: {
    width: 200,
    borderColor: "grey",
    borderWidth: 1,
    marginTop: 50,
    marginBottom: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: 'blue',
    marginTop: 30,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  flatlist: {
    margin: 10,
  }
});
