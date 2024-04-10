import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface UserAuth {
      isAuthenticated: boolean;
}

const initialAuthState: UserAuth = {
      isAuthenticated: false,
};

export const userAuthSlice = createSlice({
      name: "userAuth",
      initialState: initialAuthState,
      reducers: {
            setAuth: (state, action: PayloadAction<boolean>) => {
                  state.isAuthenticated = action.payload;
            },
      },
});

export const { setAuth } = userAuthSlice.actions;
export const userAuthReducer = userAuthSlice.reducer;
