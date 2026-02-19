import { StyleSheet } from 'react-native';

const estilosCaju = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D63023',
   
  },
  header: {
    marginHorizontal: 30,
    marginTop: 100,
    marginBottom: 24,
    backgroundColor: '#af181d',
    borderRadius: 20,
    padding: 20,
    overflow: 'hidden',
  },
  headerLinhaSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
  },
  extrato: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
  },
  saldoPequenoCardBeneficio: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 4,
  },
  headerLinhaSaldo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saldoGrandeCardBeneficio: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  badgeEmUso: {
    backgroundColor: '#FFDE9E',
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 12,  
  },
  badgeEmUsoTexto: {
    fontSize: 14,
    color: '#AF181D',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  detalhes: {
    fontWeight: 'bold',
    color: '#C21B40',
    fontSize: 22,
  },
  categoriasLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 0,
  },
  categoriaCard: {
    backgroundColor: '#f1eaeb',
    borderRadius: 16,
    padding: 15,
    height: 140,
    width: 160,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  categoriaIcone: {
    fontSize: 20,
    marginBottom: 40,
    textAlign: 'left',
  },
  categoriaTexto: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
    textAlign: 'left',
    fontWeight: '500',
  },
  categoriaValor: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },
  linhaSaldoFixo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1,
  },
  colunaEsquerda: {
  },
  saldoPequeno: {
    fontSize: 20,
    color: '#111010',
    marginBottom: 4,
  },
  saldoGrandeCard: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#090909',
    marginBottom: 4,
  },
  colunaDireita: {
    alignItems: 'flex-end',
  },
  fixoTexto: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  flexivelTexto: {
    fontSize: 14,
    color: '#333',
  },
  botaoEnvio: {
    backgroundColor: '#f8f8f8',
    padding: 14,
    borderRadius: 15,
    borderColor: '#e0e0e0',
    marginTop: 18,
  },
  textoBotao: {
    color: '#0c0c0c',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardSaldo: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 0,
    marginTop: 0,

  },
  tituloComBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeNovo: {
    backgroundColor: '#FFDE9E',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: 8,
  },
  badgeTexto: {
        fontWeight: 'bold',
    color: '#AF181D',
    fontSize: 17,
  },
    containerBotoesFlutuantes: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  cardBotoes: {
    backgroundColor: '#f3f3f3',
    borderRadius: 25,
    padding:15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    elevation: 8,
  },
  botaoFlutuante: {
      marginHorizontal: 5,
    backgroundColor: '#e4073a',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    minWidth: 15,
    alignItems: 'center',
  },
  textoBotaoFlutuante: {
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    color: '#ffffff',
    fontSize: 16,

  },
    botaoFlutuante2: {
    marginHorizontal: 5,
    backgroundColor: '#f3f3f3',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    minWidth: 15,
    alignItems: 'center',
  },
  textoBotaoFlutuante2: {
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    color: '#0a0a0a',
    fontSize: 16,

  },
});

export default estilosCaju;