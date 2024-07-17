import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const Direction = ({
  direction,
  isLoading,
  setDirection,
}: {
  direction: string;
  isLoading: boolean;
  setDirection: (arg0: string) => void;
}) => {
  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setDirection((ev.target as HTMLElement).innerText.toLowerCase());
  };

  return (
    <ButtonGroup mb={4} w={["80%", null, "50%"]} spacing={6}>
      <Button
        onClick={handleClick}
        width="100%"
        variant="outline"
        colorScheme="green"
        leftIcon={<ArrowRightIcon />}
        _active={{ bg: "#2F855A", color: "#fff", borderColor: "#2F855A" }}
        _hover={{ bg: "#2F855A", color: "#fff", borderColor: "#2F855A" }}
        isActive={direction == "inbound"}
        isDisabled={isLoading}
        isLoading={isLoading}
        py={6}
      >
        <Box as="span">INBOUND</Box>
      </Button>

      <Button
        onClick={handleClick}
        width="100%"
        variant="outline"
        colorScheme="red"
        rightIcon={<ArrowLeftIcon />}
        _active={{ bg: "#C53030", color: "#fff", borderColor: "#C53030" }}
        _hover={{ bg: "#C53030", color: "#fff", borderColor: "#C53030" }}
        isActive={direction == "outbound"}
        isDisabled={isLoading}
        isLoading={isLoading}
        py={6}
      >
        <Box as="span">OUTBOUND</Box>
      </Button>
    </ButtonGroup>
  );
};

export default Direction;