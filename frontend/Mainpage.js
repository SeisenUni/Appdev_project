import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Card} from 'react-native-paper';
export default function App() {
  return (
    <View style={styles.container}>
      <Card><Text>Open up App.js to start working on your app!</Text></Card>
      <Text>Test open</Text>
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
