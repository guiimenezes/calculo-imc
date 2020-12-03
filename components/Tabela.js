import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import Estilo from './Estilos'


export default function Tabela() {
  return (
    <View>
      <Image
        source={require('../assets/images/tabImc.png')}
        style={Estilo.tabelaImc}
      />
    </View>
  )
}