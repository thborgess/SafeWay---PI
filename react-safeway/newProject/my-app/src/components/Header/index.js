import React from "react"
import {View, Image} from "react-native"
import styles from "./styleHeader";

export default function Header(){

    return(
        <View style={styles.boxHeader}>
            <Image 
                style={styles.iconHeader}
                source={require('my-app/assets/logotipo.png')}
            />
        </View>
    );
}