"use client";

import { useState, useEffect, useContext } from "react";
import {
  AccordionButton,
  AccordionIcon,
  Flex,
  Box,
  Skeleton,
} from "@chakra-ui/react";
import { EstimateContext, LanguageContext } from "../_contexts/contexts";

const Stop = ({ id, inView }: { id: string; inView: boolean }) => {
  const [{ en, tc }, setStop] = useState<{ [key: string]: string | undefined }>(
    {}
  );
  const [isLoading, setIsLoading] = useState(false);
  const { isRefetch } = useContext(EstimateContext);
  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    const getStop = async (stopID: string) => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://rt.data.gov.hk/v2/transport/citybus/stop/${stopID}`
        );

        const { data } = await res.json();

        setStop({
          en: data.name_en,
          tc: data.name_tc,
        });
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (inView) getStop(id);
  }, [id, inView]);

  useEffect(() => {
    if (isRefetch) setIsLoading(true);
    else setIsLoading(false);
  }, [isRefetch]);

  return (
    <Skeleton isLoaded={!isLoading} startColor="#27272a" endColor="#3f3f46">
      <AccordionButton
        bg="#27272a"
        _expanded={{ bg: "#3f3f46" }}
        _hover={{ bg: "#3f3f46" }}
        className="cursor-pointer"
        p={4}
        borderRadius="10px"
      >
        <Flex
          as="span"
          flex="0.9"
          textAlign="left"
          h="48px"
          overflow="scroll"
          align="center"
        >
          <Box maxHeight="48px">{lang == "en" ? en : tc}</Box>
        </Flex>
        <AccordionIcon flex="0.1" />
      </AccordionButton>
    </Skeleton>
  );
};

export default Stop;
