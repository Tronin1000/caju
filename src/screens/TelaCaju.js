import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import estilos from '../styles/estilosCaju';

export default function TelaCaju() {
  return (
    <ScrollView style={estilos.container}>

      <View style={estilos.header}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Text style={estilos.headerText}>Benefícios</Text>
          <Text style={estilos.extrato}>Extrato {'>'} </Text>
        </View>
        
        <Text style={estilos.saldoPequenoCardBeneficio}>Saldo disponível</Text>
        

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={estilos.saldoGrandeCardBeneficio}>R$ 12,19</Text>
          <View style={estilos.badgeEmUso}>
            <Text style={estilos.badgeEmUsoTexto}>Em uso</Text>
          </View>
        </View>
      </View>
      

      <View style={estilos.card}>
        <View style={estilos.cardHeader}>
          <Text style={estilos.cardTitle}>Benefícios</Text>
          <TouchableOpacity>
            <Text style={estilos.detalhes}>Detalhes {'>'} </Text>
          </TouchableOpacity>
        </View>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
          <View>
            <View style={estilos.categoriaCard}>
            <Text style={estilos.categoriaTexto}>Home office</Text>
            <Text style={estilos.categoriaValor}>R$ 0,00</Text>
            </View>
          </View>
          <View>
             <View style={estilos.categoriaCard}>
            <Text style={estilos.categoriaTexto}>Saúde</Text>
            <Text style={estilos.categoriaValor}>R$ 0,00</Text>
            </View>
          </View>
                    <View>
             <View style={estilos.categoriaCard}>
            <Text style={estilos.categoriaTexto}>Mobilidade</Text>
            <Text style={estilos.categoriaValor}>R$ 0,00</Text>
            </View>
          </View>
        </View>
        
        <View style={estilos.divider} />
        
        <Text style={estilos.saldoPequeno}>Saldo disponível</Text>
        <Text style={estilos.saldoGrandeCard}>R$ 12,19</Text>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
          <Text style={estilos.fixoTexto}>Fixo: <Text style={{ fontWeight: 'bold' }}>R$ 12,19</Text></Text>
          <Text style={estilos.flexivelTexto}>Flexível: <Text style={{ fontWeight: 'bold' }}>R$ 0,00</Text></Text>
        </View>
        
        <TouchableOpacity style={estilos.botaoEnvio}>
          <Text style={estilos.textoBotao}>
            Envio de saldo entre categorias
          </Text>
        </TouchableOpacity>
      </View>

      <View style={estilos.card}>
        <View style={estilos.cardHeader}>
          <View style={estilos.tituloComBadge}>
            <Text style={estilos.cardTitle}>Saldo Caju</Text>
            <View style={estilos.badgeNovo}>
              <Text style={estilos.badgeTexto}>Novo</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={estilos.detalhes}>Detalhes {'>'} </Text>
          </TouchableOpacity>
        </View>
        
        <Text style={estilos.saldoPequeno}>Saldo disponível</Text>
        <Text style={estilos.saldoGrandeCard}>R$ 0,39</Text>
      </View>

    </ScrollView>
  );
}