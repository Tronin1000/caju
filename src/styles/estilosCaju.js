import { StyleSheet } from 'react-native';

const estilosCaju = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D63023',
  },
  
  header: {
    marginHorizontal: 25,
    marginTop: 80,
    marginBottom: 24,
    backgroundColor: '#af181d',
    borderRadius: 16,
    padding: 20,
    height: 200,
    overflow: 'hidden',
  },

  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
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
  
  saldoGrandeCardBeneficio: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  
  extrato: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
  },
  
  saldoPequenoCard: {
    fontSize: 14,
    color: '#111010',
    marginBottom: 4,
  },
  
  saldoGrandeCard: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#090909',
    marginBottom: 8,
  },
  
  saldoPequenoCardBeneficio: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 4,
  },
  
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  
  cardSaldo: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 0,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
  
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  
  detalhes: {
    fontWeight: 'bold',
    color: '#C21B40',
    fontSize: 14,
  },
  
  flexivel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
  
  botaoEnvio: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginTop: 16,
  },
  
  textoBotao: {
    color: '#0c0c0c',
    fontSize: 14,
    textAlign: 'center',
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
    color: '#AF181D',
    fontSize: 12,
    fontWeight: 'bold',
  },
  
  categoriaCard: {
    backgroundColor: '#f1eaeb',
    borderRadius: 16,
    padding: 20,
    height: 140,
    width: 140,
    marginHorizontal: 5,
  },
  
  categoriaTexto: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  
  categoriaValor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  
  fixoTexto: {
    fontSize: 14,
    color: '#333',
  },
  
  flexivelTexto: {
    fontSize: 14,
    color: '#333',
  },

});

export default estilosCaju;