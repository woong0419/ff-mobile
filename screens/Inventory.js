import { View, StyleSheet, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

function Inventory({ navigation }) {
  const inventoryItems = useSelector((state) => state.inventory.items);

  function AddButtonHandler() {
    navigation.navigate('Add Item');
  }
  return (
    <View>
      <Text>Inventory</Text>
      <Button title='ADD' onPress={AddButtonHandler} />
    </View>
  );
}

export default Inventory;

const styles = StyleSheet.create({});
