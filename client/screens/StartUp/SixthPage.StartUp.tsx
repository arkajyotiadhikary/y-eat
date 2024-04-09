import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../types";
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
      const navigation = useNavigation<RootStackNavigationProp>();
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
                                                      <Text style={styles.listItemText}>
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
            paddingTop: 50,
            backgroundColor: "#f9f9f9",
            paddingHorizontal: 20,
            paddingVertical: 40,
      },
      title: {
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 20,
            width: 300,
            textAlign: "center",
            fontFamily: "LatoBold",
      },
      card: {
            backgroundColor: "white",
            borderRadius: 8,
            margin: 20,
            padding: 15,
            elevation: 2,
      },
      cardTitle: {
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 10,
            fontFamily: "LatoBold",
      },
      list: {
            flexDirection: "row",
            flexWrap: "wrap",
      },
      listItem: {
            width: "100%",
            height: 25,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
      },
      listItemText: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "LatoBold",
      },
      selectedListItem: {
            backgroundColor: "#4CAF50",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
      },
      submitButton: {
            width: 300,
            height: 50,
            backgroundColor: "#4CAF50",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            elevation: 5,
      },
      submitText: {
            fontSize: 16,
            fontWeight: "bold",
            color: "white",
            fontFamily: "LatoBold",
      },
});

export default SixthPage;
