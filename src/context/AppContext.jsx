"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [user, setUser] = useState({
    pickupAddress: {
      Flatinfo: "",
      AreaInfo: "",
      CityStateInfo: "",
      Pincode: ""
    },
    dropAddress: {
      Flatinfo: "",
      AreaInfo: "",
      CityStateInfo: "",
      Pincode: ""
    },
    typePackage: "",
    size: "",
    price: "",
    distance: "",
    name: "",
    phoneNumber: "",
    paymentMethod: ""
  });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
