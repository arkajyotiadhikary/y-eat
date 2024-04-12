import { StyleSheet, View } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { Lato_700Bold, Lato_400Regular } from "@expo-google-fonts/lato";
import Router from "./routes/Router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./store";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
    const [fontsLoaded] = useFonts({
        MontserratRegular: Montserrat_400Regular,
        LatoBold: Lato_700Bold,
        LatoRegular: Lato_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <GestureHandlerRootView style={styles.container}>
            <Provider store={store}>
                <Router />
            </Provider>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
