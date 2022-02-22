import React, { useMemo } from "react";
import { Box, Button, HStack, Text, VStack } from "native-base";
import { TaskType } from "../TaskSelection";
import Banner from "../../components/Banner";
import useTimer from "../../hooks/useTimer";

type TimerProps = {
  selectedTask: TaskType;
  onCancel: () => void;
};

const Timer: React.FC<TimerProps> = ({ selectedTask, onCancel }) => {
  const { time, pause, isPaused, start } = useTimer();
  const formattedTime = useMemo(() => {
    if (time === null) return "25:00";

    let seconds = time;
    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }, [time]);

  return (
    <VStack flex={1} width={"100%"}>
      <Box mt={4}>
        <Banner>
          <HStack alignItems={"center"} justifyContent={"space-between"}>
            <Text>{selectedTask.title}</Text>
            <Text>0 / 6</Text>
          </HStack>
        </Banner>
      </Box>

      <VStack flex={1} justifyContent={"center"} alignItems={"center"}>
        <Text fontWeight={"black"} fontSize={"6xl"}>
          {formattedTime}
        </Text>
      </VStack>
      <HStack
        alignItems={"center"}
        justifyContent={"center"}
        space={"md"}
        mb={5}
      >
        <Button
          size={"lg"}
          onPress={() => {
            if (time === null) {
              start(25 * 60);
            } else {
              isPaused ? start(time) : pause();
            }
          }}
        >
          {time === null && !isPaused ? "Start" : "Pause"}
          {time !== null && isPaused && "Resume"}
        </Button>
        <Button
          colorScheme={"error"}
          size={"lg"}
          onPress={() => {
            onCancel();
          }}
        >
          Cancel
        </Button>
      </HStack>
    </VStack>
  );
};

export default Timer;
