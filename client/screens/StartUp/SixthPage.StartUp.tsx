import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigationProp } from "../../types";
import { theme } from "../../theme";
import { Ionicons } from "@expo/vector-icons";
// Define interface for FoodList
interface FoodList {
    [key: string]: string[];
}

// Define foodList data
const foodList: FoodList = {
    Protein: [
        "🍗 Chicken",
        "🦃 Turkey",
        "🐟 Salmon",
        "🥩 Ham",
        "🥚 Eggs",
        "🥔 Legumes",
        "🥜 Tofu",
        "🧀 Cottage cheese",
        "🏋️‍♂️ Protein powder",
    ],
    Carbs: [
        "🍚 Rice",
        "🍞 Bread",
        "🥐 Baguette",
        "🍞 Toast",
        "🥕 Carrots",
        "🥔 Potatoes",
        "🥔 Sweet potatoes",
        "🥕 Cauliflower",
        "🌽 Corn",
        "🥕 Avocado",
    ],
    Fat: [
        "🍞 Bacon",
        "🥓 Steak",
        "🥖 Pancetta",
        "🌮 Tacos",
        "🍗 BBQ ribs",
        "🥓 Sausages",
        "🥨 Croissants",
        "🍔 Cheeseburger",
        "🍟 French fries",
        "🍢 Sushi",
        "🥗 Fried chicken",
    ],
    Dairy: [
        "🧀 Milk",
        "🍦 Ice cream",
        "🥛 Cheese",
        "🧀 Yogurt",
        "🍝 Pizza",
        "🥛 Muffin",
        "🍰 Cake",
        "🥛 Ice cream sandwich",
    ],
    Fruits: [
        "🍓 Strawberries",
        "🍉 Grapes",
        "🍇 Grapefruit",
        "🍈 Watermelon",
        "🥭 Pineapple",
        "🍓 Blueberries",
        "🍓 Raspberries",
        "🍓 Blackberries",
        "🥝 Kiwi",
        "🍊 Orange",
    ],
};

const SixthPage = () => {
    const navigation = useNavigation<AppStackNavigationProp>();
    const [selectedFoods, setSelectedFoods] = useState<string[]>([]);
    const handleFoodSelect = (food: string) => {
        if (selectedFoods.includes(food)) {
            setSelectedFoods(selectedFoods.filter((f) => f !== food));
        } else {
            setSelectedFoods([...selectedFoods, food]);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back-outline" size={18} color="black" />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>
                Which ingredient do you normally have or wish to include?
            </Text>
            {/* FlatList to display food categories */}
            <FlatList
                data={Object.keys(foodList)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }: { item: keyof FoodList }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>{item}</Text>
                        {/* FlatList to display food items */}
                        <FlatList
                            style={styles.list}
                            data={foodList[item]}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.listItem,
                                        selectedFoods.includes(item) &&
                                            styles.selectedListItem,
                                    ]}
                                    onPress={() => handleFoodSelect(item)}
                                >
                                    <Text
                                        style={[
                                            styles.listItemText,
                                            selectedFoods.includes(item) &&
                                                styles.selectedListItemText,
                                        ]}
                                    >
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => navigation.navigate("SeventhPage")}
            >
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: theme.dimensions.height * 0.15,
        backgroundColor: theme.colors.backgroundColor,
        paddingHorizontal: theme.paddingHorizontal,
        paddingVertical: 40,
    },
    backBtn: {
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        top: 50,
        left: 20,
    },
    backText: {
        color: theme.colors.textColor,
        fontSize: theme.text.small.fontSize,
        fontFamily: theme.fonts.secondary,
        marginLeft: 5,
    },
    title: {
        fontSize: theme.text.normal.fontSize,
        marginBottom: 20,
        width: 300,
        textAlign: "center",
        fontFamily: theme.fonts.primary,
    },
    card: {
        backgroundColor: theme.colors.backgroundColor,
        borderRadius: 8,
        margin: 20,
        padding: 15,
        elevation: 2,
    },
    cardTitle: {
        fontSize: theme.text.small.fontSize,
        fontFamily: theme.fonts.secondary,
        marginBottom: 10,
    },
    list: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    listItem: {
        width: "100%",
        height: 30,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    listItemText: {
        fontSize: theme.text.small.fontSize,
        fontFamily: theme.fonts.secondary,
    },
    selectedListItem: {
        backgroundColor: theme.colors.accentColor,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    selectedListItemText: {
        color: theme.colors.buttonTextColor,
    },
    submitButton: {
        width: 300,
        height: 50,
        backgroundColor: theme.colors.accentColor,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        elevation: 5,
    },
    submitText: {
        fontSize: theme.text.small.fontSize,
        color: theme.colors.buttonTextColor,
        fontFamily: theme.fonts.primary,
    },
});

export default SixthPage;
