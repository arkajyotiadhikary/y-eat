import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../types";

// Images
import sedentaryImg from "../../assets/images/sedentary.png";
import lightlyActiveImg from "../../assets/images/walk.png";
import moderatelyActiveImg from "../../assets/images/bicycle.png";
import veryActiveImg from "../../assets/images/weightlifter.png";
import professionalAthleteImg from "../../assets/images/sportman.png";

const FourthPage = () => {
      const navigation = useNavigation<RootStackNavigationProp>();
      return (
            <View style={styles.container}>
                  <Text style={styles.title}>What is your physical activity level?</Text>
                  <View>
                        <TouchableOpacity
                              style={styles.card}
                              onPress={() => navigation.navigate("FifthPage")}
                        >
                              <Image source={sedentaryImg} style={styles.image} />
                              <View style={styles.cardTitleContainer}>
                                    <Text style={styles.cardTitle}>Sedentary</Text>
                                    <Text style={styles.text}>Little to no physical activity</Text>
                              </View>
                        </TouchableOpacity>
                  </View>
                  <View>
                        <TouchableOpacity
                              style={styles.card}
                              onPress={() => navigation.navigate("FifthPage")}
                        >
                              <Image source={lightlyActiveImg} style={styles.image} />
                              <View style={styles.cardTitleContainer}>
                                    <Text style={styles.cardTitle}>Lightly Active</Text>
                                    <Text style={styles.text}>Excercise 2-3 days a week.</Text>
                              </View>
                        </TouchableOpacity>
                  </View>
                  <View>
                        {/* Sedentary */}
                        <TouchableOpacity
                              style={styles.card}
                              onPress={() => navigation.navigate("FifthPage")}
                        >
                              <Image source={moderatelyActiveImg} style={styles.image} />
                              <View style={styles.cardTitleContainer}>
                                    <Text style={styles.cardTitle}>Moderately Active</Text>
                                    <Text style={styles.text}>Excercise 4-5 days a week.</Text>
                              </View>
                        </TouchableOpacity>
                  </View>
                  <View>
                        <TouchableOpacity
                              style={styles.card}
                              onPress={() => navigation.navigate("FifthPage")}
                        >
                              <Image source={veryActiveImg} style={styles.image} />
                              <View style={styles.cardTitleContainer}>
                                    <Text style={styles.cardTitle}>Very Active</Text>
                                    <Text style={styles.text}>Excercise 4-5 days a week.</Text>
                              </View>
                        </TouchableOpacity>
                  </View>
                  <View>
                        {/* Sedentary */}
                        <TouchableOpacity
                              style={styles.card}
                              onPress={() => navigation.navigate("FifthPage")}
                        >
                              <Image source={professionalAthleteImg} style={styles.image} />
                              <View style={styles.cardTitleContainer}>
                                    <Text style={styles.cardTitle}>Professional Athlete</Text>
                                    <Text style={styles.text}>
                                          Vigorous excercise 6-7 days a week
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
            width: 300,
            textAlign: "center",
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

export default FourthPage;
