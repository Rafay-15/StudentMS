import { useState } from 'react';
import { View,StyleSheet, TextInput,StatusBar,SafeView,TouchableOpacity, Alert,Button, Image,Text ,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const CurdStudent = ({navigation}) => {
    return (
      <View style={Dashboardstyles.container}>
       
        <View style={Dashboardstyles.dashboardContainer}>
          <Text style={Dashboardstyles.dashboardTitle}>Generate Reports</Text>

          <View style={Dashboardstyles.buttonsRow}>
            <View style={Dashboardstyles.IconContainer}>
                <TouchableOpacity style={Dashboardstyles.dashboardButton} onPress={()=>{navigation.navigate('AgeReport')}}>
                  <Image source={require('../../public/icons/student.png')} style={Dashboardstyles.image} />
                </TouchableOpacity>
                <Text style={Dashboardstyles.buttonText}>Age Report</Text>
            </View>
            
            <View style={Dashboardstyles.IconContainer}>
                <TouchableOpacity style={Dashboardstyles.dashboardButton} onPress={()=>{navigation.navigate('ClassAgeReport')}}>
                  <Image source={require('../../public/icons/student.png')} style={Dashboardstyles.image} />
                </TouchableOpacity>
                <Text style={Dashboardstyles.buttonText}>Class Age Report</Text>
            </View>

            <View style={Dashboardstyles.IconContainer}>
                <TouchableOpacity style={Dashboardstyles.dashboardButton}  onPress={()=>{navigation.navigate('viewStudents')}}>
                  <Image source={require('../../public/icons/marks.png')} style={Dashboardstyles.image} />
                </TouchableOpacity>
                <Text style={Dashboardstyles.buttonText}>Result Report</Text>
            </View>
          </View>

        </View>
        <TouchableOpacity style={Dashboardstyles.backButton} onPress={()=>{navigation.navigate('adminDashboard')}}>
                  <Text style={Dashboardstyles.backText}>Back to Dashboard </Text>
        </TouchableOpacity>
        
      </View>
    );
  };

  const Dashboardstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8F4FF',
    },
    image:{
      height: 40,
      width: 40,
      resizeMode: 'contain'
    },
    IconContainer:{
        width: '40%',
        height: '100%',
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center',
        justifyContent : 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    backButton:{
      backgroundColor: '#58B1F4',
      borderRadius  : 10,
      height: 40,
      width: '50%',
      marginTop: 20,
      marginBottom: 60,
      alignSelf: 'center',
      justifyContent : 'center',
      alignItems: 'center',
      justifyContent: 'center',

    },
    dashboardContainer: {
      flex: 1,
      padding: 20,
    },
    dashboardTitle: {
      alignSelf: 'center',
      justifyContent: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    buttonsRow: {
      width: '100%',
      height: '20%',
    },
    dashboardButton: {
      backgroundColor: '#58B1F4',
      borderRadius: 10,
      width: '60%',
      height: '65%',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonText: {
      fontSize: 15,
    },
    backText: {
      color: '#fff',
      fontSize: 15,
    },
  });


export default CurdStudent;