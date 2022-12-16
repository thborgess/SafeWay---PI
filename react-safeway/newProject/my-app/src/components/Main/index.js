import React from "react"
import {View, Text, ScrollView} from "react-native"
import Header from "../Header";
import Footer from "../Footer"
import styles from "./styleMain";

export default function Main(){

    return(
        <View style={styles.boxMain}>
           <Header/>
            <ScrollView >
                <Text>Bem vindo!</Text>
            </ScrollView>
           <Footer/>
        </View>
    );
}