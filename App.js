import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import TelaCaju from './src/screens/TelaCaju';
import TelaExtrato from './src/screens/TelaExtrato';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('Caju');

  const navegarPara = (tela) => {
    setTelaAtual(tela);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        {telaAtual === 'Caju' && (
          <TelaCaju navegarPara={navegarPara} />
        )}
        {telaAtual === 'Extrato' && (
          <TelaExtrato navegarPara={navegarPara} />
        )}
      </SafeAreaView>
    </>
  );
}