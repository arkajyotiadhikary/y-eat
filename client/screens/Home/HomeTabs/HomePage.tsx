import { StyleSheet, View } from "react-native";
import { theme } from "../../../theme";
import Header from "../../../components/HomePage/Header";
import Data from "../../../components/HomePage/Data";
import FoodCatalog from "../../../components/HomePage/FoodCatalog";
import AnimatedBottomSheet from "../../../components/HomePage/AnimatedBottomSheet";
import SearchRecipe from "./SearchRecipePage";
import React from "react";
import { useBottomSheetContext } from "../../../contexts/BottomSheetContext";
const HomePage = () => {
    const { isOpen, setIsOpen } = useBottomSheetContext();

    return (
        <View style={styles.container}>
            <Header />
            <Data />
            {/* Food catalog */}
            <FoodCatalog />
            <AnimatedBottomSheet
                isOpen={isOpen}
                backdropOnPress={() => setIsOpen(false)}
                children={<SearchRecipe />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.backgroundColor,
        paddingTop: theme.paddingTop,
    },
});

export default HomePage;
