import { NavigationContainer } from "@react-navigation/native";
import { StartUpStack, AppStack } from "../stacks/Stack";

import { useSelector } from "react-redux";
import { RootState } from "../store";

const Router = () => {
      const { isAuthenticated } = useSelector((state: RootState) => state.userAuthReducer);
      return (
            <NavigationContainer>
                  {isAuthenticated ? <AppStack /> : <StartUpStack />}
            </NavigationContainer>
      );
};
export default Router;
