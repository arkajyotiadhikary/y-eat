import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

// Image
import boy from "../../assets/images/boy.png";
import girl from "../../assets/images/girl.png";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../types";

const ThirdPage = () => {
      const navigation = useNavigation<RootStackNavigationProp>();

      const [selectedGender, setSelectedGender] = useState("");

      const handleGenderSelect = (gender: string) => {
            setSelectedGender(gender);
      };
      return (
            <View style={styles.container}>
                  {/* gender */}
                  <View style={styles.genderContainer}>
                        <TouchableOpacity
                              style={[
                                    styles.genderButton,
                                    selectedGender === "male" && styles.selected,
                              ]}
                              onPress={() => handleGenderSelect("male")}
                        >
                              <Image style={styles.image} source={boy} />
                              <Text style={styles.genderText}>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                              style={[
                                    styles.genderButton,
                                    selectedGender === "female" && styles.selected,
                              ]}
                              onPress={() => handleGenderSelect("female")}
                        >
                              <Image style={styles.image} source={girl} />
                              <Text style={styles.genderText}>Female</Text>
                        </TouchableOpacity>
                  </View>
                  <Text style={styles.inputLabel}> Please select a gender</Text>
                  {/* date of birth */}
                  <View style={styles.dateContainer}>
                        <Text style={styles.inputLabel}>Date of birth</Text>
                        <TextInput
                              style={styles.dateTextInput}
                              placeholder="DD"
                              keyboardType="numeric"
                              maxLength={2}
                        />
                        <Text style={styles.slash}>/</Text>
                        <TextInput
                              style={styles.dateTextInput}
                              placeholder="MM"
                              keyboardType="numeric"
                              maxLength={2}
                        />
                        <Text style={styles.slash}>/</Text>
                        <TextInput
                              style={[styles.dateTextInput, { width: 80 }]}
                              placeholder="YYYY"
                              keyboardType="numeric"
                              maxLength={4}
                        />
                  </View>

                  {/* height */}
                  <View style={styles.heightContainer}>
                        <Text style={styles.inputLabel}>Height</Text>
                        <TextInput
                              style={styles.heightTextInput}
                              placeholder="Height (cm)"
                              keyboardType="numeric"
                              maxLength={3}
                        />
                  </View>
                  {/* weight */}
                  <View style={styles.weightContainer}>
                        <Text style={styles.inputLabel}>Weight</Text>
                        <TextInput
                              style={styles.weightTextInput}
                              placeholder="Weight (kg)"
                              keyboardType="numeric"
                              maxLength={3}
                        />
                  </View>
                  {/* next button */}
                  {/* TODO For now the next button is disabled its just navigate to the fourth page */}
                  <TouchableOpacity
                        style={styles.nextBtn}
                        onPress={() => navigation.navigate("FourthPage")}
                  >
                        <Text style={styles.nextBtnText}>Next</Text>
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
      nextBtn: {
            backgroundColor: "#4CAF50",
            padding: 10,
            borderRadius: 5,
            marginTop: 40,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            elevation: 5,
      },
      nextBtnText: {
            color: "#fff",
            fontSize: 16,
            fontFamily: "LatoBold",
      },
      title: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 50,
            fontFamily: "LatoBold",
      },
      genderContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
      },
      genderButton: {
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            padding: 10,
            margin: 10,
      },
      image: {
            width: 40,
            height: 40,
            marginBottom: 10,
            resizeMode: "cover",
      },
      genderText: {
            fontSize: 16,
            fontFamily: "LatoRegular",
      },
      selected: {
            backgroundColor: "#ccc",
      },

      inputLabel: {
            fontSize: 16,
            fontFamily: "LatoRegular",
            marginEnd: 10,
      },
      dateContainer: {
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
      },
      dateTextInput: {
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            padding: 10,
            margin: 10,
            width: 50,
            textAlign: "center",
            fontFamily: "LatoRegular",
      },
      slash: {
            fontSize: 16,
            fontFamily: "LatoRegular",
      },
      heightContainer: {
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
      },
      heightTextInput: {
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            padding: 10,
            margin: 10,
            width: 100,
            textAlign: "center",
            fontFamily: "LatoRegular",
      },
      weightContainer: {
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
      },
      weightTextInput: {
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            padding: 10,
            margin: 10,
            width: 100,
            textAlign: "center",
            fontFamily: "LatoRegular",
      },
});

export default ThirdPage;
