import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";
import SelectDropdown from "react-native-select-dropdown";
import React, { Dispatch } from "react";

interface DropDownProps {
    setMeal: Dispatch<React.SetStateAction<string>>;
}

const meals: string[] = [
    "Breakfast",
    "Morning snacks",
    "Afternoon snacks",
    "Lunch",
    "Evening snacks",
    "Dinner",
    "Late night snacks",
];

const DropDown: React.FC<DropDownProps> = ({ setMeal }) => {
    return (
        <SelectDropdown
            data={meals}
            onSelect={(selectedMeal, index) => {
                setMeal(selectedMeal);
            }}
            renderButton={(selectedMeal, isOpen) => {
                return (
                    <View style={styles.dropDonwBtn}>
                        <Text style={styles.dropDownBtnText}>
                            {(selectedMeal && selectedMeal) ||
                                "Select Your Meal"}
                        </Text>
                    </View>
                );
            }}
            renderItem={(item, index, isSelected) => {
                return (
                    <View style={styles.itemHolder}>
                        <Text style={styles.item}>{item}</Text>
                    </View>
                );
            }}
            dropdownStyle={styles.dropdownMenuStyle}
        />
    );
};

const styles = StyleSheet.create({
    dropDonwBtn: {
        backgroundColor: theme.colors.accentColor,
        borderRadius: 8,
        padding: 10,
        alignSelf: "flex-start",
        marginTop: 20,
    },
    dropDownBtnText: {
        color: theme.colors.buttonTextColor,
        fontFamily: theme.fonts.primary,
    },
    dropdownMenuStyle: {
        width: "auto",
        padding: 10,
        borderRadius: 10,
    },
    itemHolder: {
        padding: 5,
    },
    item: {
        fontFamily: theme.fonts.secondary,
    },
});

export default DropDown;
