import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RootStackNavigationProp } from "../../types";

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
            backgroundColor: "#fff",
      },
      title: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
            fontFamily: "LatoBold",
      },
      text: {
            color: "#222",
            fontSize: 14,
            fontFamily: "MontserratRegular",
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
            backgroundColor: "white",
            borderRadius: 8,
            marginBottom: 20,
            elevation: 5,
      },

      cardTitle: {
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 10,
            fontFamily: "LatoBold",
      },
});

export default FifthPage;
