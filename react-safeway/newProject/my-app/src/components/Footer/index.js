import * as React from "react"
import {View, Image, TouchableOpacity} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "./styleFooter";

export default function Footer(){
   
    return(
       
        <View style={styles.boxFooter}>
            <View style={styles.separaFooter}>
                <TouchableOpacity
                    onPress={rota.vaiHome()}
                >
                    <Image
                        style={styles.iconFooter}
                        source={require('my-app/assets/home.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=> navigation.navigate('Editar')}
                >
                    <Image
                        style={styles.iconFooter}
                        source={require('my-app/assets/mais.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        style={styles.iconFooter}
                        source={require('my-app/assets/edit.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        style={styles.iconFooter}
                        source={require('my-app/assets/tables.png')}
                    />
                </TouchableOpacity>   
            </View>
        </View>
    );
}

