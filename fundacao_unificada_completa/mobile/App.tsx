
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ModuleControlScreen from './screens/ModuleControlScreen';

export default function App() {
  // Aqui você precisaria de uma lógica para buscar os módulos da API
  const mockModules = [
    { code: 'M0', state: 'ativo' },
    { code: 'M307', state: 'ativo' },
    { code: 'M100', state: 'inativo' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel de Controle Móvel</Text>
      <ModuleControlScreen 
        modules={mockModules} 
        onActivate={(code) => console.log(`Ativar ${code}`)}
        onDeactivate={(code) => console.log(`Desativar ${code}`)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 50,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  }
});
