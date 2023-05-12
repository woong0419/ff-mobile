import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../firebase/emailAuth';
// import { signInWithGoogle } from '../firebase/googleAuth';

import { userActions } from '../store/userSlice';
import { inventoryActions } from '../store/inventorySlice';
import { groceryActions } from '../store/grocerySlice';

function Login({ navigation }) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const dispatch = useDispatch();

  function SignupButtonHandler() {
    navigation.navigate('Sign up');
  }

  async function signinButtonHandler() {
    await logIn(enteredEmail, enteredPassword)
      .then((userCredential) => {
        // Signed in
        const user = {
          token: userCredential.user.accessToken,
          uid: userCredential.user.uid,
        };

        // ...
        dispatch(userActions.logIn(user));
        dispatch(inventoryActions.addUser(user.uid));
        dispatch(groceryActions.addUser(user.uid));
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <View>
      <Text>Login</Text>
      <View>
        <TextInput
          autoCapitalize='none'
          keyboardType='email-address'
          value={enteredEmail}
          onChangeText={(newText) => setEnteredEmail(newText)}
        />
        <TextInput
          autoCapitalize='none'
          value={enteredPassword}
          onChangeText={(newText) => setEnteredPassword(newText)}
          secureTextEntry
        />
      </View>
      <Button title='Sign in' onPress={signinButtonHandler} />
      <Button title='Sign Up' onPress={SignupButtonHandler} />
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({});
