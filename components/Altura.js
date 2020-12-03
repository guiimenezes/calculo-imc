import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import Estilo from './Estilos'


export default props => {
  return (
    <View style={Estilo.bloco}>
      <Text>Informe a sua Altura:</Text>
      <TextInput
        style={Estilo.txt}
        autoFocus={false}
        keyboardType={'numeric'}
        // value={altura}
        onChangeText={text => props.aoModificar(text)}
      />
    </View>
  )
}