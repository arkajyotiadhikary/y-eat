import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AppStackNavigationProp } from "../../types";
import { theme } from "../../theme";
import { Ionicons } from "@expo/vector-icons";
const FifthPage = () => {
    const navigation = useNavigation<AppStackNavigationProp>();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back-outline" size={18} color="black" />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Do you do strength training?</Text>
            <Text style={styles.text}>
                Strength training helps build muscle and reduce risk of injury
                (like in athletics). Improves overall fitness by challenging
                muscles.
            </Text>
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("SixthPage")}
            >
                <Text style={styles.cardTitle}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("SixthPage")}
            >
                <Text style={styles.cardTitle}>No</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.backgroundColor,
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
        fontSize: theme.text.header.fontSize,
        marginBottom: 20,
        fontFamily: theme.fonts.primary,
    },
    text: {
        color: theme.colors.textColor,
        fontSize: theme.text.small.fontSize,
        fontFamily: theme.fonts.secondary,
        paddingLeft: 20,
        paddingRight: 20,
        width: 300,
        marginBottom: 50,
        textAlign: "center",
    },
    card: {
        width: 300,
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.backgroundColor,
        borderRadius: 8,
        marginBottom: 20,
        elevation: 5,
    },

    cardTitle: {
        fontSize: theme.text.normal.fontSize,
        marginBottom: 10,
        fontFamily: theme.fonts.secondary,
    },
});

export default FifthPage;
