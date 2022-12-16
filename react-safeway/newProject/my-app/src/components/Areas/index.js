import React from "react"
import {View,Image,Text,TouchableOpacity} from "react-native"
import Header from "../Header";
import Footer from "../Footer"
import styles from "./styleAreas";

export default function Areas(){
    return(
        <View>
            <Header/>
            <View style={styles.TheBigBoxArea}>
            <View style={styles.BigBoxArea}>
                    <View style={styles.boxAreaL}>
                        
                        <View style={styles.blocoArea1}>   
                            <TouchableOpacity>
                                <Image
                                    style={styles.iconArea1}
                                    source={require('my-app/assets/eng.png')}
                                />
                                <Text style={styles.textArea}>
                                    Arquitetura Tecnológica
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.blocoArea2}>
                            <TouchableOpacity>
                                <Image
                                
                                    style={styles.iconArea2}
                                    source={require('my-app/assets/stock.png')}
                                />
                                <Text style={styles.textArea}>
                                    Inventário de Ativos
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.blocoArea3}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.iconArea3}
                                    source={require('my-app/assets/key.png')}
                                />
                                <Text style={styles.textArea}>
                                    Gestão de Acessos
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                    <View style={styles.BigBoxArea}>
                    
                    <View style={styles.boxAreaD}>
                        <View style={styles.blocoArea4}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.iconArea4}
                                    source={require('my-app/assets/conect.png')}
                                />
                                <Text style={styles.textArea}>
                                    Governança de Segurança da Informação
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.blocoArea5}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.iconArea5}
                                    source={require('my-app/assets/safe.png')}
                                />
                                <Text style={styles.textArea}>
                                    Gestão de Vulnerabilidades
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.blocoArea6}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.iconArea6}
                                    source={require('my-app/assets/eye.png')}
                                />
                                <Text style={styles.textArea}>
                                    Monitoramento e Respostas a Incidentes
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                    </View>
            <Footer/>
        </View>
    );
}