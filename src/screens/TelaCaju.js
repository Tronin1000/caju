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
        <View style={estilos.headerLinhaSuperior}>
          <Text style={estilos.headerText}>Benefícios</Text>
            <TouchableOpacity>
              <Text style={estilos.extrato}>Extrato {'>'} </Text>
             </TouchableOpacity>
        </View>
        
        <Text style={estilos.saldoPequenoCardBeneficio}>Saldo disponível</Text>
        
        <View style={estilos.headerLinhaSaldo}>
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

        <View style={estilos.categoriasLinha}>
          <View style={estilos.categoriaCard}>
            <Text style={estilos.categoriaIcone}>icone</Text>
            <Text style={estilos.categoriaTexto}>Home office</Text>
            <Text style={estilos.categoriaValor}>R$ 0,00</Text>
          </View>

          <View style={estilos.categoriaCard}>
            <Text style={estilos.categoriaIcone}>icone</Text>
            <Text style={estilos.categoriaTexto}>Saúde</Text>
            <Text style={estilos.categoriaValor}>R$ 0,00</Text>
          </View>

          <View style={estilos.categoriaCard}>
            <Text style={estilos.categoriaIcone}>icone</Text>
            <Text style={estilos.categoriaTexto}>Mobilidade</Text>
            <Text style={estilos.categoriaValor}>R$ 0,00</Text>
          </View>
        </View>

        <View style={estilos.linhaSaldoFixo}>
          <View style={estilos.colunaEsquerda}>
            <Text style={estilos.saldoPequeno}>Saldo disponível</Text>
            <Text style={estilos.saldoGrandeCard}>R$ 12,19</Text>
          </View>
          
          <View style={estilos.colunaDireita}>
            <Text style={estilos.fixoTexto}>
              Fixo: <Text style={{ fontWeight: 'bold' }}>R$ 12,19</Text>
            </Text>
            <Text style={estilos.flexivelTexto}>
              Flexível: <Text style={{ fontWeight: 'bold' }}>R$ 0,00</Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity style={estilos.botaoEnvio}>
          <Text style={estilos.textoBotao}>
            Envio de saldo entre categorias
          </Text>
        </TouchableOpacity>
      </View>

      <View style={estilos.cardSaldo}>
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