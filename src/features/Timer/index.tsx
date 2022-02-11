import React from "react";
import { Button, Card, HStack, Text, VStack } from "native-base";
import { TaskType } from "../TaskSelection";

type TimerProps = {
  selectedTask: TaskType;
  onCancel: () => void;
};

const Timer: React.FC<TimerProps> = ({ selectedTask, onCancel }) => {
  return (
    <VStack flex={1} width={"100%"}>
      <Card mt={1}>
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <Text>{selectedTask.title}</Text>
          <Text>0 / 6</Text>
        </HStack>
      </Card>

      <VStack flex={1} justifyContent={"center"} alignItems={"center"}>
        <Text fontWeight={"black"} fontSize={"6xl"}>
          25:00
        </Text>
      </VStack>
      <HStack alignItems={"center"} justifyContent={"center"} space={"md"}>
        <Button size={"lg"}>Start</Button>
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
