import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AppStackParamList = {
    FirstPage: undefined;
    SecondPage: undefined;
    ThirdPage: undefined;
    FourthPage: undefined;
    FifthPage: undefined;
    SixthPage: undefined;
    SeventhPage: undefined;
    SummaryPage: undefined;
    SignInOptionsPage: undefined;
    Welcome: undefined;
    AppTabs: undefined;
    Home: undefined;
    Recipes: undefined;
    RecipeSearch: undefined;
};
export type AppStackNavigationProp = NativeStackScreenProps<
    AppStackParamList,
    FirstPage,
    SecondPage,
    ThirdPagem,
    FourthPage,
    FifthPage,
    SixthPage,
    SeventhPage,
    SummaryPage,
    SignInOptionsPage,
    Welcome,
    AppTabs,
    Home,
    Recipes,
    RecipeSearch
>;
