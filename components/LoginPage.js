import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
import newtab from '@/app/(tabs)/newtab';
 
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
 
  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
 
    if (email === 'test' && password === 'test') {
      navigation.navigate(newtab);
    } else {
      Alert.alert('Error', 'Invalid credentials.');
    }
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="default"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    <View>
    <TouchableOpacity style={styles.Touchable1} onPressIn={handleLogin}>
 
<Text>Press Me</Text>
</TouchableOpacity>
    </View>
   
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width:140,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  Touchable1:
  {
    backgroundColor:"blue",
    fontSize:23,
    borderColor:"aqua",
    borderWidth:2,
    borderRadius:3,
    padding:10,
    marginTop:10,
  }
});
 
export default LoginForm;