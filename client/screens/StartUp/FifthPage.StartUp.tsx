import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RootStackNavigationProp } from "../../types";
import { theme } from "../../theme";

const FifthPage = () => {
      const navigation = useNavigation<RootStackNavigationProp>();
      return (
            <View style={styles.container}>
                  <Text style={styles.title}>Do you do strength training?</Text>
                  <Text style={styles.text}>
                        Strength training helps build muscle and reduce risk of injury (like in
                        athletics). Improves overall fitness by challenging muscles.
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
