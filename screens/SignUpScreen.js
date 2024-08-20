import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    // Handle signup logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/login.png')} style={styles.logo} /> 
      <Text style={styles.header}>Create Account</Text>

      <View style={styles.row}>
        <View style={styles.halfInputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.halfInputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Phone Number</Text>
        <View style={styles.phoneContainer}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={countryCode}
              style={styles.picker}
              onValueChange={(itemValue) => setCountryCode(itemValue)}
            >
              <Picker.Item label="+1" value="+1" />
              <Picker.Item label="+92" value="+92" />
              <Picker.Item label="+91" value="+91" />
              {/* Add more country codes as needed */}
            </Picker>
          </View>
          <TextInput
            style={styles.phoneInput}
            placeholder="458-465-6466"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="************"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="************"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <MaterialIcons name={showConfirmPassword ? 'visibility' : 'visibility-off'} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

<View style={{alignItems:'center'}} >
 <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
 <Text style={styles.signupButtonText}>Sign Up</Text>
</TouchableOpacity>
</View>
     

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 310,
    height: 180,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop:80,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap:30,
  },
  halfInputContainer: {
    flex: 1,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  pickerContainer: {
    flex: 0.5,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  picker: {
    width: '100%',
  },
  phoneInput: {
    flex: 0.8,
    padding: 10,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  passwordInput: {
    flex: 1,
    marginRight: 10,
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: '#0071E3',
    width:232,
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#007BFF',
  },
});

export default SignupScreen;
