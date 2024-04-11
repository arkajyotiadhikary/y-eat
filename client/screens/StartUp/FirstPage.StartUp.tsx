import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CarouselCards from "../../components/Carousel/StartUpCarousel";
import { useNavigation } from "@react-navigation/native";
import { AppStackNavigationProp } from "../../types";
import { theme } from "../../theme";

const FirstPage = () => {
    const navigation = useNavigation<AppStackNavigationProp>();
    return (
        <View style={styles.container}>
            {/* Quate carousel */}
            <CarouselCards />
            {/* Start */}
            <TouchableOpacity
                style={styles.startBtn}
                onPress={() => navigation.navigate("SecondPage")}
            >
                <Text style={styles.startBtnText}>Start</Text>
            </TouchableOpacity>
            {/* already have an account */}
            <Text style={styles.alreadyHaveAccount}>
                Already have an account?
            </Text>
            {/* sign in */}
            <TouchableOpacity
                style={styles.signInBtn}
                onPress={() => navigation.navigate("SignInOptionsPage")}
            >
                <Text style={styles.signInBtnText}>Sign in</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: theme.paddingHorizontal,
        backgroundColor: theme.colors.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
    },
    startBtn: {
        backgroundColor: theme.colors.accentColor,
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
    },
    startBtnText: {
        color: theme.colors.buttonTextColor,
        fontFamily: theme.fonts.primary,
    },
    alreadyHaveAccount: {
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "100",
        fontFamily: theme.fonts.primary,
    },
    signInBtn: {
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    signInBtnText: {
        color: theme.colors.accentColor,
        fontFamily: theme.fonts.primary,
        fontSize: theme.text.small.fontSize,
    },
});

export default FirstPage;
