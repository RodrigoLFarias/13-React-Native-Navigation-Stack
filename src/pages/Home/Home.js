import { useNavigation } from "@react-navigation/native";
import React from "react";
import{View, Text, Button} from "react-native";


export default function Home(){

const navigation = useNavigation();

function navegaSobre(){
     navigation.navigate('Sobre',{nome:'Carlton', email: "CarltonJon@gmail.com",});
}

    return(
        <View>
        <Text>Página Home</Text>
        {/* <Button title= "Ir para página SOBRE" onPress={() => navigation.navigate('Sobre')}/> */}
        <Button title="Ir para página SOBRE"  onPress={navegaSobre} />

        </View>
   )
}