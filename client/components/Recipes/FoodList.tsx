import {
    View,
    Text,
    StyleSheet,
    ImageSourcePropType,
    Image,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { theme } from "../../theme";

interface FoodItem {
    image_url: string;
    name: string;
    calories: number;
    cooking_time: number;
}
interface FoodListProps {
    meal: string;
    foodList: FoodItem[];
}

const FoodList: React.FC<FoodListProps> = ({ meal, foodList }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>{meal} for you</Text>
            <View style={styles.listContainer}>
                <FlatList
                    data={foodList}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity key={index} style={styles.listItem}>
                            <Image
                                source={{ uri: item.image_url }}
                                style={styles.image}
                            />
                            <View style={styles.listItemDetailsContainer}>
                                <Text style={styles.listItemName}>
                                    {item.name}
                                </Text>
                                <Text style={styles.listItemDetails}>
                                    {item.calories} kcal / {item.cooking_time}{" "}
                                    min
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    headerTitle: {
        fontSize: theme.text.normal.fontSize,
        fontFamily: theme.fonts.primary,
        marginBottom: 20,
    },
    listContainer: {
        width: theme.dimensions.width,
        paddingHorizontal: theme.paddingHorizontal,
        marginVertical: 20,
    },
    listItem: {
        marginBottom: 20,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: theme.colors.neutralColor,
    },
    image: {
        width: theme.dimensions.width - 40,
        resizeMode: "cover",
        borderRadius: 8,
        height: theme.dimensions.height * 0.1,
    },
    listItemDetailsContainer: {
        padding: 10,
    },
    listItemName: {
        fontSize: theme.text.normal.fontSize,
        fontFamily: theme.fonts.primary,
        marginVertical: 5,
    },
    listItemDetails: {
        fontSize: theme.text.small.fontSize,
        fontFamily: theme.fonts.secondary,
    },
});

export default FoodList;
