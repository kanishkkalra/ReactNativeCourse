import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  // View is a container component used to hold other component . Same as div in html
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="Your Course Goals" />
        <Button title="Add Goal" />
        <Text>List of Goals</Text>
      </View>
      <View></View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  }
});
