import React, { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { clearAsync, getUserNameAsync } from "../services/auth_helper";
import { clearAllQuestions } from "../services/redux/savedSlice";
import { useDispatch } from "react-redux";
type AppContextType = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  getUser: () => Promise<void>;
  logOutContext: () => Promise<void>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

/* ---------------- PROVIDER ---------------- */

type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    getUser();
  }, [])

  const getUser = useCallback(async () => {
    try {

      const name = await getUserNameAsync();
      console.log("------CONTEXT------", name);
      if (name) {
        setUserName(name);
      }
    } catch (err) {
      console.log("getUser error:", err);
    }
  }, []);


  const logOutContext = useCallback(async () => {
    try {
      const name = await getUserNameAsync();
      console.log("------CONTEXT------", name);
      if (name) {
        await clearAsync();
        await dispatch(clearAllQuestions());
        setUserName("");
      }
    } catch (err) {
      console.log("getUser error:", err);
    }
  }, []);

  return (
    <AppContext.Provider value={{ userName, setUserName, getUser, logOutContext }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for easy usage
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return context;
};
