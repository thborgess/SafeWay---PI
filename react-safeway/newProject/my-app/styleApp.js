import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    // header react navigation------------------------------------------------------------

    boxNavi:{
        backgroundColor:'#011C40',
        headerTintColor:'#fff'

    },
    // main---------------------------------------------------------------------------------

    boxMain: {
        backgroundColor: '#ffffff',
        width:'100%',
        height:'100%',
        alignItems:'center',
        flexDirection:'column'
    
    },
    
    boxcard:{
        width:'100%',
        flexDirection:'row',
        padding:10,
        justifyContent: 'center',
        borderColor:'#D3D3D3',
        marginBottom:10,
        elevation:3.33,
    },
    imgCard:{
        height:45,
        width:45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    textTitleCard:{
        fontStyle: 'normal',
        fontWeight:'600',
        fontSize: 26,
        lineHeight: 32,
        color: '#0153FC',
        
        },
        boxTextCard:{
            alignItems: 'flex-start',
            justifyContent: 'center',
            width:'70%',
            marginLeft:10,
            
        },
        imgbackCard1:{
            backgroundColor:'#ADC8FF',
            alignItems: 'center',
        justifyContent: 'center',
            height:86,
        width:86,
            borderRadius:50
        },
        imgbackCard2:{
            backgroundColor:'#B5B8FD',
            alignItems: 'center',
        justifyContent: 'center',
            height:86,
        width:86,
            borderRadius:50,
            
        },
    // Duvida----------------------------------------------------------------------------------
    boxDuvida:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    textDuvidMain:{
        margin: 'auto',
        marginBottom: 100,
        fontstyle: 'normal',
        fontweight: 600,
        fontSize: 20,
        lineHeight: 24,
        textDecorationLine: 'underline',
        alignSelf:'center',
        color: '#011C40'
    },
    inputDuvida:{
        backgroundColor:'#fff',
        width: 340,
    height: 55,
    
    borderRadius: 10,
    fontSize: 24,
    
    },
    inputDuvidaBig:{
        backgroundColor:'#fff',
        width:340,
        height:170,
        
        borderRadius: 10,
        fontSize: 24,
        },
   
    //footer---------------------------------------------------------------------------
    boxFooter: {
        display:'flex',
        position:'absolute', 
        left: 0, 
        right: 0, 
        bottom: 0,
        height:58,
        width: '100%',
        backgroundColor: '#011C40',
        justifyContent: 'center',
        alignItems:'center' 
    },
    separaFooter:{
        display:'flex',
        flexDirection:'row',
        
    },
    iconRaio:{
        display:'flex',
        height:35,
        width:22.63,
        margin:33
    },
    iconFooter:{
        display:'flex',
        height: 35,
        width:35,
        margin:33,
    },
    //form---------------------------------------------------------------------------------
    boxForm:{
        width:'100%',
        height:'100%'
    },
    inputForm:{
        backgroundColor:'#fff',
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
        paddingBottom:75
        
    },
    buttonForm:{
        
        height: 65,
        fontStyle: 'normal',
        fontSize: 24,
        alignItems:'center',
        justifyContent:'center'
       
    },
    //select---------------------------------------------------

    selectTittle:{
        fontSize:25,
        fontStyle:'bold',
        
    },
    
    //Areas----------------------------------------------------------------------------
    TheBigBoxArea:{
        display:'flex',
        flexDirection:'row',
        height:'100%',
        width:'100%'
    },

    boxAreaL: {
        display:'flex',
        backgroundColor: '#ffffff',
        width:'50%',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center'
    },
    boxAreaD: {
        display:'flex',
        backgroundColor: '#ffffff',
        width:'50%',
        justifyContent:'center',
        flexDirection:'column',
        alignItems: 'center',
       
    },
    blocoArea1:{
        display:'flex',
        backgroundColor: '#2AB888',
        height: 160,
        width:160,
        borderRadius:10,
        margin:15
    },
    blocoArea2:{
        display:'flex',
        backgroundColor: '#2C5BA8',
        height: 160,
        width:160,
        borderRadius:10,
        margin:15
    },
    blocoArea3:{
        display:'flex',
        backgroundColor: '#A457BF',
        height: 160,
        width:160,
        borderRadius:10,
        margin:15
    },
    blocoArea4:{
        display:'flex',
        backgroundColor: '#F5953B',
        height: 160,
        width:160,
        borderRadius:10,
        margin:15
    },
    blocoArea5:{
        display:'flex',
        backgroundColor: '#2393D9',
        height: 160,
        width:160,
        borderRadius:10,
        margin:15
    },
    blocoArea6:{
        display:'flex',
        backgroundColor: '#E66267',
        height: 160,
        width:160,
        borderRadius:10,
        margin:15
    },
    iconArea1:{
        marginTop:10,
        marginBottom: 10,
        height: 60,
        width:60,
        alignSelf:'center'
    },
    iconArea2:{
        marginTop:10,
        marginBottom: 10,
        height: 60,
        width:60,
        alignSelf:'center'
    },
    iconArea3:{
        marginTop:10,
        marginBottom: 10,
        height: 60,
        width:60,
        alignSelf:'center'
    },
    iconArea4:{
        marginTop:10,
        marginBottom: 10,
        height: 60,
        width:46.64,
        alignSelf:'center'
    },
    iconArea5:{
        marginTop:10,
        marginBottom: 10,
        height: 60,
        width:60,
        alignSelf:'center'
    },
    iconArea6:{
        marginTop:10,
        marginBottom: 10,
        height: 50,
        width:92.5,
        alignSelf:'center'
    },
    textArea:{
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 17,
    },

    //questionario style ---------------------------------------------------------------------
    bigBoxQuestion:{
        height:'100%',
        justifyContent:'center',
        flexDirection:'column',
        backgroundColor:'D3D3D3',
        alignItems:'baseline'
    },
    separaViewQuestion:{
        margin:20
    },
    textTittleQuestion:{
        fontSize:34
    },
    textQuestion:{
        fontSize:20,
        fontStyle:'bold'
    },
    

    boxQuestion:{
        marginTop:20,
        height: 200,
        width: '100%',
        backgroundColor: '#2AB888',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'
    },
    cardBoxQuestion:{
        alignItems:'stretch',
        marginTop:33,
        marginBottom:33,
        flexDirection:'row'
    },
    checkQuestion:{
        marginLeft: 15,
        marginTop: 15,
        display: 'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    
    },
   
    buttonQuestion:{
        width: 130,
        height: 40,
        fontSize: 22,
        alignSelf:'flex-end'
    
    },
    // bars -------------------------------------------------------------
    
    progressBarfrontQ:{
        backgroundColor:'#202022',
        alignSelf:'flex-start',
        flexDirection:'row-reverse',
        alignItems:'flex-end',
        width:'13%',
        height:20,
        borderRadius:5
    },
    progressBarfront1:{
        backgroundColor:'#327B8B',
        alignSelf:'flex-start',
        flexDirection:'row-reverse',
        alignItems:'flex-end',
        width:'88.3%',
        height:20,
        borderRadius:5
    },
    progressBarfront2:{
        backgroundColor:'#5BBBD0',
        alignSelf:'flex-start',
        flexDirection:'row-reverse',
        alignItems:'flex-end',
        width:'80%',
        height:20,
        borderRadius:5
    },
    progressBarfront3:{
        backgroundColor:'#7BC0EC',
        alignSelf:'flex-start',
        flexDirection:'row-reverse',
        alignItems:'flex-end',
        width:'75%',
        height:20,
        borderRadius:5
    },
    progressBarfront4:{
        backgroundColor:'#9bcae7e5',
        alignSelf:'flex-start',
        flexDirection:'row-reverse',
        alignItems:'flex-end',
        width:'63.3%',
        height:20,
        borderRadius:5
    },
    
    progressBarfront5:{
        backgroundColor:'#9BDAD4',
        alignSelf:'flex-start',
        flexDirection:'row-reverse',
        alignItems:'flex-end',
        width:'53.3%',
        height:20,
        borderRadius:5
    },
    progressBarfront6:{
        backgroundColor:'#9BDAD4',
        alignSelf:'flex-start',
        flexDirection:'row-reverse',
        alignItems:'flex-end',
        width:'46.6%',
        height:20,
        borderRadius:5
    },
    progressBarfront7:{
        backgroundColor:'#9BDAD4',
        alignSelf:'flex-start',
        flexDirection:'row-reverse',
        alignItems:'flex-end',
        width:'42%',
        height:20,
        borderRadius:5
    },
    progressBarback:{
        alignSelf:'flex-start',
        backgroundColor:'#D3D3D3',
        alignSelf:'center',
        width:'90%',
        height:20,
        borderRadius:5
        
    },
    textBarTables:{
        justifyContent:'center',
        alignSelf:'center'
        
    },  
    // Table ----------------------------------------------------------------------------------
    boxTables:{
        height:'100%',
        marginBottom:100,
        
    },
    miniBoxTables:{
        marginTop: 15,
        marginLeft: 15,
        paddingTop:15,
        paddingBottom:15,
        alignItems:'flex-start',
        alignSelf:'flex-start',
        borderColor:'D3D3DE3',
        borderBottomWidth:0.1,
        elevation:3.33,
        width:'90%'

    },
    microBoxTables:{
        flexDirection:'row',
        margin:10,
       
    },
    textTables:{
        marginLeft:10
    },
    
    rankTables1:{
        height:22,
        width:22,
        borderRadius:50,
        backgroundColor:'#FFB03B',
        alignItems:'center'
    },
    rankTables2:{
        height:22,
        width:22,
        borderRadius:50,
        backgroundColor:'#D9D9D9',
        alignItems:'center'
    },
    rankTables3:{
        height:22,
        width:22,
        borderRadius:50,
        backgroundColor:'#BA7715',
        alignItems:'center'
    },
    rankTables4:{
        height:22,
        width:22,
        borderRadius:50,
        backgroundColor:'#ADC8FF',
        alignItems:'center'
    }
})

export default styles