import { View, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native";
interface item {
      image: ImageSourcePropType;
      quote: string;
}
interface PaginationProps {
      data: item[];
      currentIndex: number;
      setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ data, setCurrentIndex, currentIndex }) => {
      const handlePageChange = (index: number) => {
            setCurrentIndex(index);
      };

      return (
            <View style={styles.pagination}>
                  {data.map((_, index) => (
                        <TouchableOpacity
                              key={index}
                              style={[
                                    styles.paginationDot,
                                    index === currentIndex ? styles.paginationDotActive : null,
                              ]}
                              onPress={() => handlePageChange(index)}
                        />
                  ))}
            </View>
      );
};

const styles = StyleSheet.create({
      pagination: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
      },
      paginationDot: {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: "#A9A9A9",
            marginHorizontal: 5,
      },
      paginationDotActive: {
            backgroundColor: "#FF6347",
      },
});

export default Pagination;
