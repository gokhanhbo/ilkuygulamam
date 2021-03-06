import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('ilk uygulamam başlıyor mu acaba');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="yazıyı değiştir me sakın haa test" onPress={() => setOutputText('bastım oldu')   }/>
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
