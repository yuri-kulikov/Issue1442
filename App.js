import React, { Component } from 'react';
import CodePush from "react-native-code-push";
import { Text, View } from 'react-native';

class App extends Component {
  codePushDownloadDidProgress(progress) {
    this.setState({ progress });
  }

  componentDidMount() {
    CodePush.sync({
      updateDialog: true,
      installMode: CodePush.InstallMode.IMMEDIATE
    })
      .then(update => console.warn('update', update))
      .catch(err => console.warn('update error', err));
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 50 }}>
        <Text style={{ width: '100%', textAlign: 'center' }} >
          Built in bundle!
        </Text>
      </View>
    );
  }
}

const codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
export default App = CodePush(codePushOptions)(App);
