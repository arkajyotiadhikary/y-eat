import React from "react";
import { View, Text, StyleSheet, Image, ImageSourcePropType, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface CarouselCardItemProps {
      item: {
            image: ImageSourcePropType;
            quote: string;
      };
      index: number;
}

const CarouselCardItem: React.FC<CarouselCardItemProps> = ({ item, index }) => {
      return (
            <View style={styles.container}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.text}>{item.quote}</Text>
            </View>
      );
};
const styles = StyleSheet.create({
      container: {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 8,
            width: width,
      },
      image: {
            width: 200,
            height: 200,
            resizeMode: "cover",
      },
      text: {
            color: "#222",
            fontSize: 18,
            fontFamily: "MontserratRegular",
            paddingLeft: 20,
            paddingRight: 20,
            width: 300,
            textAlign: "center",
      },
});

export default CarouselCardItem;
