import React, { useState } from "react";
import {
      View,
      FlatList,
      Text,
      ImageSourcePropType,
      StyleSheet,
      TouchableOpacity,
} from "react-native";
import CarouselCardItem from "./CarouselCardItem";

import first from "../../assets/images/1.png";
import second from "../../assets/images/2.png";
import third from "../../assets/images/3.png";
import Pagination from "./Pagination";

const data = [
      {
            image: first as ImageSourcePropType,
            quote: "Transform your life one meal at a time. Choose health, choose success.",
      },
      {
            image: second as ImageSourcePropType,
            quote: "A healthy diet is the cornerstone of a successful life. Invest in yourself.",
      },
      {
            image: third as ImageSourcePropType,
            quote: "Unlock your true potential with a balanced diet. Your success story starts in the kitchen.",
      },
];

const StartUpCarousel = () => {
      const [currentIndex, setCurrentIndex] = useState(0);

      return (
            <View style={styles.container}>
                  <FlatList
                        data={data}
                        renderItem={({ item, index }) => (
                              <CarouselCardItem item={item} index={index} />
                        )}
                        horizontal
                        pagingEnabled
                        snapToAlignment="center"
                        showsHorizontalScrollIndicator={false}
                        onScroll={(event) => {
                              const { contentOffset, layoutMeasurement } = event.nativeEvent;
                              const currentIndex = Math.round(
                                    contentOffset.x / layoutMeasurement.width
                              );
                              setCurrentIndex(currentIndex);
                        }}
                  />
                  <Pagination
                        data={data}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                  />
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            height: 500,
            justifyContent: "center",
            alignItems: "center",
      },
});

export default StartUpCarousel;
