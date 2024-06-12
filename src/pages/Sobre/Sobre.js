import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import{View, Text, Button} from "react-native";


export default function Sobre(){

    const route = useRoute();
    const navigation = useNavigation();

useLayoutEffect(() => {
navigation.setOptions({
    title: route.params?.nome === '' ? 'Sobre' : route.params?.nome
})
},[navigation])
    return(

        <View>
        <Text>Página Sobre</Text>
        <Text>{route.params?.nome}</Text>
        <Text>{route.params?.email}</Text>
        
        <Button title= "Ir para página CONTATO" onPress={() => navigation.navigate('Contato')}/>
        </View>
   )
}