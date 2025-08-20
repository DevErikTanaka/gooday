import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
 
export default function InputSenha() {
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
 
  return (
    <View style={styles.container}>
       <Text style={styles.acesso}> Acesse</Text>
       <Text> com E-mail e senha  </Text>

      <Text>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
        
       
      />
      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder ="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={!mostrarSenha}
      />
 
      <TouchableOpacity
        style={styles.icon}
        onPress={() => setMostrarSenha(!mostrarSenha)}
      >
        <Icon
          name={mostrarSenha ? 'visibility' : 'visibility-off'}
          size={24}
          color="#666"
        />
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    marginVertical: 10,
    marginLeft: 20,

    
    

  },

  acesso:{

    fontSize:36,
    marginBottom:10, 
    
      
   },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    
    paddingHorizontal: 40, // espaço para o ícone
    fontSize: 16,
    marginBottom:20,
    width:330,
    paddingLeft:20,
    
    
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
    marginRight: 10
  },
})