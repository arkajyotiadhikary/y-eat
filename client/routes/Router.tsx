import { NavigationContainer } from "@react-navigation/native";
import { StartUpStack } from "../stacks/Stack";

const Router = () => {
      return (
            <NavigationContainer>
                  <StartUpStack />
            </NavigationContainer>
      );
};
export default Router;
