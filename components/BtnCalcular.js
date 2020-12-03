import React from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Estilo from './Estilos'


export default props => {
  return (
    <View style={Estilo.bloco}>
      <TouchableHighlight
        style={Estilo.btnCalc}
        onPress={() => props.aoClicar()}
      >
        <Text style={Estilo.txtBtn}>Calcular IMC</Text>
      </TouchableHighlight>
    </View>
  )
}