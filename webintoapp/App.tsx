import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.webViewContainer}>
        <WebView
          source={{ uri: 'http://zumba.pujanpaath.com/' }}
          style={styles.webView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webViewContainer: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default App;
