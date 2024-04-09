import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../types";
// Images
import egg from "../../assets/images/boiled-egg.png";
import tea from "../../assets/images/tea.png";
import wheat from "../../assets/images/wheat.png";

const SecondPage = () => {
      const navigation = useNavigation<RootStackNavigationProp>();
      return (
            <View style={styles.container}>
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
            backgroundColor: "#fff",
      },
      title: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 50,
            fontFamily: "LatoBold",
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
      cardTitleContainer: {
            alignItems: "center",
            justifyContent: "center",
      },
      cardTitle: {
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 10,
            fontFamily: "LatoBold",
      },
      image: {
            width: 50,
            height: 50,
            resizeMode: "cover",
      },
      text: {
            color: "#222",
            fontSize: 12,
            fontFamily: "MontserratRegular",
            paddingLeft: 20,
            paddingRight: 20,
            width: 200,
            textAlign: "center",
      },
});

export default SecondPage;
