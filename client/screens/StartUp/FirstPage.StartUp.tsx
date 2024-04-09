import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CarouselCards from "../../components/Carousel/StartUpCarousel";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../types";

const FirstPage = () => {
      const navigation = useNavigation<RootStackNavigationProp>();
      return (
            <View style={styles.container}>
                  {/* Quate carousel */}
                  <CarouselCards />
                  {/* Start */}
                  <TouchableOpacity
                        style={styles.startBtn}
                        onPress={() => navigation.navigate("SecondPage")}
                  >
                        <Text style={styles.startBtnText}>Start</Text>
                  </TouchableOpacity>
                  {/* already have an account */}
                  <Text style={styles.alreadyHaveAccount}>Already have an account?</Text>
                  {/* sign in */}
                  <TouchableOpacity style={styles.signInBtn}>
                        <Text style={styles.signInBtnText}>Sign in</Text>
                  </TouchableOpacity>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
      },
      startBtn: {
            backgroundColor: "#4CAF50",
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            elevation: 5,
      },
      startBtnText: {
            color: "#fff",
            fontFamily: "LatoBold",
      },
      alreadyHaveAccount: {
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "LatoRegular",
      },
      signInBtn: {
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
      },
      signInBtnText: {
            color: "#4CAF50",
            fontFamily: "LatoBold",
            fontSize: 16,
      },
});

export default FirstPage;
