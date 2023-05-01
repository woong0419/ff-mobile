import { View, StyleSheet, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logOut } from '../firebase/emailAuth';
import { userActions } from '../store/userSlice';
import { inventoryActions } from '../store/inventorySlice';
import { groceryActions } from '../store/grocerySlice';

function Profile() {
  const dispatch = useDispatch();

  async function logoutHandler() {
    await logOut()
      .then(() => {
        // Sign-out successful
        dispatch(userActions.logOut());
        dispatch(inventoryActions.deleteUser());
        dispatch(groceryActions.deleteUser());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }

  return (
    <View>
      <Text>Profile</Text>
      <Button title='Log out' onPress={logoutHandler} />
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({});
