import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppStackParamList } from "../types";
import { Entypo } from "@expo/vector-icons";
import FirstPage from "../screens/StartUp/FirstPage.StartUp";
import SecondPage from "../screens/StartUp/SecondPage.StartUp";
import ThirdPage from "../screens/StartUp/ThirdPage.StartUp";
import FourthPage from "../screens/StartUp/FourthPage.StartUp";
import FifthPage from "../screens/StartUp/FifthPage.StartUp";
import SixthPage from "../screens/StartUp/SixthPage.StartUp";
import SeventhPage from "../screens/StartUp/SeventhPage.StartUp";
import SummaryPage from "../screens/StartUp/SummaryPage.StartUp";
import SignInOptionsPage from "../screens/StartUp/SignInOptionPage.StartUp";
import Welcome from "../screens/Home/Welcome.Home";
import HomePage from "../screens/Home/HomeTabs/HomePage";
import Recipes from "../screens/Home/HomeTabs/RecipesPage";
import SearchRecipe from "../screens/Home/HomeTabs/SearchRecipePage";
import { theme } from "../theme";
import { BottomSheetProvider } from "../contexts/BottomSheetContext";

const Stack = createNativeStackNavigator<AppStackParamList>();
const Tabs = createBottomTabNavigator<AppStackParamList>();

const activeTabColor = theme.colors.accentColor;
const inactiveTabColor = theme.colors.neutralColor;

export const StartUpStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="FirstPage"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="FirstPage" component={FirstPage} />
            <Stack.Screen name="SecondPage" component={SecondPage} />
            <Stack.Screen name="ThirdPage" component={ThirdPage} />
            <Stack.Screen name="FourthPage" component={FourthPage} />
            <Stack.Screen name="FifthPage" component={FifthPage} />
            <Stack.Screen name="SixthPage" component={SixthPage} />
            <Stack.Screen name="SeventhPage" component={SeventhPage} />
            <Stack.Screen name="SummaryPage" component={SummaryPage} />
            <Stack.Screen
                name="SignInOptionsPage"
                component={SignInOptionsPage}
            />
        </Stack.Navigator>
    );
};

export const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="AppTabs" component={AppTabs} />
        </Stack.Navigator>
    );
};

export const AppTabs = () => {
    return (
        <BottomSheetProvider>
            <Tabs.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,

                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: keyof typeof Entypo.glyphMap = "note";
                        if (route.name === "Home") {
                            iconName = "home";
                        } else if (route.name === "Recipes") {
                            iconName = "list";
                        } else if (route.name === "RecipeSearch") {
                            iconName = "magnifying-glass";
                        }
                        return (
                            <Entypo name={iconName} size={24} color={color} />
                        );
                    },
                    tabBarActiveTintColor: activeTabColor,
                    tabBarInactiveTintColor: inactiveTabColor,
                })}
            >
                <Tabs.Screen name="Home" component={HomePage} />
                <Tabs.Screen name="RecipeSearch" component={SearchRecipe} />
                <Tabs.Screen name="Recipes" component={Recipes} />
            </Tabs.Navigator>
        </BottomSheetProvider>
    );
};
