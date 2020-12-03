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
      <Text>Informe o seu Peso:</Text>
      <TextInput
        style={Estilo.txt}
        autoFocus={true}
        keyboardType={'numeric'}
        // value={peso}
        onChangeText={text => props.aoModificar(text)}
      />
    </View>
  )
}