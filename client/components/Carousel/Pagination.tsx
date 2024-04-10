import { View, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native";
import { theme } from "../../theme";
interface item {
      image: ImageSourcePropType;
      quote: string;
}
interface PaginationProps {
      data: item[];
      currentIndex: number;
      setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
      optionalDotBackGroundColor?: string;
}

const Pagination: React.FC<PaginationProps> = ({
      data,
      setCurrentIndex,
      currentIndex,
      optionalDotBackGroundColor,
}) => {
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
                                    {
                                          backgroundColor:
                                                optionalDotBackGroundColor ??
                                                theme.colors.disabledButtonColor,
                                    },
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
            backgroundColor: theme.colors.disabledButtonColor,
            marginHorizontal: 5,
      },
      paginationDotActive: {
            backgroundColor: theme.colors.link,
      },
});

export default Pagination;
