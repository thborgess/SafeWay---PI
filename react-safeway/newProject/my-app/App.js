import {React, useState, Component} from 'react';
import {Text,View, Button , StatusBar, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "./styleApp";

import api from "./services/api";

export default function App() {
  
  // Main -----------------------------------------------------------------------------

  function HomeScreen() {
    const navigation = useNavigation()
    return (
      <View style={styles.boxMain}>
        <StatusBar
          hidden={true} 
        />
        <ScrollView>
          <Text style={styles.selectTittle}>
            Bem vindo!
          </Text>
          <View>
          <TouchableOpacity
                onPress={()=> navigation.navigate('cadastrar')}
              >
          <View style={styles.boxcard}>
            <View style={styles.imgbackCard1}>
                <Image
                  style={styles.imgCard}
                  source={require('my-app/assets/card.png')}
                /> 
            </View>
            <View style={styles.boxTextCard}>
              <Text style={styles.textTitleCard}>
                Cadastrar
              </Text>
              <Text>
                Registre a usina e responda 
                o questionário.
              </Text>
            </View>
          </View>
          </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity
                    onPress={()=> navigation.navigate('select')}
                    >
          <View style={styles.boxcard}>
            <View View style={styles.imgbackCard2}>    
                      <Image
                        style={styles.imgCard}
                        source={require('my-app/assets/usina.png')}
                      />
            </View>
            <View style={styles.boxTextCard}>
              <Text style={styles.textTitleCard}>
                Usinas
              </Text>
              <Text>
                Consulte o histórico de respostas da usina.
              </Text>
            </View>
            </View>
            </TouchableOpacity>
          </View>
          <View>
          <Text style={styles.textQuestion}>
            Portuação Geral
          </Text>
          <View>
            <View style={styles.miniBoxTables}>
              <View style={styles.microBoxTables}>
                <View style={styles.rankTables1}>
                  <Text>
                    1
                  </Text>
                </View>
                <Text style={styles.textTables}>
                  Usina Porto Estrela
                </Text>
              </View>
              <View 
                style={styles.progressBarback}
              >
                <View 
                  style={styles.progressBarfront1}
                >
                  <Text style={styles.textBarTables}>
                    53 Pontos
                  </Text>
                </View>
              </View>
            </View>
                  <View style={styles.microBoxTables}>
              <View style={styles.rankTables2}><Text>2</Text></View>
              <Text style={styles.textTables}>Usina Santa Clara</Text>
            </View>
              <View 
                style={styles.progressBarback}
              >
                <View 
                  style={styles.progressBarfront2}
                >
                  <Text style={styles.textBarTables}>
                    48 Pontos
                  </Text>
                </View>
              </View>

              <View style={styles.microBoxTables}>
              <View style={styles.rankTables3}><Text>3</Text></View>
              <Text style={styles.textTables}>Usina Itapebi</Text>
            </View>
              <View 
                style={styles.progressBarback}
              >
                <View 
                  style={styles.progressBarfront3}
                >
                  <Text style={styles.textBarTables}>
                    38 Pontos
                  </Text>
                </View>
              </View>

              <View style={styles.microBoxTables}>
              <View style={styles.rankTables4}><Text>4</Text></View>
              <Text style={styles.textTables}>Usina Lajeado</Text>
            </View>
              <View 
                style={styles.progressBarback}
              >
                <View 
                  style={styles.progressBarfront4}
                >
                  <Text style={styles.textBarTables}>
                    32 Pontos
                  </Text>
                </View>
              </View>

              <View style={styles.microBoxTables}>
              <View style={styles.rankTables4}><Text>5</Text></View>
              <Text style={styles.textTables}>Usina Tabajara</Text>
            </View>
              <View 
                style={styles.progressBarback}
              >
                <View 
                  style={styles.progressBarfront5}
                >
                  <Text style={styles.textBarTables}>
                  28 Pontos
                  </Text>
                </View>
              </View>
              </View>
              <View style={{alignSelf:'flex-end'}}>
              
                <TouchableOpacity
                  onPress={()=> navigation.navigate('tables')}
                >
                <Text style={styles.textDuvidMain}>
                 Ver mais
                </Text>
                </TouchableOpacity>
              </View>
              </View>
              <View>
              
                <TouchableOpacity
                  onPress={()=> navigation.navigate('duvidas')}
                >
                <Text style={styles.textDuvidMain}>
                  Alguma dúvida? Toque aqui.
                </Text>
                </TouchableOpacity>
              </View>
              
              </ScrollView>
        <Footer/>
      </View>
      
    )
  }

  // Footer ------------------------------------------------------------------------------

  function Footer(){

    const navigation = useNavigation()

    return(
        <View style={styles.boxFooter}>
            <View style={styles.separaFooter}>
                <TouchableOpacity
                  onPress={()=> navigation.navigate('Home')}
                >
                    <Image
                        style={styles.iconFooter}
                        source={require('my-app/assets/home.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={()=> navigation.navigate('cadastrar')}
                >
                    <Image
                        style={styles.iconFooter}
                        source={require('my-app/assets/mais.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={()=> navigation.navigate('select')}
                >
                    <Image
                        style={styles.iconRaio}
                        source={require('my-app/assets/raio.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={()=> navigation.navigate('tables')}
                >
                    <Image
                        style={styles.iconFooter}
                        source={require('my-app/assets/tables.png')}
                    />
                </TouchableOpacity>   
            </View>
        </View>
    )
  }
  
  // Form -----------------------------------------------------------------------------------

  function FormScreen(){

    const navigation = useNavigation()

      return(
      <View style={styles.boxForm}>
          <ScrollView>
          <View>
            <Text style={styles.titleForm}>
              Informe os Dados da Usina:
            </Text>
          </View>
            <Text style={styles.textForm}>Nome do Gestor:</Text>
            <TextInput
              style={styles.inputForm}
              //onChangeText={setNomeGestor}
              //value={nomeGestor}
              placeholder="Ex.: João da Silva"
            >
            </TextInput>

                <Text style={styles.textForm}>Nome da Usina:</Text>
                <TextInput
                    style={styles.inputForm}
                   // onChangeText={setNomeUsina}
                   // value={nomeUsina}
                    placeholder="Ex.: Usina Santa Clara"
                ></TextInput>

                <Text style={styles.textForm}>Endereço:</Text>
                <TextInput
                    style={styles.inputForm}
                   // onChangeText={setEndereço}
                   // value={endereço}
                    placeholder="Ex.: 85170-000, Pinhão - PR"
                ></TextInput>
                    <View style={styles.buttonForm}>
                    <Button
                     onPress={()=> navigation.navigate('areas')}
                        title='cadastrar'
                    />
                    </View>
                    
            </ScrollView>
            <Footer/>
        </View>
    )
  }

  // Areas  --------------------------------------------------------------------------------------

  function AreasScreen() {
    const navigation = useNavigation()
      return(
        <View style={{flex: 1}}>
              
            <View style={styles.TheBigBoxArea}>
                <View style={styles.boxAreaL}>    
                  <View style={styles.blocoArea1}>   
                    <TouchableOpacity
                    onPress={()=> navigation.navigate('quest')}
                    >
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
                    <TouchableOpacity
                    onPress={()=> navigation.navigate('quest')}
                    >
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
                    <TouchableOpacity
                    onPress={()=> navigation.navigate('quest')}
                    >
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
              <View style={styles.boxAreaD}>
                <View style={styles.blocoArea4}>
                  <TouchableOpacity
                  onPress={()=> navigation.navigate('quest')}
                  >
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
                  <TouchableOpacity
                  onPress={()=> navigation.navigate('quest')}
                  >
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
                  <TouchableOpacity
                  onPress={()=> navigation.navigate('quest')}
                  >
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
        <Footer/>
      </View>
      
    )
  }
  // select Usina ---------------------------------------------------------------------------------------

  function SelectUsina(){
    const [selectedLanguage, setSelectedLanguage] = useState()
    return(
      <View style={{flex:1}}>
        <View>
          <Text style={styles.selectTittle}>Selecione uma Usina:</Text>
          <Picker
           selectedValue={selectedLanguage}
           onValueChange={(itemValue, itemIndex) =>
             setSelectedLanguage(itemValue)
           }>
           <Picker.Item label="Usina Porto Estrela" value="Usina Porto Estrela" />
           <Picker.Item label="Usina Santa Clara" value="Usina Santa Clara" />
           <Picker.Item label="Usina Itapebi" value="Usina Itapebi" />
           <Picker.Item label="Usina Lajeado" value="Usina Lajeado" />
           <Picker.Item label="Usina Tabajara" value="Usina Tabajara" />
           <Picker.Item label="Usina Poços de Caudas" value="Usina Poços de Caudas" />
           <Picker.Item label="Usina Surubim" value="Usina Surubim" />
          </Picker>
          <View style={styles.buttonForm}>
          <Button
          
            title='Confirmar'
          />
          </View>
        </View>
        <Footer/>

      </View>
    )

  }
 
  let x = 1
  function QuestionsScreen(){
    
    return(
      <View style={styles.bigBoxQuestion}>
        <View style={styles.separaViewQuestion}>
          <Text style={styles.textTittleQuestion}>
            Questão {x} de 7
          </Text>
        </View >
        <View
          style={styles.progressBarback}
        ><View style={styles.progressBarfrontQ}>
          
        </View>
        </View>
        
          <View style={styles.boxQuestion}>
            <Text style={styles.textArea}>
              questoes do json
            </Text>
          </View>

          <View style={styles.cardBoxQuestion} >
            <View style={styles.checkQuestion}>
              
              <BouncyCheckbox
                size={45}
                fillColor="blue"
                unfillColor="#FFFFFF"
             
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
              
              />
              
                <Text style={styles.textQuestion}>Sim</Text>
            </View>
            <View style={styles.checkQuestion}>
              
              <BouncyCheckbox
                size={45}
                fillColor="blue"
                unfillColor="#FFFFFF"
          
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                
              />
              
              <Text style={styles.textQuestion}>Não</Text>
            </View>
            <View style={styles.checkQuestion}>
              
              <BouncyCheckbox
                size={45}
                fillColor="blue"
                unfillColor="#FFFFFF"
                
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                
              />
              
              <Text style={styles.textQuestion}>Não Sei</Text>
            </View>
          </View>
        <View  style={styles.buttonQuestion}>
        <Button
          onPress={()=>x +=1}
         
          title='proxima'
        />
        </View>
        
      </View>
    )
  }

  //Tables-----------------------------------
  function Tables(){
    const [selectedLanguage, setSelectedLanguage] = useState()
    return(
    <View style={{flex : 1}}>
      <ScrollView>
        <Text style={styles.textQuestion}>Selecione um Filtro:</Text>
        <View>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Geral"value={"Geral"}/>
           <Picker.Item label="Arquitetura Tecnológica" value={"Arquitetura Tecnológica"}/>
           <Picker.Item label="Inventário de Ativos"value={"Inventário de Ativos"}/>
           <Picker.Item label="Gestão de Vulnerabilidades"value={"Gestão de Vulnerabilidades"}/>
           <Picker.Item label="Gestão de Acessos"value={"Gestão de Acessos"}/>
           <Picker.Item label="Governança de Segurança da Informação"value={"Governança de Segurança da Informação"}/>
           <Picker.Item label="Monitoramento e Respostas a Incidentes"value={"Monitoramento e Respostas a Incidentes"}/>
           </Picker>
        </View>
       <Ranking/>
      </ScrollView>
      <Footer/>
    </View>
    )
  }
  function Ranking(){
    return(
      <View>
      <Text style={styles.textQuestion}>Portuação Geral</Text>

      <View style={styles.boxTables}>

          <View style={styles.miniBoxTables}>

            <View style={styles.microBoxTables}>
              <View style={styles.rankTables1}><Text>1</Text></View>
              <Text style={styles.textTables}>Usina Porto Estrela</Text>
            </View>
              <View 
                style={styles.progressBarback}
              >
                <View 
                  style={styles.progressBarfront1}
                >
                  <Text style={styles.textBarTables}>
                    53 Pontos
                  </Text>
                </View>
              </View>
              
              <View style={styles.microBoxTables}>
              <View style={styles.rankTables2}><Text>2</Text></View>
              <Text style={styles.textTables}>Usina Santa Clara</Text>
            </View>
              <View 
                style={styles.progressBarback}
              >
                <View 
                  style={styles.progressBarfront2}
                >
                  <Text style={styles.textBarTables}>
                    48 Pontos
                  </Text>
                </View>
              </View>

              <View style={styles.microBoxTables}>
              <View style={styles.rankTables3}><Text>3</Text></View>
              <Text style={styles.textTables}>Usina Itapebi</Text>
            </View>
              <View 
                style={styles.progressBarback}
              >
                <View 
                  style={styles.progressBarfront3}
                >
                  <Text style={styles.textBarTables}>
                    38 Pontos
                  </Text>
                </View>
              </View>

              <View style={styles.microBoxTables}>
              <View style={styles.rankTables4}><Text>4</Text></View>
              <Text style={styles.textTables}>Usina Lajeado</Text>
            </View>
              <View 
                style={styles.progressBarback}
              >
                <View 
                  style={styles.progressBarfront4}
                >
                  <Text style={styles.textBarTables}>
                    32 Pontos
                  </Text>
                </View>
              </View>

              <View style={styles.microBoxTables}>
              <View style={styles.rankTables4}><Text>5</Text></View>
              <Text style={styles.textTables}>Usina Tabajara</Text>
            </View>
              <View 
                style={styles.progressBarback}
              >
                <View 
                  style={styles.progressBarfront5}
                >
                  <Text style={styles.textBarTables}>
                  28 Pontos
                  </Text>
                </View>
              </View>


              <View style={styles.microBoxTables}>
              <View style={styles.rankTables4}><Text>6</Text></View>
              <Text style={styles.textTables}>Usina Poços de Caudas</Text>
            </View>
              <View 
                style={styles.progressBarback}
              >
                <View 
                  style={styles.progressBarfront6}
                >
                  <Text style={styles.textBarTables}>
                  26.6 Pontos
                  </Text>
                </View>
              </View>

              <View style={styles.microBoxTables}>
              <View style={styles.rankTables4}><Text>7</Text></View>
              <Text style={styles.textTables}>Usina Surubim</Text>
            </View>
              <View 
                style={styles.progressBarback}
              >
                <View 
                  style={styles.progressBarfront7}
                >
                  <Text style={styles.textBarTables}>
                    45 Pontos
                  </Text>
                </View>
              </View>
              
          </View>  
          

      </View>
      </View>
    )
  }
  //Duvidas ---------------------------------------------------------------------------------------
  function Duvid(){
    return(
      <View style={styles.boxDuvida}>
        <View>
          <Text style={styles.titleForm}>Informe sua dúvida:</Text>
        </View>
        <View>
          <Text>
            Nome:
          </Text>
         
            <TextInput 
            style={styles.inputDuvida}
            >
            </TextInput>
          
          <Text>
            Assunto:
          </Text>
          
            <TextInput style={styles.inputDuvida}></TextInput>
          
          <Text>
            Sua dúvida:
          </Text>
          <View 
          style={styles.inputDuvidaBig}
          >
            <TextInput ></TextInput>
          </View>
        </View>
      </View>
    )
  }
  // React Navegatio ------------------------------------------------------------------------------
  const Stack = createNativeStackNavigator()
 

  return( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{ title: 'SAFEWAY',
              headerTitleAlign:'center',
              headerTitleStyle:{fontWeight:'bold',fontSize:35 },
            headerStyle: {
              Image,
              backgroundColor: '#011C40',
              
            },
            
            headerTintColor: '#fff',
           
          }}
        />
        <Stack.Screen name="cadastrar" component={FormScreen}
          options={{ title: 'Cadastrar',
          headerStyle: {
            backgroundColor: '#011C40'
          },
          headerTintColor: '#fff' 
        }}
        />
        <Stack.Screen name="areas" component={AreasScreen}
          options={{ title: 'Areas da Segurança',
          headerStyle: {
            backgroundColor: '#011C40',
          },
          headerTintColor: '#fff' 
        }}
        />
        <Stack.Screen name="quest" component={QuestionsScreen}
          options={{ title: 'Questionario',
          headerStyle: {
            backgroundColor: '#011C40',
          },
          headerTintColor: '#fff' 
        }}
        />
        <Stack.Screen name="select"   component={SelectUsina}
          options={{ title: 'Usinas',
          headerStyle: {
            backgroundColor: '#011C40',
          },
          headerTintColor: '#fff' 
        }}
        />
        <Stack.Screen name="tables" component={Tables}
          options={{ title: 'Ranking',
          headerStyle: {
            backgroundColor: '#011C40'
          },
          headerTintColor: '#fff' 
        }}
        />
        <Stack.Screen name="duvidas" component={Duvid}
          options={{ title: 'Dúvidas?',
          headerStyle: {
            backgroundColor: '#011C40'
          },
          headerTintColor: '#fff' 
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
 )
}

