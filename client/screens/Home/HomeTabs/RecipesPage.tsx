import { useState } from "react";
import { View, Text, StyleSheet, ImageSourcePropType } from "react-native";
import { theme } from "../../../theme";
import DropDown from "../../../components/Recipes/DropDown";
import FoodList from "../../../components/Recipes/FoodList";

interface FoodItem {
    image_url: string;
    name: string;
    calories: number;
    cooking_time: number;
}
// dummy food list
const foods: FoodItem[] = [
    {
        name: "Grilled Salmon",
        image_url:
            "https://www.dinneratthezoo.com/wp-content/uploads/2019/05/grilled-salmon-final-2.jpg",
        calories: 350,
        cooking_time: 25,
    },
    {
        name: "Vegetable Stir-Fry",
        image_url:
            "https://natashaskitchen.com/wp-content/uploads/2020/08/Vegetable-Stir-Fry-2.jpg",
        calories: 250,
        cooking_time: 20,
    },
    {
        name: "Chicken Caesar Salad",
        image_url:
            "https://www.eatingbirdfood.com/wp-content/uploads/2023/06/grilled-chicken-caesar-salad-hero.jpg",
        calories: 400,
        cooking_time: 15,
    },
    {
        name: "Spaghetti Bolognese",
        image_url:
            "https://recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg",
        calories: 450,
        cooking_time: 30,
    },
    {
        name: "Vegan Chili",
        image_url:
            "https://cookieandkate.com/images/2015/11/best-vegetarian-chili-1-1.jpg",
        calories: 300,
        cooking_time: 40,
    },
];
const Recipes = () => {
    const [meal, setMeal] = useState("");

    return (
        <View style={styles.container}>
            {/* get the time of the day and suggest recipes according to that  */}
            {/* for example if its day suggesst morinng breakfast or morning snacks */}
            {/* but user will be able to change the food type */}
            <Text style={styles.headerTitle}>Recipes</Text>
            {/* drop down with all the times */}
            <DropDown setMeal={setMeal} />
            {/* List of suggested foods */}
            <FoodList meal={meal} foodList={foods} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.colors.backgroundColor,
        paddingTop: theme.paddingTop,
        paddingHorizontal: theme.paddingHorizontal,
    },
    headerTitle: {
        fontSize: theme.text.normal.fontSize,
        fontFamily: theme.fonts.primary,
    },
});
export default Recipes;
