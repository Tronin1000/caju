import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import TelaCaju from './src/screens/TelaCaju';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <TelaCaju />
      </SafeAreaView>
    </>
  );
}