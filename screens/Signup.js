import { View, TextInput, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/userSlice';
import { inventoryActions } from '../store/inventorySlice';
import { groceryActions } from '../store/grocerySlice';

import { createUser } from '../firebase/emailAuth';

function Signup() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const dispatch = useDispatch();

  async function signupHandler() {
    // console.log(enteredEmail, enteredPassword);
    await createUser(enteredEmail, enteredPassword)
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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  }

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
    }
  }

  return (
    <View>
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

        <View>
          <Button title='Sign up' onPress={signupHandler} />
        </View>
      </View>
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({});
