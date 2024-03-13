import React,{useRef} from 'react';
import { SafeAreaView, StyleSheet, useColorScheme,View,Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import  WebView  from 'react-native-webview';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const webViewRef = useRef(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.webViewContainer}>
        <WebView
          startInLoadingState={true}
          style = {{marginTop: 20, width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
          originWhitelist={['*']}
          ref={webViewRef}
          source={{ uri: 'http://zumba.ramo.co.in' }} // Replace with the initial URL of your website
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webViewContainer: {
    flex: 1,
  },
  webview: {
    flex: 1,
    marginTop: -135, // Adjust marginTop to cut pixels from top
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#5a5966',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
  },
  bottomBarItem: {
    fontSize: 12,
    color: '#FFFDFD',
    marginTop: 3,
    textAlign: 'center',
  },
});

export default App;
