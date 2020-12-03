import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Image
} from 'react-native';
import Estilo from './components/Estilos'
import Peso from './components/Peso'
import Altura from './components/Altura'
import BtnCalcular from './components/BtnCalcular'
import Resultado from './components/Resultado'
import Tabela from './components/Tabela'

export default function calculoIMC() {

  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

  const calcIMC = () => {
    if (peso === 0 || !peso) {
      alert('Informe o Peso')
      return
    }
    if (altura === 0 || !altura) {
      alert('Informe a altura')
      return
    }
    const resposta = peso / (Math.pow(altura, 2))
    setResultado(resposta.toFixed(2))
  }

  return (
    <SafeAreaView style={Estilo.corpo}>

      <View style={Estilo.bloco}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#069' }}>Calculadora de IMC</Text>
      </View>

      <Peso aoModificar={setPeso} />
      <Altura aoModificar={setAltura} />
      <BtnCalcular aoClicar={calcIMC} />
      <Resultado resultado={resultado} />

      <Tabela />




    </SafeAreaView>
  )
}



