
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

interface Module {
    code: string;
    state: 'ativo' | 'inativo' | 'aguardando_aprovacao';
}

interface Props {
    modules: Module[];
    onActivate: (code: string) => void;
    onDeactivate: (code: string) => void;
}

export default function ModuleControlScreen({ modules, onActivate, onDeactivate }: Props) {
  return (
    <FlatList
      data={modules}
      keyExtractor={item => item.code}
      renderItem={({ item }) => (
        <View style={[styles.moduleItem, { backgroundColor: item.state === 'ativo' ? '#28a745' : '#6c757d' }]}>
          <Text style={styles.moduleCode}>{item.code}</Text>
          <Text style={styles.moduleState}>Status: {item.state}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Ativar" onPress={() => onActivate(item.code)} color="#198754" />
            <Button title="Desativar" onPress={() => onDeactivate(item.code)} color="#dc3545" />
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
    moduleItem: {
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
    },
    moduleCode: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    moduleState: {
        fontSize: 14,
        color: '#eee',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});
