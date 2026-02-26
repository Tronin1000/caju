import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import estilos from '../styles/estilosExtrato';

export default function TelaExtrato({ navegarPara }) {
  return (
    <ScrollView style={estilos.container}>
   
      <View style={estilos.header}>
        <TouchableOpacity onPress={() => navegarPara('Caju')}>
          <Text style={estilos.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={estilos.headerTitle}>Extrato geral</Text>
      </View>

      <View style={estilos.botoesContainer}>
        <View style={estilos.inputBuscar}>
          <TextInput 
            placeholder="Buscar"
            placeholderTextColor="#999"
            style={estilos.textInput}
          />
        </View>
        <TouchableOpacity style={estilos.botaoFiltrar}>
          <Text style={estilos.textoBotao}>Filtrar</Text>
        </TouchableOpacity>
      </View>

      <View style={estilos.listaContainer}>
        
        {/* 19 NOV */}
        <View>
          <Text style={estilos.data}>19 NOV</Text>
          <View style={estilos.item}>
            <View style={estilos.itemLeft}>
              <Text style={estilos.descricao}>MP*KAIBEMPRACA Osasc...</Text>
              <Text style={estilos.horario}>17:31</Text>
            </View>
            <Text style={estilos.valor}>- R$ 24,00</Text>
          </View>
          <View style={estilos.separadorLinha} />
        </View>

        {/* 12 NOV */}
        <View>
          <Text style={estilos.data}>12 NOV</Text>
          <View style={estilos.item}>
            <View style={estilos.itemLeft}>
              <Text style={estilos.descricao}>DELMIX COMERCIO DE ALI...</Text>
              <Text style={estilos.horario}>18:20</Text>
            </View>
            <Text style={estilos.valor}>- R$ 11,24</Text>
          </View>
          <View style={estilos.separadorLinha} />
        </View>

        {/* 9 NOV */}
        <View>
          <Text style={estilos.data}>9 NOV</Text>
          <View style={estilos.item}>
            <View style={estilos.itemLeft}>
              <Text style={estilos.descricao}>ARMAZEM DO GRAO TERE...</Text>
              <Text style={estilos.horario}>16:34</Text>
            </View>
            <Text style={estilos.valor}>- R$ 80,98</Text>
          </View>
          <View style={estilos.separadorLinha} />
        </View>

        {/* 6 NOV */}
        <View>
          <Text style={estilos.data}>6 NOV</Text>
          <View style={estilos.item}>
            <View style={estilos.itemLeft}>
              <Text style={estilos.descricao}>TERE PAO VARZEA TERE...</Text>
              <Text style={estilos.horario}>22:24</Text>
            </View>
            <Text style={estilos.valor}>- R$ 170,90</Text>
          </View>
          <View style={estilos.separadorLinha} />
          
          <View style={estilos.item}>
            <View style={estilos.itemLeft}>
              <Text style={estilos.descricao}>DELMIX COMERCIO DE ALI...</Text>
              <Text style={estilos.horario}>19:14</Text>
            </View>
            <Text style={estilos.valor}>- R$ 17,49</Text>
          </View>
          <View style={estilos.separadorLinha} />
        </View>

      </View>
    </ScrollView>
  );
}