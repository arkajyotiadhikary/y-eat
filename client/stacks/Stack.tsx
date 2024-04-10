import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../types";

import FirstPage from "../screens/StartUp/FirstPage.StartUp";
import SecondPage from "../screens/StartUp/SecondPage.StartUp";
import ThirdPage from "../screens/StartUp/ThirdPage.StartUp";
import FourthPage from "../screens/StartUp/FourthPage.StartUp";
import FifthPage from "../screens/StartUp/FifthPage.StartUp";
import SixthPage from "../screens/StartUp/SixthPage.StartUp";
import SeventhPage from "../screens/StartUp/SeventhPage.StartUp";
import SummaryPage from "../screens/StartUp/SummaryPage.StartUp";
import SignInOptionsPage from "../screens/StartUp/SignInOptionPage.StartUp";
import Welcome from "../screens/Home/Welcome/Welcome.Home";

const Stack = createNativeStackNavigator<AppStackParamList>();

export const StartUpStack = () => {
      return (
            <Stack.Navigator
                  initialRouteName="FirstPage"
                  screenOptions={{
                        headerShown: false,
                  }}
            >
                  <Stack.Screen name="FirstPage" component={FirstPage} />
                  <Stack.Screen name="SecondPage" component={SecondPage} />
                  <Stack.Screen name="ThirdPage" component={ThirdPage} />
                  <Stack.Screen name="FourthPage" component={FourthPage} />
                  <Stack.Screen name="FifthPage" component={FifthPage} />
                  <Stack.Screen name="SixthPage" component={SixthPage} />
                  <Stack.Screen name="SeventhPage" component={SeventhPage} />
                  <Stack.Screen name="SummaryPage" component={SummaryPage} />
                  <Stack.Screen name="SignInOptionsPage" component={SignInOptionsPage} />
            </Stack.Navigator>
      );
};
export const AppStack = () => {
      return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="Welcome" component={Welcome} />
            </Stack.Navigator>
      );
};
