/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import CodePush from 'react-native-code-push';
// import type {Node} from 'react';
import {Text} from 'react-native';

// const Code_Push_Options = {
//   checkFrequency: CodePush.CheckFrequency.ON_APP_START,
// };
const App = () => {
  useEffect(() => {
    CodePush.sync({
      installMode: CodePush.InstallMode.IMMEDIATE,
    });
  });
  return <Text>Hey hey hey heyebjbdj sdcsdsdsd saksasa bssdjsdjs</Text>;
};
let Code_Push_Options = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  installMode: CodePush.InstallMode.IMMEDIATE,
};

export default CodePush(Code_Push_Options)(App);

// Production │ 5TilyNTxu4GzbeTdalHiPYVhAdfBCU-W7yDhR │
// ├────────────┼───────────────────────────────────────┤
// │ Staging    │ M662seaAYqXruZkG2wnQcGvEaP7HpZ9MhUCrp │
