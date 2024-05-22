import { useState } from 'react';
import { View,StyleSheet, TextInput,StatusBar,SafeView,TouchableOpacity, Alert,Button, Image,Text ,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function StudentLogin({ navigation }) {
    const [registration, setRegistration] = useState('');
    const [password, setPassword] = useState('');

    const verifyLogin = async () => {
      try {
          // await auth().signInWithEmailAndPassword(email +'@gmail.com', password);
  
          // const uEmail = auth().currentUser.email;
          // console.log(uEmail);
          // const userQuerySnapshot = await firestore().collection("Users")
          //     .where("email", "==", uEmail)
          //     .get();
  
          // if (!userQuerySnapshot.empty) {
          //     const userDoc = userQuerySnapshot.docs[0];
          //     const userRole = userDoc.data().role;
  
          //     if (userRole === "student") {
          //         navigation.navigate('studentDashboard');
          //     } else {
          //         alert("No Such Student Exists");
          //     }
          // } else {
          //     alert("No Such Student Exists");
          // }

          const userQuerySnapshot = await firestore().collection("Students")
          .where("registrationNumber", "==", email)
          .get();

          if (!userQuerySnapshot.empty) {
            const userDoc = userQuerySnapshot.docs[0];
            const userData = userDoc.data();
            const hashedPassword = userData.password;
            const isPasswordValid = await verifyPassword(plainPassword, hashedPassword);
            if (isPasswordValid) {
                    navigation.navigate('studentDashboard');
              } 
            else {
                    alert("No Such Student Exists");
                  }
            }
              else {
                  alert("Invalid Registraion Number");
              }
          }
                  
      catch (error) {
          alert(error.message);
      }
  };

  return (
    <View style={LoginStyles.container}>
      <Image source={require('../../public/img/Logo.png')} style={LoginStyles.logo} />
      <Text style={LoginStyles.title}>Student Login</Text>
      <View style={LoginStyles.inputContainer}>
      <Image source={require('../../public/icons/email.png')} style={LoginStyles.icon} />
        <TextInput
          style={LoginStyles.input}
          placeholder="Registration"
          value={registration}
          onChangeText={setRegistration}
        />
      </View>
      <View style={LoginStyles.inputContainer}>
      <Image source={require('../../public/icons/password.png')} style={LoginStyles.icon} />
        <TextInput
          style={LoginStyles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={LoginStyles.button} onPress={()=>verifyLogin()}>
        <Text style={LoginStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={LoginStyles.link} onPress={() => { /* Handle Forgot Password */ }}>Forgot Password</Text>
      <Text style={LoginStyles.link} onPress={() => navigation.navigate('Land')}>Back to Home Page</Text>
    </View>
    );
  };

  const LoginStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E8F4FF',
    },
    logo: {
      width: 100,
      height: 100,
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 50,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
      padding: 15,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 20,
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
    },
    button: {
      backgroundColor: '#58B1F4',
      padding: 15,
      borderRadius: 10,
      width: '80%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    link: {
      color: '#58B1F4',
      marginTop: 15,
      fontSize: 16,
    },
  });
  
  export default StudentLogin;