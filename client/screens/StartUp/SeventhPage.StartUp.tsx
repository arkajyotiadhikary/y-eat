import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigationProp } from "../../types";

import goalImg from "../../assets/images/goal.png";
import { theme } from "../../theme";
import { Ionicons } from "@expo/vector-icons";
const SeventhPage = () => {
    const navigation = useNavigation<AppStackNavigationProp>();

    const [currentWeight, setCurrentWeight] = useState("");
    const [goalWeight, setGoalWeight] = useState("");
    const [fastestTime, setFastestTime] = useState("");

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back-outline" size={18} color="black" />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Set your Goal</Text>
            <Image style={styles.image} source={goalImg} />
            <View style={styles.currentWeightContainer}>
                <Text style={styles.curretWeighText}>Current weight</Text>
                <Text style={styles.curretWeighText}>64 kg</Text>
            </View>

            <Text style={styles.label}>Goal weight</Text>
            <TextInput
                style={styles.input}
                placeholder="Goal weight"
                keyboardType="numeric"
                value={goalWeight}
                onChangeText={setGoalWeight}
            />
            <Text style={styles.label}>
                How fast you wants to achieve your goal
            </Text>
            <TextInput
                style={styles.input}
                placeholder="In months"
                keyboardType="numeric"
                value={fastestTime}
                onChangeText={setFastestTime}
            />
            <View>
                <Text style={styles.noteTitle}>Note</Text>
                <Text style={styles.noteText}>
                    Opting for a slower fat loss approach offers advantages such
                    as preserving muscle mass, avoiding metabolic slowdown,
                    ensuring sustainable habits, maintaining nutrient intake,
                    and minimizing health risks compared to rapid weight loss
                    methods.
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SummaryPage")}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: theme.dimensions.height * 0.1,
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
        fontSize: theme.text.header.fontSize,
        marginBottom: 40,
        width: 300,
        textAlign: "center",
        fontFamily: theme.fonts.primary,
    },
    image: {
        width: 80,
        height: 80,
        marginBottom: 40,
    },
    currentWeightContainer: {
        width: 300,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 40,
    },
    curretWeighText: {
        fontSize: theme.text.normal.fontSize,
        fontWeight: "100",
        fontFamily: theme.fonts.secondary,
    },
    label: {
        fontSize: theme.text.small.fontSize,
        fontWeight: "200",
        marginBottom: 10,
        width: 300,
        textAlign: "center",
        fontFamily: theme.fonts.primary,
    },
    input: {
        borderRadius: 8,
        height: 40,
        borderColor: theme.colors.neutralColor,
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        width: 300,
    },
    noteTitle: {
        fontSize: theme.text.normal.fontSize,
        marginBottom: 10,
        width: 300,
        fontFamily: theme.fonts.primary,
    },
    noteText: {
        fontSize: theme.text.small.fontSize,
        width: 300,
        fontFamily: theme.fonts.secondary,
    },
    buttonContainer: {
        width: 300,
        marginTop: 20,
    },
    button: {
        backgroundColor: theme.colors.accentColor,
        borderRadius: 8,
        padding: 15,
        alignItems: "center",
        elevation: 5,
    },
    buttonText: {
        fontSize: theme.text.small.fontSize,
        color: theme.colors.buttonTextColor,
        fontFamily: theme.fonts.primary,
    },
});

export default SeventhPage;
