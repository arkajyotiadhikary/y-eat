import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../../../theme";

const SearchRecipe = () => {
    return (
        <View style={styles.container}>
            {/* Search bar */}
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBarHolder}>
                    <TextInput
                        placeholder="Search Recipe"
                        style={styles.searchBar}
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Entypo
                        name="magnifying-glass"
                        size={24}
                        color={theme.colors.buttonTextColor}
                    />
                </TouchableOpacity>
            </View>
            {/* list of your favourite recipes */}
            <View style={styles.preSearchResultContainer}>
                <Text style={styles.preSearchResultHeaderTitle}>Favorites</Text>
                <View>
                    {/* list of users favourites foods */}
                    <Text>No favourite foods found.</Text>
                </View>
            </View>
            {/* recently searched recipes */}
            <View style={styles.preSearchResultContainer}>
                <Text style={styles.preSearchResultHeaderTitle}>
                    Recently Entered
                </Text>
                <View>
                    {/* list of users favourites foods */}
                    <Text>No recently searched foods found.</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.colors.backgroundColor,
        paddingTop: theme.paddingTop,
    },
    headerTitle: {
        fontSize: theme.text.normal.fontSize,
    },
    searchBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        backgroundColor: theme.colors.accentColor,
        borderRadius: 10,
        elevation: 5,
    },
    searchBarHolder: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme.colors.backgroundColor,
        padding: 10,
        marginEnd: 10,
        borderRadius: 10,
        borderColor: theme.colors.neutralColor,
        borderWidth: 1,
        width: theme.dimensions.width - 100,
    },
    searchBar: {
        fontSize: theme.text.normal.fontSize,
        fontFamily: theme.fonts.primary,
        color: theme.colors.textColor,
    },
    searchBtn: {
        marginEnd: 10,
    },
    preSearchResultContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    preSearchResultHeaderTitle: {
        fontSize: theme.text.normal.fontSize,
        fontFamily: theme.fonts.primary,
        color: theme.colors.textColor,
    },
});

export default SearchRecipe;
