import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
    <View style={styles.container}>
      <Text style={styles.myText}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myText: {
    fontSize: hp('5%'), 
    height: hp('70%'),
    width: wp('8%'), 
    backgroundColor:"red"
  }
});
