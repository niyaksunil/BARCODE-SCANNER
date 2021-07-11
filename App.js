import * as React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ScanScreen from "./screens/ScanScreen";

export default class App extends React.Component {
  render(){
    return (
      <SafeAreaProvider>
         <View style={styles.container}>
         <Header 
            backgroundColor = {"brown"}
            centerComponent = {{
            text:"Barcode Scanner",
            style :{color:"white",fontSize:20},
          }}/>
           <Image 
            style = {styles.imageIcon}
            source={{
              uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Barcode-scanner.jpg/220px-Barcode-scanner.jpg",
            }}
          />
          <ScanScreen />
        </View>
      </SafeAreaProvider>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageIcon:{
    width : 150,
    height:150,
    alignSelf:"center",
    marginTop : 40
  },
});
