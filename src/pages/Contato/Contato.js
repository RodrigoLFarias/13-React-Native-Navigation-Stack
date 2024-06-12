import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";

export default function Contato(){
    const navigation = useNavigation();

    function handleHome(){
        navigation.dispatch(StackActions.popToTop())
    }
    return(
        <View>
        <Text>Página Contato</Text>
        <Button title= "Voltar para HOME" onPress={handleHome} />
        </View>
    )

}