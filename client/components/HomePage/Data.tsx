import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";

const Data = () => {
    return (
        <View style={styles.container}>
            {/* cal */}
            <View style={styles.data}>
                <Text style={styles.dataTitle}>Calories</Text>
                <Text style={styles.dataValue}>0/2000</Text>
            </View>

            {/* protein */}
            <View style={styles.data}>
                <Text style={styles.dataTitle}>Proties</Text>
                <Text style={styles.dataValue}>0/2000</Text>
            </View>
            {/* carbs */}
            <View style={styles.data}>
                <Text style={styles.dataTitle}>Carbs</Text>
                <Text style={styles.dataValue}>0/2000</Text>
            </View>
            {/* fats */}
            <View style={styles.data}>
                <Text style={styles.dataTitle}>fats</Text>
                <Text style={styles.dataValue}>0/2000</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: theme.dimensions.width,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        marginVertical: 10,
    },
    data: {
        alignItems: "center",
        justifyContent: "center",
    },
    dataTitle: {
        fontSize: theme.text.small.fontSize,
        fontWeight: "bold",
    },
    dataValue: {
        fontSize: theme.text.small.fontSize,
        fontWeight: "bold",
    },
});
export default Data;
