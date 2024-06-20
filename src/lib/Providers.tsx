"use client";
import { store } from "@/redux/store";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeRegistry>{children}</ThemeRegistry>
    </Provider>
  );
};

export default Providers;
