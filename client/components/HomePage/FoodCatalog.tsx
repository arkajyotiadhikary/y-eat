import { ImageSourcePropType, ScrollView, Text } from "react-native";
import AddFoodSection from "./AddFoodSection";
import appleImage from "../../assets/images/apple.png";

interface FoodItem {
    image: ImageSourcePropType;
    name: string;
    quantity: string;
}

interface FoodList {
    breakfast: FoodItem[];
}

const dummyFoodList: FoodList = {
    breakfast: [
        {
            image: appleImage,
            name: "Apple",
            quantity: "1",
        },
        {
            image: appleImage,
            name: "Apple",
            quantity: "1",
        },
    ],
};

const FoodCatalog = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* Breakfast */}
            <AddFoodSection
                foodSectionTitle="Breakfast"
                foodList={dummyFoodList.breakfast}
            />
            {/* Morning Snacks */}
            <AddFoodSection foodSectionTitle="Morning Snacks" />
            {/* Afternoon Snacks */}
            <AddFoodSection foodSectionTitle="Afternoon Snacks" />
            {/* Lunch */}
            <AddFoodSection foodSectionTitle="Lunch" />
            {/* Evening Snacks */}
            <AddFoodSection foodSectionTitle="Evening Snacks" />
            {/* Dinner */}
            <AddFoodSection foodSectionTitle="Dinner" />
            {/* Late Night Snacks */}
            <AddFoodSection foodSectionTitle="Late Night Snacks" />
        </ScrollView>
    );
};

export default FoodCatalog;
