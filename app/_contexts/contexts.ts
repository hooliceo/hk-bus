import { createContext } from "react";

export interface EsimateContextType {
  isRefetch: boolean;
  setIsRefetch: (arg0: boolean) => void;
}

export const EstimateContext = createContext<EsimateContextType>({
  isRefetch: false,
  setIsRefetch: () => {},
});

export const DirectionContext = createContext<"outbound" | "inbound">(
  "outbound"
);

export const RouteContext = createContext("");

export interface LanguageContextType {
  lang: "en" | "tc";
  setLang: (arg0: "en" | "tc") => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
});
