import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../types";
// Images
import egg from "../../assets/images/boiled-egg.png";
import tea from "../../assets/images/tea.png";
import wheat from "../../assets/images/wheat.png";
import { theme } from "../../theme";
import { Ionicons } from "@expo/vector-icons";

const SecondPage = () => {
      const navigation = useNavigation<RootStackNavigationProp>();
      return (
            <View style={styles.container}>
                  {/* back btn */}
                  <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-outline" size={18} color="black" />
                        <Text style={styles.backText}>Back</Text>
                  </TouchableOpacity>
                  {/* Whats your goal */}
                  <Text style={styles.title}>What's your goal?</Text>
                  {/* three options */}
                  <View>
                        <TouchableOpacity
                              style={styles.card}
                              onPress={() => navigation.navigate("ThirdPage")}
                        >
                              {/* one image */}
                              <Image source={wheat} style={styles.image} />
                              {/* title */}
                              <View style={styles.cardTitleContainer}>
                                    <Text style={styles.cardTitle}>Weight loss</Text>
                                    {/* text */}
                                    <Text style={styles.text}>
                                          Optimize fat loss without sacrificing muscle mass
                                    </Text>
                              </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                              style={styles.card}
                              onPress={() => navigation.navigate("ThirdPage")}
                        >
                              {/* one image */}
                              <Image source={tea} style={styles.image} />
                              {/* title */}
                              <View style={styles.cardTitleContainer}>
                                    <Text style={styles.cardTitle}>Weight Maintenance</Text>
                                    {/* text */}
                                    <Text style={styles.text}>
                                          Maintain your weight while being healthy
                                    </Text>
                              </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                              style={styles.card}
                              onPress={() => navigation.navigate("ThirdPage")}
                        >
                              {/* one image */}
                              <Image source={egg} style={styles.image} />
                              {/* title */}
                              <View style={styles.cardTitleContainer}>
                                    <Text style={styles.cardTitle}>Muscle Growth</Text>
                                    {/* text */}
                                    <Text style={styles.text}>
                                          Gain muscle mass and increase your metabolism
                                    </Text>
                              </View>
                        </TouchableOpacity>
                  </View>
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
            fontFamily: theme.fonts.primary,
            marginBottom: 50,
      },
      card: {
            width: 300,
            height: 130,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.colors.backgroundColor,
            borderRadius: 8,
            marginBottom: 20,
            elevation: 5,
      },
      cardTitleContainer: {
            alignItems: "center",
            justifyContent: "center",
      },
      cardTitle: {
            fontSize: theme.text.normal.fontSize,
            fontFamily: theme.fonts.primary,
            marginBottom: 10,
      },
      image: {
            width: 50,
            height: 50,
            marginEnd: 10,
            resizeMode: "cover",
      },
      text: {
            color: theme.colors.textColor,
            fontSize: theme.text.small.fontSize,
            fontFamily: theme.fonts.secondary,
            paddingLeft: 20,
            paddingRight: 20,
            width: 200,
            textAlign: "center",
      },
});

export default SecondPage;
