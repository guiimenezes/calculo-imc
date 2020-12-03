import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Estilo from './Estilos'


export default props => {
  return (
    <View style={Estilo.bloco}>
      <Text>Resultado: {props.resultado}</Text>
    </View>
  )
}