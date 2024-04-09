import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../types";

import goalImg from "../../assets/images/goal.png";
const SeventhPage = () => {
      const navigation = useNavigation<RootStackNavigationProp>();

      const [currentWeight, setCurrentWeight] = useState("");
      const [goalWeight, setGoalWeight] = useState("");
      const [fastestTime, setFastestTime] = useState("");

      return (
            <View style={styles.container}>
                  <Text style={styles.title}>Set your Goal</Text>
                  <Image style={styles.image} source={goalImg} />
                  <View style={styles.currentWeightContainer}>
                        <Text style={styles.curretWeighText}>Current weight</Text>
                        <Text style={styles.curretWeighText}>64 kg</Text>
                  </View>

                  <Text style={styles.label}>Goal weight</Text>
                  <TextInput
                        style={styles.input}
                        placeholder="Goal weight"
                        keyboardType="numeric"
                        value={goalWeight}
                        onChangeText={setGoalWeight}
                  />
                  <Text style={styles.label}>How fast you wants to achieve your goal</Text>
                  <TextInput
                        style={styles.input}
                        placeholder="In months"
                        keyboardType="numeric"
                        value={fastestTime}
                        onChangeText={setFastestTime}
                  />
                  <View>
                        <Text style={styles.noteTitle}>Note</Text>
                        <Text style={styles.noteText}>
                              Opting for a slower fat loss approach offers advantages such as
                              preserving muscle mass, avoiding metabolic slowdown, ensuring
                              sustainable habits, maintaining nutrient intake, and minimizing health
                              risks compared to rapid weight loss methods.
                        </Text>
                  </View>
                  <View style={styles.buttonContainer}>
                        <TouchableOpacity
                              style={styles.button}
                              onPress={() => navigation.navigate("SummaryPage")}
                        >
                              <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                  </View>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: "center",
            paddingTop: 80,
            backgroundColor: "#f9f9f9",
            paddingHorizontal: 20,
            paddingVertical: 40,
      },
      title: {
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
      currentWeightContainer: {
            width: 300,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 40,
      },
      curretWeighText: {
            fontSize: 18,
            fontWeight: "100",
            fontFamily: "LatoBold",
      },
      label: {
            fontSize: 16,
            fontWeight: "200",
            marginBottom: 10,
            width: 300,
            textAlign: "center",
            fontFamily: "LatoBold",
      },
      input: {
            borderRadius: 8,
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
            width: 300,
      },
      noteTitle: {
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 10,
            width: 300,
            fontFamily: "LatoBold",
      },
      noteText: {
            fontSize: 12,
            width: 300,
            fontFamily: "MontserratRegular",
      },
      buttonContainer: {
            width: 300,
            marginTop: 20,
      },
      button: {
            backgroundColor: "#4CAF50",
            borderRadius: 8,
            padding: 15,
            alignItems: "center",
            elevation: 5,
      },
      buttonText: {
            fontSize: 16,
            color: "white",
            fontFamily: "LatoBold",
      },
});

export default SeventhPage;
