import { Dimensions } from "react-native";
export const theme = {
    colors: {
        primary: "#FF6347",
        secondary: "#F4A460",
        accentColor: "#4CAF50",
        backgroundColor: "#FFFFFF",
        neutralColor: "#A9A9A9",
        optionalColor: "#FFD700",
        textColor: "#000000",
        disabledButtonColor: "#9E9E9E",
        buttonTextColor: "#FFFFFF",
        error: "#FF0000",
        success: "#00FF00",
        link: "#3879F3",
    },
    dimensions: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    borderRadius: 5,
    paddingTop: 40,
    paddingHorizontal: 20,
    fonts: {
        primary: "LatoBold",
        secondary: "MontserratRegular",
    },
    text: {
        header: {
            fontSize: 28,
            lineHeight: 36,
        },
        subHeader: {
            fontSize: 24,
            lineHeight: 30,
        },
        normal: {
            fontSize: 20,
            lineHeight: 24,
            fontWeight: "normal",
        },
        small: {
            fontSize: 14,
            lineHeight: 18,
            fontWeight: "normal",
        },
    },
    spacing: {
        large: 20,
        medium: 14,
        small: 8,
        tiny: 4,
    },
};
