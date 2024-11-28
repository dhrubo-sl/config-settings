/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ISettings } from "@/interfaces";
import { defaultConfig, LOCAL_STORAGE_KEY } from "@/utils/constants";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ConfigContextType = {
  configData: ISettings;
  updateConfigDetails: (payload: { name: string; value: any }) => void;
  dataLoaded: boolean;
  resetLocalStorage: () => void;
};

export const ConfigContext = createContext<ConfigContextType | null>(null);

export const ConfigContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [configData, setConfigData] = useState<ISettings>(defaultConfig);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    readFromLocalStorage();
    setDataLoaded(true);
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      saveDataToLocalStorage(configData);
    }
  }, [configData, dataLoaded]);

  const updateConfigDetails = useCallback(
    (payload: Record<string, any>) => {
      setConfigData((prevData: ISettings) => {
        console.log({ prevData });

        // Split the name into a path (e.g., 'user.address.city' -> ['user', 'address', 'city'])
        const keys = payload.name.split(".");

        // Make a shallow copy of the nested object
        const updatedData = { ...prevData };

        // Use a pointer to traverse the nested structure
        let pointer: any = updatedData;

        // Traverse the path except the last key
        keys.slice(0, -1).forEach((key: string) => {
          if (!pointer[key]) pointer[key] = {}; // Ensure the path exists
          pointer = pointer[key];
        });

        // Update the final key
        pointer[keys[keys.length - 1]] = payload.value;

        return updatedData;
      });
    },
    [configData]
  );

  const saveDataToLocalStorage = (currentConfigData: ISettings) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentConfigData));
  };

  const readFromLocalStorage = () => {
    const loadedDataString = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!loadedDataString) {
      return setConfigData(defaultConfig);
    }
    const parsed = JSON.parse(loadedDataString);
    setConfigData(parsed);
  };

  const resetLocalStorage = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setConfigData(defaultConfig);
  };

  const contextValue = useMemo(
    () => ({
      configData,
      dataLoaded,
      updateConfigDetails,
      resetLocalStorage,
    }),
    [configData, dataLoaded, updateConfigDetails]
  );

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
};

export function useConfigContext() {
  const context = useContext(ConfigContext);
  if (context === null) {
    throw new Error(
      "useConfigContext must be used within a ConfigContextProvider"
    );
  }
  return context;
}
