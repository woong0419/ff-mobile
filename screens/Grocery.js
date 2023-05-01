import { View, StyleSheet, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

function Grocery({ navigation }) {
  const groceryList = useSelector((state) => state.grocery.items);

  function AddButtonHandler() {
    navigation.navigate('Add Item');
  }

  return (
    <View>
      <Text>Grocery</Text>
      <Button title='ADD' onPress={AddButtonHandler} />
    </View>
  );
}

export default Grocery;

const styles = StyleSheet.create({});
