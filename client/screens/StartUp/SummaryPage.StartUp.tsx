import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import summaryImg from "../../assets/images/contract.png";
import { theme } from "../../theme";
import { Ionicons } from "@expo/vector-icons";

const SummaryPage = () => {
      const navigation = useNavigation();
      return (
            <View style={styles.container}>
                  <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-outline" size={18} color="black" />
                        <Text style={styles.backText}>Back</Text>
                  </TouchableOpacity>
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
                        <Text style={[styles.macroText, { marginBottom: 10 }]}>Macronutrients</Text>
                        <Text style={styles.macroText}>Protein : 20g</Text>
                        <Text style={styles.macroText}>Carbohydrates : 50g</Text>
                        <Text style={styles.macroText}>Fat : 10g</Text>
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
      headerTitle: {
            fontSize: theme.text.header.fontSize,
            marginBottom: 50,
            width: 300,
            textAlign: "center",
            fontFamily: theme.fonts.primary,
      },
      image: {
            width: 80,
            height: 80,
            marginBottom: 50,
      },
      subHeader: {
            fontSize: theme.text.small.fontSize,
            marginBottom: 10,
            width: 300,
            fontFamily: theme.fonts.secondary,
      },
      boldText: {
            fontFamily: theme.fonts.primary,
      },
      macrosContainer: {
            width: 300,
            marginBottom: 20,
      },
      macroText: {
            fontSize: theme.text.small.fontSize,
            fontFamily: theme.fonts.secondary,
      },
      createBtn: {
            width: 300,
            height: 50,
            backgroundColor: theme.colors.accentColor,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            elevation: 5,
      },
      createBtnText: {
            fontSize: theme.text.small.fontSize,
            color: theme.colors.backgroundColor,
            fontFamily: theme.fonts.primary,
      },
});

export default SummaryPage;
