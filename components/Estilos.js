import { StyleSheet, } from 'react-native';

const estilos = StyleSheet.create({
  corpo: {
    padding: 10
  },
  bloco: {
    marginBottom: 20
  },
  txt: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10
  },
  btnCalc: {
    backgroundColor: '#048',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20
  },
  txtBtn: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff'
  },
  tabelaImc: {
    width: '100%',
    resizeMode: 'contain',
    marginTop: 0
  }
});

export default estilos