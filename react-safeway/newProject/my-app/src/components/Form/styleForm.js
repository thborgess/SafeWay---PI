import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxForm:{
        display: 'flex',
        justifyContent: 'center',
        height:'80%'
    },
    inputForm:{
        backgroundColor:'#F0F8FF',
        width: 340,
    height: 55,
    alignSelf: 'center',
    borderRadius: 10,
    fontSize: 24,
    paddingLeft: 20
    },
    textForm:{
        fontStyle: 'normal',
        left:40,
        fontSize: 24,
        lineHeight: 32,
        color: '#202022'
    },
    titleForm:{
        fontWeight: 'bold',
        fontSize:25,
        textAlign:'center',
        paddingBottom:100
        
    },
    buttonForm:{
        marginTop: 40,
        width: 400,
        height: 65,
        fontStyle: 'normal',
        fontSize: 24,
        alignItems:'center',
       
    }
    
    
})

export default styles