import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Minputfield from "../mollecules/Minputfield";
import { numericValues } from "../../@utils/numericValues";
import Parameters from "../../styles/param";


export default function OtypeNumber({label, placeholder, onChangeText, value}){
    return(
        <View style =  {styles.container}>
            <Minputfield 
                label={label}
                placeholder={placeholder}
                keyboardtype="numeric"
                // onChangeText={(text) => numericValues(text, setNumber)}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      width: Parameters.full_size,
      height: "auto",
      padding: Parameters.param2
    }
});