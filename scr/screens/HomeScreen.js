import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,Image, Dimensions} from "react-native"

const windowWhidth = Dimensions.get('window').width;

export default function HomeScreen ({navigation}) {
    return (
        <View style={styles.container}>
         <Image style={styles.image} source={require("../../assets/casual_dog.png") }/>   
         <Text style={styles.saudacao}> Ótimo Dia !</Text>
         <Text> Como deseja acessar?  </Text>

         <TouchableOpacity style={styles.button1}>

         <Image  style={styles.icongoogle} source={require("../../assets/Google.png")}/> 

        <Text style={styles.textbutton}>Como deseja acessar ?</Text>  
        
         </TouchableOpacity>

         
         <TouchableOpacity style={styles.button2}>

         <Text> Outras opções </Text> 
        
         </TouchableOpacity>
                
           
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    },

    image:{
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 400,
    height: 320,
    marginBottom: 40,

    },

    saudacao:{

     fontSize:36,
     marginBottom:10, 
       
    },
    button1:{

        backgroundColor:"#43d384",
        width:380,
        height:60,
        borderRadius:4,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 75,
        padding: 10,
        marginBottom: 10,
        marginTop:40,
          
       },

       icongoogle:{

        width:40,
        height:40,
        backgroundColor:"#FFFF",
      
       },

       textbutton:{

        fontSize:14,
        color:"#FFFF",
 
       },

       saudacao:{

        fontSize:36, 
          
       },
       button2:{

        fontSize:14,
        borderColor:"#43d384",
        borderWidth:1,
        width:380,
        height:60,
        justifyContent: 'center',
        alignItems:'center', 
        borderRadius:4,

 
       },



})