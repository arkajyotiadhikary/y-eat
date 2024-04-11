import {
    View,
    Modal,
    Text,
    ImageSourcePropType,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { useState } from "react";
// Images
import welcomeImg from "../../assets/images/welcomeBack.png";
import caloriImg from "../../assets/images/proteins.png";
import fatImg from "../../assets/images/trans-fat.png";
import { theme } from "../../theme";
import { AntDesign } from "@expo/vector-icons";
import Pagination from "../../components/Carousel/Pagination";

import { useNavigation } from "@react-navigation/native";
import { AppStackNavigationProp } from "../../types";

interface Page {
    image: ImageSourcePropType;
    quote: string;
}

const pages: Page[] = [
    {
        image: welcomeImg,
        quote: "Welcome to Y-Eats! We're thrilled to have you join our community dedicated to fostering healthy eating habits and achieving your wellness goals. Whether you're looking to improve your overall health, lose weight, or simply adopt a more balanced lifestyle, you're in the right place.",
    },
    {
        image: caloriImg,

        quote: "Understanding your calorie intake is crucial for achieving and maintaining a healthy weight. Our app provides personalized recommendations based on your age, gender, weight, height, and activity level. By tracking your daily calorie intake, you'll gain insight into your eating habits and make informed choices to reach your health goals.",
    },
    {
        image: fatImg,
        quote: "Our app offers a holistic approach to fat loss, combining nutritious meal plans, exercise routines, and lifestyle modifications. With our carefully curated recipes and meal suggestions, you'll enjoy delicious and satisfying meals while staying within your calorie targets. Additionally, our fitness guides and tips will help you incorporate physical activity into your routine, accelerating your fat loss journey and improving your overall well-being.",
    },
];

const Welcome = () => {
    const navigation = useNavigation<AppStackNavigationProp>();

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => navigation.navigate("AppTabs")}
            >
                <AntDesign
                    name="closecircle"
                    size={24}
                    color={theme.colors.backgroundColor}
                />
            </TouchableOpacity>
            <FlatList
                data={pages}
                horizontal
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image style={styles.image} source={item.image} />
                        <Text style={styles.text}>{item.quote}</Text>
                    </View>
                )}
                onScroll={(event) => {
                    const { contentOffset, layoutMeasurement } =
                        event.nativeEvent;
                    const currentIndex = Math.round(
                        contentOffset.x / layoutMeasurement.width
                    );
                    setCurrentIndex(currentIndex);
                }}
            />
            <Pagination
                data={pages}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                optionalDotBackGroundColor={theme.colors.backgroundColor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 100,
        backgroundColor: theme.colors.secondary,
        alignItems: "center",
        justifyContent: "center",
    },
    closeBtn: {
        position: "absolute",
        top: 40,
        right: 20,
    },
    itemContainer: {
        width: theme.dimensions.width,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 50,
    },
    text: {
        fontSize: theme.text.normal.fontSize,
        color: theme.colors.buttonTextColor,
        textAlign: "center",
        fontFamily: theme.fonts.secondary,
        marginTop: 20,
    },
});

export default Welcome;
