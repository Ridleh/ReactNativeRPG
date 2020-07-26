if (!__DEV__) {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
}

import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import "react-native-gesture-handler";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import * as NavigationIndex from "./Navigation/NavigationIndex";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Provider } from "react-redux";
import store, { LoadState } from "./Redux/Store";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import styles from "./StyleSheet/Styles";
// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();
export default function App(props: any) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
        <Provider store={store}>
            <NavigationIndex.Navigation />
        </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      //require('./assets/images/robot-dev.png'),
      //require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      //...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      //'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
  LoadState().then((persistedState) => {
    //save myself an import and use dispatch directly
    if (persistedState !== undefined) {
      store.dispatch({
        type: "updateStateFromLocalStorage",
        state: persistedState,
      });
      //console.log("Successfully loaded state");
    }
  });
}

function handleLoadingError(error: any) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(
  setLoadingComplete: React.Dispatch<React.SetStateAction<boolean>>
) {
  setLoadingComplete(true);
}
