import React, { useState } from "react"
import {View,Text, TextInput, Button} from "react-native"
import Footer from "../Footer"
import Header from "../Header"
import styles from "./styleForm"

export default function Form(){

    const [nomeGestor, setNomeGestor] = useState(null)
    const [nomeUsina, setNomeUsina] = useState(null)
    const [endereço, setEndereço] = useState(null)
    const [dados, setDados] = useState(null)

    function salvaDados(){
    
        if(nomeGestor != null && nomeUsina != null && endereço != null){

        return setDados('Gestor: "'+nomeGestor+'", '+'Usina: "' +nomeUsina+'", ' +'Endereço: "'+ endereço+'"')
        }
    }

    return(
        <View>
            <Header/>
            <View style={styles.boxForm}>
                <Text style={styles.titleForm}>
                    Informe os Dados da Usina:
                </Text>

                <Text style={styles.textForm}>Nome do Gestor:</Text>
                <TextInput
                    style={styles.inputForm}
                    onChangeText={setNomeGestor}
                    value={nomeGestor}
                    placeholder="Ex.: João da Silva"
                ></TextInput>

                <Text style={styles.textForm}>Nome da Usina:</Text>
                <TextInput
                    style={styles.inputForm}
                    onChangeText={setNomeUsina}
                    value={nomeUsina}
                    placeholder="Ex.:Santa Clara"
                ></TextInput>

                <Text style={styles.textForm}>Endereço:</Text>
                <TextInput
                    style={styles.inputForm}
                    onChangeText={setEndereço}
                    value={endereço}
                    placeholder="Ex.: 85170-000, Pinhão - PR"
                ></TextInput>
                <View style={styles.buttonForm}>
                <Button
                    
                    onPress={()=> salvaDados()}
                    title="Cadastrar"
                />
                </View>
            </View>
            <Footer/>
        </View>
    );
}