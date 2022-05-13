/**
 * Sample React Native App
 * https://github.com/facebook/react-native

 * @format
 * @flow strict-local
 */
import {Icon} from 'native-base'
import React from 'react';
import {
  StyleSheet,
TextInput,
  View,
  ScrollView,
  Text,
  ImageBackground,
  Dimensions,
  Button
  
} from 'react-native';




   function App(){
    return (
    <ScrollView  style={{flex : 1, backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
      <ImageBackground source={require('./asset/index.jpeg')}
      style ={{ height : Dimensions.get('window').height / 2.5}}>
       <View style = {styles.firstVue}>
          <Text style ={styles.firstVueText}>Movies Go</Text>
       </View>
          
      </ImageBackground>
      <View style = {styles.bottomView}>
        <View style = {{padding : 30}}>
            <Text style = {{color : '#4632A1',fontSize : 34}}>Welcome</Text>
            <Text>
              Don't have an account ?
            <Text style = {{color :'red',fontStyle : 'italic'}}> Register Now</Text>
            </Text>
            <View style ={{marginTop : 30}}>
                <View style = {styles.input}>
                      <Text>Email</Text>
                      <TextInput value = "pas@gmail.com" keyboardType='email-address'></TextInput>
                </View>
                <View style = {styles.input1}>
                        <Text>Password</Text>
                        <TextInput value = "******"></TextInput>
                </View>
                <View style = {styles.forgotPassword}>
                   <View style ={{flex : 1}}>
                      <Text style ={{color :'#8f9195'}}>Remember Me</Text>
                   </View>
                   <View style = {{flex : 1}}>
                      <Text style ={{color :'#8f9195',alignSelf : 'flex-end'}}>Remember Me</Text>
                   </View>
                </View>
                <View style ={{height : 90, alignItems: 'center',justifyContent:'center',borderTopEndRadius:20,borderTopStartRadius:20}}>
                    <Button title='Login' color='#4632A1'/>
                </View>
            </View>
        </View>
      </View>

    </ScrollView>
         
);

}
const styles = StyleSheet.create({
  firstVue : {
    fontSize : 100,
    justifyContent : 'center',
    alignItems : 'center',
    flex : 1
  },
  firstVueText : {
    color : '#FFFFFF',
    fontSize  : 30,
    fontWeight:'bold',
    textTransform : 'uppercase'
    },
  bottomView : {
    flex : 1.5,
    backgroundColor : '#FFFFFF',
    bottom : 50,
    borderTopStartRadius : 60,
    borderTopEndRadius : 50,
  },
  input : {

    borderColor:'#4632A1',
    borderBottomWidth:3
  },

  input1 : {
    marginTop : 10,
    borderColor:'#4632A1',
    borderBottomWidth:3
  },
  forgotPassword : {
    height : 50,
    marginTop : 20,
    flexDirection : 'row',
    flexe : 1
  },
  
});

export default App;
