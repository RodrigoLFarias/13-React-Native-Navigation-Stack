import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home/Home';
import Sobre from './src/pages/Sobre/Sobre';
import { NavigationContainer } from '@react-navigation/native';
import Contato from './src/pages/Contato/Contato';

const Stack = createNativeStackNavigator();

export default function App() {

  // const imagemDeFundo = require('./src/img/Blue-Squares-Wallpaper-1080x1920.jpg')

  return (
    // <ImageBackground source ={imagemDeFundo} style ={styles.imagemNaTela} resizeMode='cover'>
    <NavigationContainer>
      <Stack.Navigator>
        
       <Stack.Screen 
          name='Home' 
          component = {Home}
          options={{
            title: 'Tela Inicial',
            headerStyle:{
              backgroundColor:'#121212'
            },
            headerTintColor:'white',
         // headerShown: false  //Permite que você oculte o header da tela inicial
          }}/>

      <Stack.Screen  
          name='Sobre' 
          component = {Sobre}/>

      <Stack.Screen  
          name='Contato' 
          component = {Contato}/>

      </Stack.Navigator>
    </NavigationContainer>
    // </ImageBackground>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: 'rgba(255, 255, 255, 0.5)',  // Torna o fundo branco sem sobrepor a imagem
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   // imagemNaTela:{
//   //      flex: 1,
//   //      width:'100%',
//   //      height: '100%',
     
//   // },
// });
