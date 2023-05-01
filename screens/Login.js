import { View, StyleSheet, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
// import { signInWithGoogle } from '../firebase/googleAuth';

import { userActions } from '../store/userSlice';
import { inventoryActions } from '../store/inventorySlice';
import { groceryActions } from '../store/grocerySlice';

function Login() {
  const googleSigninConfigure = () => {};

  async function LoginButtonHandler() {}
  return (
    <View>
      <Text>Login</Text>
      <Button title='Login' onPress={LoginButtonHandler} />
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({});
