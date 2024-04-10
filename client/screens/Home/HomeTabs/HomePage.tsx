import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../../../theme";
import Header from "../../../components/HomePage/Header";
import Data from "../../../components/HomePage/Data";
import FoodCatalog from "../../../components/HomePage/FoodCatalog";

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Data />
            {/* Food catalog */}
            <FoodCatalog />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.backgroundColor,
        paddingTop: 40,
    },
});

export default HomePage;
