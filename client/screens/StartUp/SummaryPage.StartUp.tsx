import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import summaryImg from "../../assets/images/contract.png";
const SummaryPage = () => {
      return (
            <View style={styles.container}>
                  <Text style={styles.headerTitle}>Summary</Text>
                  {/* one image */}
                  <Image style={styles.image} source={summaryImg} />
                  {/* goal weight */}
                  {/* TODO find out according to the data */}
                  <Text style={styles.subHeader}>
                        Your goal is to lose <Text style={styles.boldText}>2 kgs</Text> in
                        <Text style={styles.boldText}> 3 months</Text>.
                  </Text>
                  {/* calories for weight maintainance */}
                  <Text style={styles.subHeader}>
                        Calories for weight <Text style={styles.boldText}>maintenance</Text> is{" "}
                        <Text style={styles.boldText}>2000</Text>
                  </Text>
                  {/* calories for muscle gain */}
                  <Text style={styles.subHeader}>
                        Calories for muscle <Text style={styles.boldText}>gain</Text> is{" "}
                        <Text style={styles.boldText}>3000</Text>
                  </Text>
                  <View style={styles.macrosContainer}>
                        <Text style={[styles.boldText, { marginBottom: 10 }]}>Macronutrients</Text>
                        <Text style={styles.macroText}>Protein : 20g</Text>
                        <Text>Carbohydrates : 50g</Text>
                        <Text>Fat : 10g</Text>
                  </View>
                  <TouchableOpacity style={styles.createBtn}>
                        <Text style={styles.createBtnText}>Create plan</Text>
                  </TouchableOpacity>
                  {/* button create plan */}
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
      },
      headerTitle: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 50,
            width: 300,
            textAlign: "center",
            fontFamily: "LatoBold",
      },
      image: {
            width: 80,
            height: 80,
            marginBottom: 50,
      },
      subHeader: {
            fontSize: 14,
            marginBottom: 10,
            width: 300,
            fontFamily: "MontserratRegular",
      },
      boldText: {
            fontWeight: "bold",
            fontFamily: "LatoBold",
      },
      macrosContainer: {
            width: 300,
            marginBottom: 20,
      },
      macroText: {
            fontSize: 14,
            fontFamily: "MontserratRegular",
      },
      createBtn: {
            width: 300,
            height: 50,
            backgroundColor: "#4CAF50",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            elevation: 5,
      },
      createBtnText: {
            fontSize: 16,
            fontWeight: "bold",
            color: "white",
            fontFamily: "LatoBold",
      },
});

export default SummaryPage;
