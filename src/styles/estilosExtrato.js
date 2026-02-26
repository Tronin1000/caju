import { StyleSheet } from 'react-native';

const estilosExtrato = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
header: {
  paddingHorizontal: 20,
  paddingTop: 60,
  paddingBottom: 10,
  backgroundColor: '#fff',
},
backButton: {
  fontSize: 32,
  color: '#ff0000',
  fontWeight: '400',
  marginBottom: 20,
},
headerTitle: {
marginBottom: 10,
  fontSize: 24,
  fontWeight: 'bold',
  color: '#333',
},
  botoesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 60,
    gap: 10,
  },
  inputBuscar: {
    borderWidth: 2,
    borderColor: '#000000', 
    flex: 0.7,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    height: 45,
    justifyContent: 'center',
  },
  textInput: {
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#ffffff',
  },
  botaoFiltrar: {
    borderWidth: 2,
    borderColor: '#D63023', 
    flex: 0.3,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fd0000',
    fontSize: 16,
    fontWeight: '500',
  },
  listaContainer: {
    paddingHorizontal: 20,
  },
  data: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
  },
  itemLeft: {
    flex: 1,
  },
  descricao: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    marginBottom: 2,
  },
  horario: {
    fontSize: 12,
    color: '#999',
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 10,
  },
  separadorLinha: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
});

export default estilosExtrato;