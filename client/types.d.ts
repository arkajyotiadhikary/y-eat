import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
      FirstPage: undefined;
      SecondPage: undefined;
      ThirdPage: undefined;
      FourthPage: undefined;
      FifthPage: undefined;
      SixthPage: undefined;
      SeventhPage: undefined;
      SummaryPage: undefined;
};
export type RootStackNavigationProp = NativeStackScreenProps<
      RootStackParamList,
      FirstPage,
      SecondPage,
      ThirdPage,
      FourthPage,
      FifthPage,
      SixthPage,
      SeventhPage,
      SummaryPage
>;
