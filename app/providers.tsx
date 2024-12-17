"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { LanguageContext } from "./_contexts/contexts";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<"en" | "tc">("en");

  useEffect(() => {
    if (localStorage.getItem("lang") != "en") setLang("tc");
  }, []);

  return (
    <ChakraProvider>
      <LanguageContext.Provider value={{ lang, setLang }}>
        {children}
      </LanguageContext.Provider>
    </ChakraProvider>
  );
}
