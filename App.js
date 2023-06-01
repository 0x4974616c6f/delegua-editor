import { AvaliadorSintatico, InterpretadorBase, Lexador } from '@designliquido/delegua';
import CodeEditor, {
  CodeEditorSyntaxStyles,
} from '@rivascva/react-native-code-editor';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
  },
});

export default function App() {
  const lexador = new Lexador();
  const avaliadorSintatico = new AvaliadorSintatico();
  // eslint-disable-next-line no-console
  const interpretador = new InterpretadorBase('', false, console.log, console.log);

  const simbolos = lexador.mapear(["escreva('Olá mundo')"], -1);
  const declaracoes = avaliadorSintatico.analisar(simbolos);
  const resultado = interpretador.interpretar(declaracoes);

  console.log(resultado);

  return (
    <View style={styles.container}>
      <CodeEditor
        style={{
          fontSize: 20,
          inputLineHeight: 26,
          highlighterLineHeight: 26,
        }}
        language="javascript"
        syntaxStyle={CodeEditorSyntaxStyles.dracula}
        showLineNumbers
      />
      <StatusBar style="auto" />
    </View>
  );
}
