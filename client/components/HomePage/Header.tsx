/* 
- header with options
    - Calander button
    - todays with go back and go forward button
    - 3 dots with option menu
*/

import { Entypo } from "@expo/vector-icons";
import { theme } from "../../theme";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Entypo name="calendar" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.headerDay}>
                <TouchableOpacity>
                    <Entypo name="chevron-small-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Wed</Text>
                <TouchableOpacity>
                    <Entypo
                        name="chevron-small-right"
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: theme.dimensions.width,
        paddingHorizontal: theme.paddingHorizontal,
    },
    headerDay: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 10,
    },
});

export default Header;
