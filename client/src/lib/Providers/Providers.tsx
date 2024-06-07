"use client";

import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { theme } from "../theme/theme";
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
