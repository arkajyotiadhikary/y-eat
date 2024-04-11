import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageSourcePropType,
} from "react-native";
import { theme } from "../../theme";

interface FoodItem {
    image: ImageSourcePropType;
    name: string;
    quantity: string;
}
interface AddFoodSectionProps {
    foodSectionTitle: string;
    foodList?: FoodItem[];
}
const AddFoodSection: React.FC<AddFoodSectionProps> = ({
    foodSectionTitle,
    foodList,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>{foodSectionTitle}</Text>
            <View style={styles.itemTotalMacros}>
                <Text>0 kcal</Text>
                <Text>P: 0g</Text>
                <Text>C: 0g</Text>
                <Text>F: 0g</Text>
            </View>
            {/* list of added foods */}
            <View style={styles.foodList}>
                {/* food item */}
                {foodList &&
                    foodList.map((food, index) => (
                        <View key={index} style={styles.foodItem}>
                            {/* image of the food */}
                            <View style={styles.foodImageContainer}>
                                <Image
                                    source={food?.image}
                                    style={styles.foodImage}
                                />
                                {/* name of the food */}
                                <Text style={styles.foodName}>
                                    {food?.name}
                                </Text>
                            </View>
                            {/* quantity */}
                            <Text style={styles.foodQuantity}>
                                {food?.quantity}
                            </Text>
                        </View>
                    ))}
            </View>
            <View style={styles.btnContainer}>
                {/* add button */}
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Log Food</Text>
                </TouchableOpacity>
                {/* build meal */}
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Build Meal</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: theme.dimensions.width,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    headerTitle: {
        alignSelf: "flex-start",
        fontSize: theme.text.normal.fontSize,
        fontFamily: theme.fonts.primary,
    },
    itemTotalMacros: {
        width: theme.dimensions.width,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        paddingHorizontal: 20,
    },

    foodList: {
        width: theme.dimensions.width,
        marginTop: 20,
    },
    foodItem: {
        width: theme.dimensions.width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    foodImageContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    foodImage: {
        width: 50,
        height: 50,
    },
    foodName: {
        fontSize: theme.text.small.fontSize,
        fontFamily: theme.fonts.secondary,
        marginLeft: 10,
    },
    foodQuantity: {
        fontSize: theme.text.small.fontSize,
        fontFamily: theme.fonts.primary,
    },
    btnContainer: {
        width: theme.dimensions.width,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    btn: {
        backgroundColor: theme.colors.accentColor,
        padding: 10,
        borderRadius: 5,
        margin: 5,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    btnText: {
        color: theme.colors.buttonTextColor,
        fontFamily: theme.fonts.primary,
    },
});

export default AddFoodSection;
